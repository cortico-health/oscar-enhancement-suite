import useWebSocket from "react-use-websocket";
import { useEffect, useRef, useState } from "preact/hooks";
import { observer } from "mobx-react-lite";
import { useStore } from "../../store/mobx";
import MChatTools from "../Molecules/MChatTools";
import AFileInputShow from "../Atoms/AFileInputShow";
import MSend from "../Molecules/MSend";
import MMessageCard from "../Molecules/MMessageCard";
import ASvg from "../Atoms/ASvg";
import NoDiscussionLogo from "../../../../../resources/icons/chat-alt2.svg"
import ASpinner from "../Atoms/ASpinner";
import { getWsChatUrl } from "../../../../Utils/VcnUtils";
import { loadExtensionStorageValue } from "../../../../Utils/Utils";
import { createFile, getChatMessageData, getConversation } from "../../../../Api/Vcn/Conversations.js";


const CMessageList = () => {
    const { conversationStore, patientStore } = useStore();
    const sendRef = useRef(null);
    const messagesEndRef = useRef(null);

    const [messages, setMessages] = useState(undefined);
    const [socketUrl, setSocketUrl] = useState(null);
    const [preview, setPreview] = useState(null);

    const [patientSelected, setPatientSelected] = useState(null);
    const [uploadedFile, setUploadedFile] = useState(null);
    const [fileStats, setFileStats] = useState(null);
    const [readHistory, setReadHistory] = useState(false);
    const [loading, setLoading] = useState(false);

    const { getWebSocket } = useWebSocket(socketUrl, {
        onOpen: () => onChatSocketOpen(),
        onClose: () => { },
        shouldReconnect: (closeEvent) => true,
        onMessage: (event) => processMessage(event)
    });

    const processMessage = (e) => {
        const data = JSON.parse(e.data);
        const newMessage = JSON.parse(data.text);
        setMessages([newMessage, ...messages]);
        handlers.onRead();
    }

    const onChatSocketOpen = () => {
        messagesEndRef?.current?.scrollIntoView();
        handlers.onRead();
    }

    const handlers = {
        onUpload: (e) => {
            const file = e.target.files[0];
            const extension = file.name.split(".").pop().toLowerCase();

            createFile(file).then((response) => { return response.json() }).then((data) => {
                setUploadedFile(data);
                setPreview({ dataURL: data.file, name: file.name, type: extension });
            }).catch((error) => {
                console.log(error);
            });
        },
        removeFile: () => {
            setUploadedFile(null);
            setPreview(null);
        },
        onSend: () => {
            const value = sendRef?.current?.base?.lastElementChild?.value;
            if (value || uploadedFile) {
                getWebSocket().send(JSON.stringify({
                    'body': value ? value : '',
                    'file': uploadedFile ? uploadedFile.id : null
                }));
                setUploadedFile(null);
                setPreview(null);
                sendRef.current.base.lastElementChild.value = "";
                window.scrollTo(0, document.body.scrollHeight);
            }
        },
        onRead: () => {
            if (conversationStore.conversations.selected) {
                getWebSocket().send(JSON.stringify({
                    'conversation': conversationStore.conversations.selected.id,
                }));
            }
        },
    };

    useEffect(() => {
        const conversation = conversationStore.conversations.selected;

        if (conversation) {
            setLoading(true);

            getConversation(conversation.id).then((res) => { return res.json() }).then(
                (data) => {
                    setFileStats(data.stats)
                    patientStore.selectPatient(data.patient);
                }
            ).catch(
                (error) => {
                    console.log(error)
                    setLoading(false);
                }
            )

            getChatMessageData(conversation.id).then((response) => {
                return response.json();
            }).then((data) => {
                loadExtensionStorageValue("jwt_access_token").then((accessToken) => {
                    if (accessToken) setSocketUrl(getWsChatUrl(conversation.id, accessToken));
                });
                setMessages(data.results)
                setLoading(false);
            }).catch((error) => {
                console.log(error);
                setLoading(false);
            });
        } else {
            console.log("Message False")
        }
    }, [conversationStore.conversations.selected?.id]);

    useEffect(() => {
        setReadHistory(conversationStore.conversations.selected?.last_read_messages || []);
    }, [conversationStore.conversations.selected?.last_read_messages]);

    useEffect(() => {
        setPatientSelected(patientStore.patients.selected);
    }, [patientStore.patients.selected]);

    useEffect(() => {
        messagesEndRef?.current?.scrollIntoView()
    }, [messages]);

    if (!conversationStore.conversations.selected) {
        return (
            <div className="tw-w-[1000px] tw-h-full tw-relative">
                <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-gap-2 tw-w-64 tw-h-full tw-absolute tw-left-1/2 -tw-translate-x-1/2">
                    <ASvg src={NoDiscussionLogo} />
                    <h4 className="text-secondary-300 text-2xl">Choose the discussion</h4>
                </div>
            </div>
        );
    }

    return (
        <div className="tw-relative tw-h-full tw-flex tw-flex-col tw-justify-between tw-overflow-x-hidden tw-w-[1000px]">
            <MChatTools
                fileStats={fileStats}
                patient={patientStore.patients.selected}
                conversation={conversationStore.conversations.selected}
                loading={loading}
            />

            {conversationStore.conversations.selected && !loading ? (
                <>
                    <div className="tw-flex-grow tw-overflow-y-auto tw-h-96 tw-px-9">
                        {messages?.slice(0).reverse().map((message) => {
                            return (
                                <MMessageCard
                                    key={`message-${message.id}`}
                                    messageDetails={message}
                                    readHistory={readHistory.filter((m) => m.chat_message_id === message.id)}
                                />);
                        })}
                        <div ref={messagesEndRef} />
                    </div>
                    <div className="tw-sticky tw-bg-secondary-10 tw-w-full">
                        <div className="tw-mx-12">
                            <AFileInputShow fileInput={preview} exit={handlers.removeFile} />

                            <MSend
                                placeholder="Type message..."
                                ref={sendRef}
                                handlers={handlers}
                            />
                            <p className="tw-text-h3 tw-text-right tw-text-secondary-500 tw-pb-4">
                                {patientSelected && "Sending a message about "}

                                <span className="tw-font-bold">
                                    {(patientSelected) ?
                                        `${patientSelected?.first_name} ${patientSelected?.last_name}.`
                                        :
                                        "No Patient."
                                    }</span>
                                {" "}
                                <a className="tw-font-medium tw-text-primary-500" href="/select">
                                    {patientSelected ? "Switch" : "Choose"} Patient
                                </a>
                            </p>
                        </div>
                    </div>
                </>
            ) : (
                <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-gap-2 tw-w-[1000px] tw-h-full">
                    <ASpinner variant="md" />
                </div>
            )}

        </div>
    )
}

export default observer(CMessageList)