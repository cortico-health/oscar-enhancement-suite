import { h } from "preact";
import { useRouter } from "preact-router";
import { useState, useRef, useEffect } from "preact/hooks";
import { chatMessage } from "../../../test-data";
import { useStore } from "../../state";
import MChatTools from "../molecules/m-chat-tools";
import MMessageCard from "../molecules/m-message-card";
import MSend from "../molecules/m-send";

const CMessageList = () => {
  const router = useRouter()[0];
  /* const chatSocket = new WebSocket('ws://localhost:8426/chat/1/'); */

  const [discussion, setDiscussion] = useState(undefined);
  const [selectedDiscussion, setSelectedDiscussion] = useState(undefined);

  const { addNewMessage, discussions, selectDiscussion, auth } =
    useStore();

  const isValidURL = (string) => {
    var res = string.match(
      /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
    );
    return res;
  };

  useEffect(() => {
  }, [router.matches?.id]);

  //const {data, isError, isLoading} = getQueryConversation();
  useEffect(() => {
    setDiscussion(chatMessage);
    //Fetch Here - You can delete the set above if it works
    /* fetch("http://localhost:8426/api/vcn/conversations").then((result) => result.json).then((data) =>{
      setDiscussion("data na gusto nimu i change")
    }) */
  }, [discussion])

  /* useEffect(() => {
    if (router.matches?.id && discussions?.all.length) {
      setDiscussion(
        discussions?.all.find((disc) => disc.id == router.matches?.id)
      );
    }
    if(!router.matches?.id) {
      setDiscussion(undefined);
    }
  }, [discussions, router]); */


  /* TODO: Will unomment this if I can get the data from websocket */
  /* const sendMessage = (e) => {
    const messageEl = document.getElementById('chatMessage')
    const message = messageEl.value
    chatSocket.send(JSON.stringify({
        'body': message,
    }));
    messageEl.value = ''
  }

  chatSocket.onmessage = (e) => {
    const data = JSON.parse(e.data);
    const newMessage = JSON.parse(data.text);
    document.getElementById('messages').innerHTML += newMessage.body
  } */

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
        const links = isValidURL(value);
        addNewMessage({
          author: auth,
          content: value,
          date: new Date(),
          assets: [
            // {
            //   type: "jpg",
            //   src: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=852&q=80",
            // },
          ],
          links: links ? links : [],
        });
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
        {discussion?.results?.map((message) => {
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
