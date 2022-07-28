import { h } from "preact";
import { useRouter } from "preact-router";
import { useState, useRef, useEffect } from "preact/hooks";
import { chatMessage } from "../../../test-data";
import { useStore } from "../../state";
import MChatTools from "../molecules/m-chat-tools";
import MMessageCard from "../molecules/m-message-card";
import MSend from "../molecules/m-send";
import axios from 'axios';

const CMessageList = () => {
  const { store } = useStore();
  const router = useRouter()[0];

  const [discussion, setDiscussion] = useState(undefined);
  const [selectedDiscussion, setSelectedDiscussion] = useState(undefined);
  const [chatSocket, setChatSocket] = useState(undefined);

  const { addNewMessage, discussions, selectDiscussion, auth } =
    useStore();

  const isValidURL = (string) => {
    var res = string.match(
      /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
    );
    return res;
  };

  useEffect(() => {
    axios.get(`http://localhost:8426/api/vcn/chat-messages/${router.matches.id}/`, {
      headers: {
        'Authorization': `Bearer ${store.accessToken}`
      }
    })
      .then((response) => {
        setChatSocket(new WebSocket(`ws://localhost:8426/chat/${router.matches.id}/?token=${store.accessToken}`))
        setDiscussion(response.data.results)
      })
      .catch((error) => {
        console.log(error);
      });
  }, [router.matches?.id]);

  useEffect(() => {
    if (chatSocket) {
      chatSocket.onmessage = (e) => {
        const data = JSON.parse(e.data);
        const newMessage = JSON.parse(data.text);
        setDiscussion([...discussion, newMessage])
      }
    }
  }, [chatSocket])

  const sendMessage = (e) => {
    const messageEl = document.getElementById('chatMessage')
    const message = messageEl.value

    messageEl.value = ''
  }

  const [attachements, setAttachements] = useState([]);

  const [previews, setPreviews] = useState([]);

  const sendRef = useRef(null);

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
        chatSocket.send(JSON.stringify({
          'body': value,
        }));
        sendRef.current.base.lastElementChild.value = "";
        window.scrollTo(0, document.body.scrollHeight);
      }
    },
  };

  if (!discussion) {
    return (
      <div className="flex items-center justify-center w-full">
        Choose the discussion
      </div>
    );
  }

  return (
    // TODO!
    <div className="c-message-list px-9 w-full lg:px-12 relative lg:h-screen table lg:flex lg:flex-col justify-between overflow-x-hidden">
      <div>
        <MChatTools
          setDiscussion={setDiscussion}
          selectedDiscussion={discussion}
        />
        {discussion?.map((message) => {
          return <MMessageCard messageDetails={message} />;
        })}
      </div>

      {previews.map((preview, index) => {
        return <img width="20" key={index} src={preview} />;
      })}
      <div className="sticky bg-secondary-10">
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
