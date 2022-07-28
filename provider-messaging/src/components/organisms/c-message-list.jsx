import { h } from "preact";
import { useRouter } from "preact-router";
import { useState, useRef, useEffect } from "preact/hooks";
import { chatMessage } from "../../../test-data";
import { useStore } from "../../state";
import MChatTools from "../molecules/m-chat-tools";
import MMessageCard from "../molecules/m-message-card";
import MSend from "../molecules/m-send";
import axios from 'axios';
import useWebSocket from "react-use-websocket";

const CMessageList = () => {
  const { store } = useStore();
  const router = useRouter()[0];
  const sendRef = useRef(null);
  const messagesEndRef = useRef(null);

  const [discussion, setDiscussion] = useState(undefined);
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
    setDiscussion([...discussion, newMessage])
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
    if (router.matches.id) {
      axios.get(`http://localhost:8426/api/vcn/chat-messages/${router.matches.id}/`, {
        headers: {
          'Authorization': `Bearer ${store.accessToken}`
        }
      })
        .then((response) => {
          setSocketUrl(`ws://localhost:8426/chat/${router.matches.id}/?token=${store.accessToken}`)
          setDiscussion(response.data.results)
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [router.matches?.id]);

  useEffect(() => {
    messagesEndRef?.current?.scrollIntoView()
  }, [discussion]);

  // These are code from before the VCN updates. They will be used in the future
  // const [selectedDiscussion, setSelectedDiscussion] = useState(undefined);
  // const { addNewMessage, discussions, selectDiscussion, auth } = useStore();
  // const isValidURL = (string) => {
  //   var res = string.match(
  //     /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
  //   );
  //   return res;
  // };

  if (!discussion) {
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
        setDiscussion={setDiscussion}
        selectedDiscussion={discussion}
      />
      <div className="flex-grow overflow-y-auto px-9 lg:px-12">
        {discussion?.map((message) => {
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

export default CMessageList;
