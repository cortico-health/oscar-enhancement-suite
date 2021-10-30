import { render } from "preact";
import { useState, useRef, useEffect } from "preact/hooks";
import corticoIcon from "../../resources/icons/96x96.png";
import { PlusIcon, LeftArrowIcon, TrashIcon } from "../Icons/HeroIcons";
import Subject from "./SubjectInput";
import Chat from "./ChatInput";
import { v4 as uuidv4 } from "uuid";

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

function Reply({ uuid, subject, body, onClick, onDelete, ...props }) {
  return (
    <div className="">
      <div
        onClick={() => {
          onClick({ subject, body });
        }}
        className=" tw-bg-white tw-py-4 tw-cursor-pointer tw-rounded-t-lg tw-hover:bg-gray-200 tw-max-h-28 tw-font-sans tw-hover:bg-black tw-relative"
      >
        <div className="tw-px-4 tw-mb-2 tw-text-opacity-100 tw-text-black tw-tracking-wider tw-text-sm">
          {subject}
        </div>
        <div className="tw-px-4 tw-text-xs tw-text-opacity-70 tw-text-black tw-line-clamp-3">
          {body}
        </div>
      </div>
      <div className="tw-bg-gray-200 tw-flex tw-items-center tw-justify-end tw-p-2 tw-rounded-b-lg">
        <button
          onClick={() => {
            onDelete(uuid);
          }}
          className="tw-bg-red-500 tw-flex tw-items-center tw-rounded-md tw-p-2"
        >
          <span className="tw-mr-2 tw-text-xs tw-text-white">Delete</span>
          <TrashIcon className="tw-text-white tw-h-4 tw-w-4" />
        </button>
      </div>
    </div>
  );
}

function DeleteReply({ uuid, onDeleted, onCancel, ...props }) {
  const handleCancel = () => {
    onCancel();
  };
  const deleteReply = () => {
    let savedReplies = localStorage.getItem("savedReplies");
    if (savedReplies) {
      let temp = JSON.parse(JSON.parse(savedReplies));
      const reply = temp.find((r) => r.uuid === uuid);
      if (reply) {
        savedReplies = temp.filter((r) => r.uuid !== uuid);
        onDeleted(savedReplies);
      }
    }
  };
  return (
    <div className="tw-font-sans tw-p-6 tw-bg-white">
      <h2 className="tw-tracking-wider tw-text-xl text-center">
        Are you sure you want to delete?
      </h2>
      <div className="tw-mt-5">
        <button className="tw-gray-200 tw-text-sm tw-p-4 tw-text-white">
          No
        </button>
        <button
          onClick={deleteReply}
          className="tw-cortico-blue tw-text-sm tw-p-4 tw-text-white"
        >
          Yes
        </button>
      </div>
    </div>
  );
}

function SavedReplies({ loadReply, ...props }) {
  const [addReply, setAddReply] = useState(false);
  const [replies, setReplies] = useState([]);
  const [insertCounter, setInsertCounter] = useState(0);
  const [deleteReply, setDeleteReply] = useState(false);
  const [deleteCandidate, setDeleteCandidate] = useState(null);

  const handleAdd = (data) => {
    const reply = data;
    reply.uuid = uuidv4();
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

  const handleDelete = (uuid) => {
    setDeleteReply(true);
    setDeleteCandidate(uuid);
  };

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
                      uuid={reply.uuid}
                      onDelete={handleDelete}
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
        {deleteReply === true ? (
          <DeleteReply
            uuid={deleteCandidate}
            onCancel={() => {
              setDeleteReply(false);
              setDeleteCandidate(null);
            }}
            onDeleted={(replies) => {
              setReplies(replies);
              setInsertCounter(insertCounter + 1);
              setDeleteReply(false);
              setDeleteCandidate(null);
            }}
          />
        ) : (
          ""
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
