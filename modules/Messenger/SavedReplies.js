import { render } from "preact";
import { useState, useRef, useEffect } from "preact/hooks";
import corticoIcon from "../../resources/icons/96x96.png";
import { PlusIcon, LeftArrowIcon, TrashIcon } from "../Icons/HeroIcons";
import Subject from "./SubjectInput";
import Chat from "./ChatInput";
import { getCannedReplies, addCannedReply } from "../Api/Api";
import { loadExtensionStorageValue } from "../Utils/Utils";
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
            <span className="tw-mr-2">Save Response</span>
            <PlusIcon className="tw-h-4 tw-w-4 tw-text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}

function Reply({ uuid, subject, body, onClick, onDelete, onCancel, ...props }) {
  const [isDelete, setIsDelete] = useState(false);

  const handleDelete = () => {
    setIsDelete(false);
    onDelete(uuid);
  };
  return (
    <div className="tw-drop-shadow-lg">
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
        {isDelete === false ? (
          <button
            onClick={() => {
              setIsDelete(true);
            }}
            className="tw-bg-red-500 tw-flex tw-items-center tw-rounded-md tw-p-2"
          >
            <span className="tw-mr-2 tw-text-xs tw-text-white">Delete</span>
            <TrashIcon className="tw-text-white tw-h-4 tw-w-4" />
          </button>
        ) : (
          <div className="tw-flex tw-justify-end">
            <button
              onClick={() => {
                setIsDelete(false);
              }}
              className="tw-bg-gray-400 tw-mr-2 tw-flex tw-items-center tw-rounded-md tw-p-2"
            >
              <span className="tw-mr-2 tw-text-xs tw-text-white">Cancel</span>
              <LeftArrowIcon className="tw-text-white tw-h-4 tw-w-4" />
            </button>
            <button
              onClick={handleDelete}
              className="tw-bg-red-500 tw-flex tw-items-center tw-rounded-md tw-p-2"
            >
              <span className="tw-mr-2 tw-text-xs tw-text-white">
                Yes I want to delete
              </span>
              <TrashIcon className="tw-text-white tw-h-4 tw-w-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function SavedReplies({ loadReply, ...props }) {
  const [addReply, setAddReply] = useState(false);
  const [replies, setReplies] = useState([]);

  const handleAdd = (data) => {
    console.log("To add data", data);

    const { body, subject } = data;
    const temp = {
      data: {
        subject,
        message: body,
      },
    };
    loadExtensionStorageValue("jwt_access_token")
      .then((token) => {
        return addCannedReply(temp, token);
      })
      .then((res) => {
        console.log("Add Reply Response", res);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setAddReply(false);
      });
  };
  const handleCancel = () => {
    setAddReply(false);
  };

  const deleteReply = (uuid) => {};
  const loadReplies = () => {
    loadExtensionStorageValue("jwt_access_token")
      .then((token) => {
        return getCannedReplies(token);
      })
      .then((res) => {
        console.log("Canned Response", res);
        if (res.status !== 200) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then((data) => {
        console.log("Canned Replies Loaded", data);
        setReplies(data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    console.log("Canned Replies Mounted");
    loadReplies();
  }, []);

  return (
    <div className="tw-bg-white tw-rounded-lg tw-font-sans tw-w-full tw-shadow-lg tw-max-w-[400px]">
      <div className="tw-bg-cortico-blue tw-flex tw-rounded-t-lg tw-p-4 tw-items-center">
        <div className="tw-bg-white tw-rounded-full tw-p-2">
          <img src={corticoIcon} alt="Cortico" className="tw-w-5 tw-h-5" />
        </div>
        <div className="tw-ml-4">
          <h2 className="tw-text-2xl tw-text-white tw-text-opacity-90 tw-tracking-wider">
            Canned Responses
          </h2>
          <p className="tw-text-xs tw-text-white tw-text-opacity-80">
            Save or load new responses to your message
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
              {replies.length > 0 ? (
                replies.map((reply, index) => {
                  return (
                    <div className="tw-my-3" key={index}>
                      <Reply
                        onClick={(data) => {
                          loadReply(data);
                        }}
                        uuid={reply.uuid}
                        onDelete={deleteReply}
                        {...reply}
                      />
                    </div>
                  );
                })
              ) : (
                <div className="tw-font-sans tw-p-4 tw-text-2xl tw-text-center tw-tracking-widest tw-text-gray-700 tw-text-opacity-60">
                  No Canned Responses! Click New Response to get started
                </div>
              )}
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
                <span className="tw-mr-2">New Response</span>
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
