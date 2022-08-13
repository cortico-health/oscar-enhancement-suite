import { h } from "preact";
import { useRouter } from "preact-router";
import { useState,useRef,useEffect } from "preact/hooks";
import { useStore } from "../../state";
import MChatTools from "../molecules/m-chat-tools";
import MMessageCard from "../molecules/m-message-card";
import MSend from "../molecules/m-send";
import useWebSocket from "react-use-websocket";
import { observer } from "mobx-react-lite";
import ASvg from "../atoms/a-svg";
import { getChatMessageData } from "../../api/conversations";
import AFileInputShow from "../atoms/a-file-input-show";

const fileTypes = ['jpg','jpeg','png','pdf']

const CMessageList = () => {

  const { authStore,conversationStore,patientStore } = useStore();
  const router = useRouter()[0];
  const sendRef = useRef(null);
  const messagesEndRef = useRef(null);

  const [messages,setMessages] = useState(undefined);
  const [socketUrl,setSocketUrl] = useState(null);
  const [preview,setPreview] = useState(null);
  const [patientSelected,setPatientSelected] = useState(null);

  const { getWebSocket } = useWebSocket(socketUrl,{
    onOpen: () => console.log('WebSocket connection opened.'),
    onClose: () => console.log('WebSocket connection closed.'),
    shouldReconnect: (closeEvent) => true,
    onMessage: (event) => processMessage(event)
  });

  const processMessage = (e) => {
    const data = JSON.parse(e.data);
    const newMessage = JSON.parse(data.text);
    setMessages([...messages,newMessage])
  }

  const handlers = {
    onUpload: (e) => {
      const file = e.target.files[0];
      const extension = file.name.split(".").pop().toLowerCase();

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function (event) {
        setPreview({ dataURL: event.target.result,name: file.name,type: extension });
      };
    },
    onSend: () => {
      const value = sendRef?.current?.base?.lastElementChild?.value;
      if (value) {
        getWebSocket().send(JSON.stringify({
          'body': value,
        }));
        sendRef.current.base.lastElementChild.value = "";
        window.scrollTo(0,document.body.scrollHeight);
      }
    },
  };

  useEffect(() => {
    if (router.matches?.id) {
      conversationStore.setSelectedConversation(router.matches?.id);

      getChatMessageData(router.matches?.id,authStore.accessToken).then((response) => {
        setSocketUrl(`${import.meta.env.VITE_WEBSOCKET_URL || "ws://localhost:8426"}/chat/${router.matches?.id}/?token=${authStore.accessToken}`)
        setMessages(response.data.results)
      }).catch((error) => {
        console.log(error);
      });
    }
  },[router.matches?.id]);

  useEffect(() => {
    setPatientSelected(patientStore.patients.selected);
  },[patientStore.patients.selected]);

  useEffect(() => {
    messagesEndRef?.current?.scrollIntoView()
  },[messages]);

  // These are code from before the VCN updates. They will be used in the future
  // const [selectedConversationInfo, setSelectedDiscussion] = useState(undefined);
  // const { discussions, auth } = useStore();
  // const isValidURL = (string) => {
  //   var res = string.match(
  //     /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
  //   );
  //   return res;
  // };

  if (!messages ||
    !patientStore.patients?.selected ||
    conversationStore.selectedConversation?.patient_full_name !== patientSelected?.firstName + " " + patientSelected?.lastName
  ) {
    return (
      <div className="flex flex-col items-center justify-center gap-2 w-full">
        <ASvg src="chat-alt2" />
        <h4 className="text-secondary-300 text-2xl">Choose the discussion</h4>
      </div>
    );
  }

  return (
    // TODO!
    <div className="c-message-list w-full relative lg:h-screen table lg:flex lg:flex-col justify-between overflow-x-hidden">
      <MChatTools
        setMessages={ setMessages }
        selectedConversationInfo={ conversationStore.selectedConversation }
      />
      <div className="flex-grow overflow-y-auto px-9 lg:px-12">
        { messages?.map((message) => {
          return <MMessageCard messageDetails={ message } attachment={ preview } />;
        }) }
        <div ref={ messagesEndRef } />
      </div>

      <div className="sticky bg-secondary-10 mx-9 lg:mx-12 tw-pt-4">
        <AFileInputShow fileInput={ preview } exit={ () => setPreview(null) } />

        <MSend
          placeholder="Type message..."
          ref={ sendRef }
          handlers={ handlers }
        />
        <p className="text-h3 text-right text-secondary-500 pb-4">
          { patientSelected && "Sending a message about " }

          <span className="font-bold">
            { (patientSelected) ?
              `${patientSelected?.firstName} ${patientSelected?.lastName}.`
              :
              "No Patient."
            }</span>
          { " " }
          <a className="font-medium text-primary-500" href="/select">
            { patientSelected ? "Switch" : "Choose" } Patient
          </a>
        </p>
      </div>
    </div>
  );
};

export default observer(CMessageList);
