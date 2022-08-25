import { useEffect,useRef,useState } from "preact/hooks";
import { useStore } from "../../store/mobx";
import { useSelector } from "react-redux";
import MChatTools from "../Molecules/MChatTools";
import useWebSocket from "react-use-websocket";
import { createFile,getChatMessageData } from "../../../../Api/Vcn/Conversations.js";
import AFileInputShow from "../Atoms/AFileInputShow";
import MSend from "../Molecules/MSend";
import MMessageCard from "../Molecules/MMessageCard";
import ASvg from "../Atoms/ASvg";
import NoDiscussionLogo from "../../../../../resources/icons/chat-alt2.svg"


const CMessageList = () => {
    const { items } = useSelector((state) => state.sidebar);
    const item = items.find((side) => side.name === "VCN");

    const { authStore,conversationStore,patientStore } = useStore();
    const sendRef = useRef(null);
    const messagesEndRef = useRef(null);

    const [messages,setMessages] = useState(undefined);
    const [socketUrl,setSocketUrl] = useState(null);
    const [preview,setPreview] = useState(null);
    const [patientSelected,setPatientSelected] = useState(null);
    const [uploadedFile,setUploadedFile] = useState(null);

    const { getWebSocket } = useWebSocket(socketUrl,{
        onOpen: () => handlers.onRead(),
        onClose: () => { },
        shouldReconnect: (closeEvent) => true,
        onMessage: (event) => processMessage(event)
    });

    const processMessage = (e) => {
        const data = JSON.parse(e.data);
        const newMessage = JSON.parse(data.text);
        setMessages([newMessage,...messages]);
        handlers.onRead();
    }

    const handlers = {
        onUpload: (e) => {
            const file = e.target.files[0];
            const extension = file.name.split(".").pop().toLowerCase();

            createFile(file).then((response) => { return response.json() }).then((data) => {
                setUploadedFile(data);
                setPreview({ dataURL: data.file,name: file.name,type: extension });
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
                window.scrollTo(0,document.body.scrollHeight);
            }
        },
        onRead: () => {
            if (conversationStore.selectedConversation) {
                getWebSocket().send(JSON.stringify({
                    'conversation': conversationStore.selectedConversation.id,
                }));
            }
        },
    };

    useEffect(() => {
        if (item?.id) {
            conversationStore.setSelectedConversation(item?.id);

            getChatMessageData(item?.id).then((response) => {
                return response.json();
            }).then((data) => {
                setSocketUrl(`${/* import.meta.env.VITE_WEBSOCKET_URL ||  */"ws://localhost:8426"}/chat/${item?.id}/?token=${authStore.accessToken}`)
                setMessages(data.results)
            }).catch((error) => {
                console.log(error);
            });
        } else {
            conversationStore.setSelectedConversation(null);
        }
        conversationStore.setSelectedConversation(item?.id);
    },[item?.id]);

    useEffect(() => {
        setPatientSelected(patientStore.patients.selected);
    },[patientStore.patients.selected]);

    useEffect(() => {
        messagesEndRef?.current?.scrollIntoView()
    },[messages]);

    if (!conversationStore.selectedConversation) {
        return (
            <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-gap-2 tw-px-64">
                <ASvg src={ NoDiscussionLogo } />
                <h4 className="text-secondary-300 text-2xl">Choose the discussion</h4>
            </div>
        );
    }

    return (
        <div className="tw-relative tw-h-full tw-flex tw-flex-col tw-justify-between tw-overflow-x-hidden tw-w-[1000px]">
            <MChatTools
                setMessages={ setMessages }
                selectedConversationInfo={ conversationStore.selectedConversation }
            />

            <div className="tw-flex-grow tw-overflow-y-auto tw-px-9 lg:tw-px-12">
                { messages?.slice(0).reverse().map((message) => {
                    return <MMessageCard key={ `message-${message.id}` } messageDetails={ message } attachment={ preview } />;
                }) }
                <div ref={ messagesEndRef } />
            </div>
            <div className="tw-sticky tw-bg-secondary-10 tw-w-full">
                <div className="tw-mx-12">
                    <AFileInputShow fileInput={ preview } exit={ handlers.removeFile } />

                    <MSend
                        placeholder="Type message..."
                        ref={ sendRef }
                        handlers={ handlers }
                    />
                    <p className="tw-text-h3 tw-text-right tw-text-secondary-500 tw-pb-4">
                        { patientSelected && "Sending a message about " }

                        <span className="tw-font-bold">
                            { (patientSelected) ?
                                `${patientSelected?.first_name} ${patientSelected?.last_name}.`
                                :
                                "No Patient."
                            }</span>
                        { " " }
                        <a className="tw-font-medium tw-text-primary-500" href="/select">
                            { patientSelected ? "Switch" : "Choose" } Patient
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CMessageList