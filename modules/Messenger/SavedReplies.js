import { render } from "preact";
import { useState, useRef, useEffect } from "preact/hooks";
import corticoIcon from "../../resources/icons/96x96.png";
import { PlusIcon, LeftArrowIcon } from "../Icons/HeroIcons";
import Subject from "./SubjectInput";
import Chat from "./ChatInput";

function AddReply({ add, cancel, ...props }) {
  const subject = useRef();
  const chat = useRef();

  const handleAddReply = (e) => {
    const _subject = subject.current.value;
    const _chat = chat.current.value;
    add({ subject: _subject, body: _chat });
  };

  return (
    <div>
      <div className="tw-p-4">
        <Subject ref={subject} />
        <hr className="tw-bg-opacity-25" />
        <Chat ref={chat} />
      </div>
      <div className="tw-p-4 tw-bg-gray-200 tw-flex tw-justify-end tw-rounded-b-lg">
        <div className="tw-flex tw-justify-end">
          <button
            onClick={cancel}
            className="tw-px-4 tw-py-2 tw-rounded-lg tw-bg-gray-500 tw-text-white tw-text-sm tw-flex tw-items-center tw-mr-2"
          >
            <span className="tw-mr-2">Cancel</span>
            <LeftArrowIcon className="tw-h-4 tw-w-4 tw-text-white" />
          </button>
          <button
            onClick={handleAddReply}
            className="tw-px-4 tw-py-2 tw-rounded-lg tw-bg-cortico-blue tw-text-white tw-text-sm tw-flex tw-items-center"
          >
            <span className="tw-mr-2">Save Reply</span>
            <PlusIcon className="tw-h-4 tw-w-4 tw-text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}

function Reply({ subject, body, onClick, ...props }) {
  return (
    <div
      onClick={() => {
        onClick({ subject, body });
      }}
      className=" tw-bg-white tw-rounded-lg tw-py-4 tw-cursor-pointer tw-hover:bg-gray-200 tw-max-h-28 tw-font-sans tw-hover:bg-black"
    >
      <div className="tw-px-4 tw-mb-2 tw-text-opacity-100 tw-text-black tw-tracking-wider tw-text-sm">
        {subject}
      </div>
      <div className="tw-px-4 tw-text-xs tw-text-opacity-70 tw-text-black tw-line-clamp-3">
        {body}
      </div>
    </div>
  );
}

function SavedReplies({ loadReply, ...props }) {
  const [addReply, setAddReply] = useState(false);
  const [replies, setReplies] = useState([]);
  const [insertCounter, setInsertCounter] = useState(0);

  const handleAdd = (data) => {
    const reply = data;
    let savedReplies = localStorage.getItem("savedReplies");
    if (savedReplies) {
      let temp = JSON.parse(JSON.parse(savedReplies));
      temp.push(reply);
      localStorage.setItem("savedReplies", JSON.stringify(temp));
    } else {
      const temp = [reply];
      localStorage.setItem("savedReplies", JSON.stringify(temp));
    }
    setInsertCounter(insertCounter + 1);
  };
  const handleCancel = () => {
    setAddReply(false);
  };

  const loadReplies = () => {
    console.log("This got called");
    let savedReplies = localStorage.getItem("savedReplies");
    if (savedReplies) {
      let temp = JSON.parse(JSON.parse(savedReplies));
      setReplies(temp);
    } else {
      setReplies([]);
    }
  };

  useEffect(() => {
    loadReplies();
  }, [insertCounter]);

  return (
    <div className="tw-bg-white tw-rounded-lg tw-font-sans tw-w-full tw-shadow-lg tw-max-w-[400px]">
      <div className="tw-bg-cortico-blue tw-flex tw-rounded-t-lg tw-p-4 tw-items-center">
        <div className="tw-bg-white tw-rounded-full tw-p-2">
          <img src={corticoIcon} alt="Cortico" className="tw-w-5 tw-h-5" />
        </div>
        <div className="tw-ml-4">
          <h2 className="tw-text-2xl tw-text-white tw-text-opacity-90 tw-tracking-wider">
            Saved Replies
          </h2>
          <p className="tw-text-xs tw-text-white tw-text-opacity-80">
            Save or load new replies to your message
          </p>
        </div>
      </div>
      <div
        className={`tw-bg-gray-100 tw-overflow-y-auto  ${
          addReply ? "tw-p-0" : "tw-p-4 tw-h-[300px]"
        } $`}
      >
        {addReply === false ? (
          <div>
            <div className="tw-my-3">
              {replies.map((reply, index) => {
                return (
                  <div className="tw-my-3" key={index}>
                    <Reply
                      onClick={(data) => {
                        loadReply(data);
                      }}
                      {...reply}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <AddReply add={handleAdd} cancel={handleCancel} />
        )}
      </div>
      {addReply === false ? (
        <div className="tw-p-4 tw-bg-gray-200 tw-flex tw-justify-end tw-rounded-b-lg">
          <div>
            <div>
              <button
                onClick={() => {
                  setAddReply(true);
                }}
                className="tw-px-4 tw-py-2 tw-rounded-lg tw-bg-cortico-blue tw-text-white tw-text-sm tw-flex tw-items-center"
              >
                <span className="tw-mr-2">New Reply</span>
                <PlusIcon className="tw-h-4 tw-w-4 tw-text-white" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default SavedReplies;
