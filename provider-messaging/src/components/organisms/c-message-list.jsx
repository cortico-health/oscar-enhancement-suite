import { h } from "preact";
import { useRouter } from "preact-router";
import { useState,useRef,useEffect } from "preact/hooks";
import { useStore } from "../../state";
import MChatTools from "../molecules/m-chat-tools";
import MMessageCard from "../molecules/m-message-card";
import MSend from "../molecules/m-send";
import useWebSocket from "react-use-websocket";
import useBackend from "../../hooks/useBackend";
import { observer } from "mobx-react-lite";

const CMessageList = () => {
  const { getChatMessageData } = useBackend();

  const { authStore, conversationStore } = useStore();
  const router = useRouter()[0];
  const sendRef = useRef(null);
  const messagesEndRef = useRef(null);

  const [conversation,setConversation] = useState(undefined);
  const [conversationInfo,setConversationInfo] = useState(undefined); // for chat header
  const [socketUrl, setSocketUrl] = useState(null);
  const [attachements, setAttachements] = useState([]);
  const [previews, setPreviews] = useState([]);

  const { getWebSocket } = useWebSocket(socketUrl, {
    onOpen: () => console.log('WebSocket connection opened.'),
    onClose: () => console.log('WebSocket connection closed.'),
    shouldReconnect: (closeEvent) => true,
    onMessage: (event) => processMessage(event)
  });

  const processMessage = (e) => {
    const data = JSON.parse(e.data);
    const newMessage = JSON.parse(data.text);
    conversationStore.setConversations();
    setConversation([...conversation,newMessage])
  }

  const handlers = {
    onUpload: (e) => {
      setAttachements([...attachements, ...e.target.files]);
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = function (event) {
        setPreviews([...previews, event.target.result]);
      };
    },
    onSend: () => {
      const value = sendRef?.current?.base?.lastElementChild?.value;
      if (value) {
        getWebSocket().send(JSON.stringify({
          'body': value,
        }));
        sendRef.current.base.lastElementChild.value = "";
        window.scrollTo(0, document.body.scrollHeight);
      }
    },
  };

  useEffect(() => {
    if (router.matches?.id) {
      conversationStore.setSelectedConversation(router.matches?.id);

      getChatMessageData(router.matches?.id, authStore.accessToken).then((response) => {
        setSocketUrl(`ws://localhost:8426/chat/${router.matches?.id}/?token=${authStore.accessToken}`)
        setConversation(response[0].data.results)
        setConversationInfo(() => {
          return response[1].data?.results.filter((result) => {
            return result.id === parseInt(router.matches?.id);
          })[0]
        })
      }).catch((error) => {
        console.log(error);
      });
    }
  }, [router.matches?.id]);

  useEffect(() => {
    messagesEndRef?.current?.scrollIntoView()
  },[conversation]);

  // These are code from before the VCN updates. They will be used in the future
  // const [selectedConversationInfo, setSelectedDiscussion] = useState(undefined);
  // const { discussions, auth } = useStore();
  // const isValidURL = (string) => {
  //   var res = string.match(
  //     /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
  //   );
  //   return res;
  // };

  if (!conversation) {
    return (
      <div className="flex items-center justify-center w-full">
        Choose the discussion
      </div>
    );
  }

  return (
    // TODO!
    <div className="c-message-list w-full relative lg:h-screen table lg:flex lg:flex-col justify-between overflow-x-hidden">
      <MChatTools
        setConversation={ setConversation }
        selectedConversationInfo={ conversationInfo }
      />
      <div className="flex-grow overflow-y-auto px-9 lg:px-12">
        { conversation?.map((message) => {
          return <MMessageCard messageDetails={message} />;
        })}
        <div ref={messagesEndRef} />
      </div>

      {previews.map((preview, index) => {
        return <img width="20" key={index} src={preview} />;
      })}
      <div className="sticky bg-secondary-10 mx-9 lg:mx-12">
        <MSend
          placeholder="Type message..."
          ref={sendRef}
          handlers={handlers}
        />
        <p className="text-h3 text-right text-secondary-500 pb-4">
          Sending a message about{" "}
          <span className="font-bold">Hanson Deck.</span>{" "}
          <a className="font-medium text-primary-500" href="select">
            Switch Patient
          </a>
        </p>
      </div>
    </div>
  );
};

export default observer(CMessageList);
