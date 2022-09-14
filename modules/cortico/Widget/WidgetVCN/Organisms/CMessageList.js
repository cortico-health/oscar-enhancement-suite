import useWebSocket from "react-use-websocket";
import { useEffect, useRef, useState } from "preact/hooks";
import { observer } from "mobx-react-lite";
import { v4 as uuidv4 } from 'uuid';
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
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import _ from "lodash";


const CMessageList = () => {
    const dispatch = useDispatch();
    const { attachments } = useSelector((state) => state.providerMessaging);
    const { conversationStore, patientStore } = useStore();
    const sendRef = useRef(null);
    const messagesEndRef = useRef(null);

    const [messages, setMessages] = useState(undefined);
    const [socketUrl, setSocketUrl] = useState(null);

    const [patientSelected, setPatientSelected] = useState(null);
    const [uploadedFiles, setUploadedFiles] = useState([]);
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

            createFile(file).then((response) => { return response.json() }).then((data) => {
                setUploadedFiles([...uploadedFiles, data]);
            }).catch((error) => {
                console.log(error);
            });
        },
        removeFile: (id) => {
            setUploadedFiles(uploadedFiles.filter((file) => file.id !== id));
        },
        onSend: () => {
            const value = sendRef?.current?.base?.lastElementChild?.value;
            if (value || uploadedFiles) {
                getWebSocket().send(JSON.stringify({
                    'body': value ? value : '',
                    'files': uploadedFiles ? uploadedFiles.map((file) => file.id) : null
                }));
                //TODO Dwight: can be uncommented if said so.
                //Commenting this out since I want to instill the data after sending like in MessengerWindow.
                setUploadedFiles([]);
                dispatch({
                    type: "providerMessaging/reset"
                })
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

    const goToSelectPatient = () => {
        dispatch({
            type: "sidebar/setCurrent",
            payload: "VCN Patient",
        });
    }

    const deleteAttachment = (id) => {
        dispatch({
            type: "messenger/deleteAttachment",
            payload: {
                id,
            },
        });
    };

    useEffect(() => {
        const conversation = conversationStore.conversations.selected;

        if (conversation) {
            setLoading(true);
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
        if (conversationStore.conversations.selected?.stats) setFileStats(conversationStore.conversations.selected.stats);
    }, [conversationStore.conversations.selected?.stats]);

    useEffect(() => {
        setReadHistory(conversationStore.conversations.selected?.last_read_messages || []);
    }, [conversationStore.conversations.selected?.last_read_messages]);

    useEffect(() => {
        setPatientSelected(patientStore.patients.selected);
    }, [patientStore.patients.selected]);

    useEffect(() => {
        messagesEndRef?.current?.scrollIntoView()
    }, [messages]);

    useEffect(() => {
        //TODO Dwight & Justin: Change the naming convenions same as Aaron's I think?
        const newAttachments = attachments.map((attachment) => ({
            id: attachment.id,
            file_name: attachment.name,
            file: attachment.data,
            type: "dataURL"
        }))
        console.log();
        //setUploadedFiles((prevUploadedFiles) => [...new Set([...prevUploadedFiles,...newAttachments])]);
        setUploadedFiles((prevUploadedFiles) => _.uniqWith([...prevUploadedFiles,...newAttachments],_.isEqual));
    },[attachments]);

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
        <div className="tw-relative tw-h-full tw-flex tw-flex-col tw-justify-between tw-overflow-hidden tw-w-[1000px]">
            <MChatTools
                fileStats={fileStats}
                patient={patientStore.patients.selected}
                conversation={conversationStore.conversations.selected}
                loading={loading}
            />

            {conversationStore.conversations.selected && !loading ? (
                <>
                    <div className="tw-flex-1 tw-overflow-y-auto tw-h-96 tw-px-9">
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
                    <div className="tw-sticky tw-border tw-bg-secondary-10 tw-w-full">
                        <div className="tw-mx-12">
                            {
                                uploadedFiles.length > 0 &&
                                <div className="tw-flex tw-flex-wrap tw-w-full tw-max-h-32 tw-overflow-y-auto tw-mt-3">
                                    {uploadedFiles.map((file) => {
                                        return <AFileInputShow fileInput={ file } exit={ () => {
                                            //TODO Dwight: To be improved since it loops twice.
                                            deleteAttachment(file.id);
                                            handlers.removeFile(file.id);
                                        } } />
                                    })}
                                </div>
                            }
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
                                <span className="tw-font-medium tw-text-primary-500 tw-cursor-pointer" onClick={goToSelectPatient}>
                                    {patientSelected ? "Switch" : "Choose"} Patient
                                </span>
                            </p>
                        </div>
                    </div>
                </>
            ) : (
                <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-gap-2 tw-w-full tw-h-full">
                    <ASpinner variant="md" />
                </div>
            )}

        </div>
    )
}

export default observer(CMessageList)