import { useState, useEffect } from "preact/hooks";
import { useDispatch } from "react-redux";
import { PlusIcon, LeftArrowIcon, TrashIcon } from "../Icons/HeroIcons";
import Input from "../cortico/Widget/base/Input";
import Textarea from "../cortico/Widget/base/Textarea";
import {
  getCannedReplies,
  addCannedReply,
  deleteCannedReply,
} from "../Api/Api";
import { loadExtensionStorageValue } from "../Utils/Utils";
import { handleTokenExpiry } from "../../modules/cortico/Widget/common/utils";
import { nanoid } from "nanoid";
import Loader from "./Loader";

function AddReply({ add, cancel, ...props }) {
  const [subject, setSubject] = useState(null);
  const [body, setBody] = useState(null);

  const handleAddReply = (e) => {
    add({ subject, body });
  };

  return (
    <div>
      <div className="tw-p-4">
        <Input
          placeholder="Subject"
          className="tw-border-opacity-20 tw-rounded-md tw-px-2 border border-gray-200 rounded-md"
          onChange={(val) => setSubject(val)}
        />
        <hr className="tw-bg-opacity-25" />
        <Textarea
          placeholder="Place message here"
          onChange={(val) => setBody(val)}
        />
      </div>
      <div className="tw-p-4 tw-bg-gray-200 tw-flex tw-justify-end tw-rounded-b-lg">
        <div className="tw-flex tw-justify-end">
          <button
            onClick={cancel}
            className="tw-px-3 tw-py-2 tw-rounded-lg tw-bg-gray-500 tw-text-white tw-text-sm tw-flex tw-items-center tw-mr-2"
          >
            <span className="tw-mr-2">Cancel</span>
            <LeftArrowIcon className="tw-h-4 tw-w-4 tw-text-white" />
          </button>
          <button
            onClick={handleAddReply}
            className="tw-px-3 tw-py-2 tw-rounded-lg tw-bg-blue-1000 tw-text-white tw-text-sm tw-flex tw-items-center"
          >
            <span className="tw-mr-2">Save Response</span>
            <PlusIcon className="tw-h-4 tw-w-4 tw-text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}

function Reply({
  id,
  subject,
  body,
  message,
  onClick,
  onDelete,
  onCancel,
  ...props
}) {
  const [isDelete, setIsDelete] = useState(false);

  const handleDelete = () => {
    setIsDelete(false);
    onDelete(id);
  };
  return (
    <div className="tw-drop-shadow-lg">
      <div
        onClick={() => {
          onClick({ subject, message });
        }}
        className=" tw-bg-white tw-py-4 tw-cursor-pointer tw-rounded-t-lg tw-hover:bg-gray-200 tw-max-h-28 tw-font-sans tw-hover:bg-black tw-relative"
      >
        <div className="tw-px-4 tw-mb-2 tw-text-gray-700 tw-text-sm tw-cursor-pointer">
          {subject}
        </div>
        <div className="tw-px-4 tw-text-xs tw-text-gray-700 tw-cursor-pointer tw-line-clamp-3">
          {message}
        </div>
      </div>
      <hr />
      <div className="tw-bg-gray-50 tw-flex tw-items-center tw-justify-end tw-p-2 tw-rounded-b-lg">
        {isDelete === false ? (
          <button
            onClick={() => {
              setIsDelete(true);
            }}
            className="tw-bg-red-500 tw-flex tw-items-center tw-rounded-md tw-p-2"
          >
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
  const dispatch = useDispatch();
  const [addReply, setAddReply] = useState(false);
  const [replies, setReplies] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleAdd = (data) => {
    const { body, subject } = data;
    const temp = {
      subject,
      message: body,
    };
    loadExtensionStorageValue("jwt_access_token")
      .then((token) => {
        return addCannedReply(token, temp);
      })
      .then((res) => {
        if (res.status >= 300 || res.status < 200) {
          return Promise.all([res.json(), Promise.resolve(res)]);
        } else {
          dispatch({
            type: "notifications/add",
            payload: {
              type: "success",
              message: "Canned reply has been added",
              title: "Success",
              id: nanoid(),
            },
          });
          loadReplies();
        }
      })
      .then((results) => {
        if (results) {
          data = results[0];
          const response = results[1];
          if (response.status !== 200) {
            if (!handleTokenExpiry(response, data)) {
              throw Error(response.statusText);
            }
          }
        }
      })
      .catch((error) => {
        console.error(error);
        dispatch({
          type: "notifications/add",
          payload: {
            type: "error",
            message: error.message || error.toString(),
            title: error.title || "Error Occured",
            id: nanoid(),
          },
        });
      })
      .finally(() => {
        setAddReply(false);
      });
  };
  const handleCancel = () => {
    setAddReply(false);
  };

  const deleteReply = (id) => {
    loadExtensionStorageValue("jwt_access_token")
      .then((token) => {
        return deleteCannedReply(token, id);
      })
      .then((res) => {
        if (res.status >= 300 || res.status < 200) {
          return Promise.all([res.json(), Promise.resolve(res)]);
        } else {
          dispatch({
            type: "notifications/add",
            payload: {
              type: "success",
              message: "Canned reply has been deleted",
              title: "Success",
              id: nanoid(),
            },
          });
          loadReplies();
        }
      })
      .then((results) => {
        if (results) {
          const data = results[0];
          const response = results[1];
          if (response.status !== 200) {
            if (!handleTokenExpiry(response, data)) {
              throw Error(response.statusText);
            }
          }
        }
      })
      .catch((error) => {
        console.error(error);
        dispatch({
          type: "notifications/add",
          payload: {
            type: "error",
            message: error.message || error.toString(),
            title: error.title || "Error Occured",
            id: nanoid(),
          },
        });
      });
  };

  const loadReplies = () => {
    setLoading(true);
    loadExtensionStorageValue("jwt_access_token")
      .then((token) => {
        return getCannedReplies(token);
      })
      .then((res) => {
        return Promise.all([res.json(), Promise.resolve(res)]);
      })
      .then((results) => {
        const data = results[0];
        const response = results[1];
        if (response.status >= 300 || response.status < 200) {
          if (!handleTokenExpiry(response, data)) {
            throw new Error(response.statusText);
          }
        }
        setReplies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        dispatch({
          type: "notifications/add",
          payload: {
            type: "error",
            message: error.message || error.toString(),
            title: error.title || "Error Occured",
            id: nanoid(),
          },
        });
      });
  };

  useEffect(() => {
    console.log("Canned Replies Mounted");
    loadReplies();
  }, []);

  return (
    <div className="tw-bg-white tw-rounded-lg tw-border tw-font-sans tw-w-full tw-shadow-lg tw-max-w-[375px]">
      <div className="tw-bg-blue-1000 tw-flex tw-rounded-t-lg tw-items-center tw-p-2">
        <div className="tw-ml-4">
          <p className="tw-m-0 tw-p-0 tw-text-base tw-text-white">
            Canned Responses
          </p>
          <p className="tw-text-xs tw-text-white">
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
            {!loading ? (
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
              ) : (
                <div className="tw-my-3 tw-text-center">
                  <Loader color="black" size={10}/>
                  <div className="tw-font-sans tw-p-4 tw-text-2xl tw-tracking-widest tw-text-gray-700 tw-text-opacity-60">
                    Fetching Canned Responses....
                  </div>
                </div>
              )}
          </div>
        ) : (
          <AddReply add={handleAdd} cancel={handleCancel} />
        )}
      </div>
      {addReply === false ? (
        <div className="tw-p-2 tw-bg-gray-200 tw-flex tw-justify-end tw-rounded-b-lg">
          <div>
            <div>
              <button
                onClick={() => {
                  setAddReply(true);
                }}
                className="tw-px-3 tw-py-2 tw-rounded-lg tw-bg-blue-1000 tw-text-white tw-text-sm tw-flex tw-items-center"
              >
                <span className="tw-mr-2 tw-cursor-pointer">New</span>
                <PlusIcon className="tw-h-4 tw-w-4 tw-text-white tw-cursor-pointer" />
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
