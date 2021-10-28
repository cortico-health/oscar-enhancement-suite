import { render } from "preact";
import { useState, useRef } from "preact/hooks";
import corticoIcon from "../../resources/icons/96x96.png";
import { PlusIcon } from "../Icons/HeroIcons";
import Subject from "./SubjectInput";
import Chat from "./ChatInput";

function AddReply() {
  const subject = useRef();
  const chat = useRef();

  return (
    <div>
      <Subject ref={subject} />
      <hr className="tw-bg-opacity-25" />
      <Chat ref={chat} />
    </div>
  );
}

function Reply({ subject, body, ...props }) {
  return (
    <div className=" tw-bg-white tw-rounded-lg tw-py-4 tw-cursor-pointer tw-hover:bg-gray-200 tw-h-28 tw-font-sans tw-hover:bg-black">
      <div className="tw-px-4 tw-mb-2 tw-text-opacity-100 tw-text-black tw-tracking-wider tw-text-sm">
        {subject}
      </div>
      <div className="tw-px-4 tw-text-xs tw-text-opacity-70 tw-text-black tw-line-clamp-3">
        {body}
      </div>
    </div>
  );
}

function SavedReplies() {
  const [addReply, setAddReply] = useState(false);
  const [replies, setReplies] = useState([
    {
      subject: "TELEHEALTH - LAB REQ TO DO",
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker inclu",
    },
    {
      subject: "TELEHEALTH - LAB REQ TO DO",
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker inclu",
    },
    {
      subject: "TELEHEALTH - LAB REQ TO DO",
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker inclu",
    },
  ]);
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
      <div className="tw-bg-gray-100 tw-p-4">
        {addReply === false ? (
          <div>
            <div className="tw-my-3">
              {replies.map((reply, index) => {
                return (
                  <div className="tw-my-3" key={index}>
                    <Reply {...reply} />
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <AddReply />
        )}
      </div>

      <div className="tw-p-4 tw-bg-gray-200 tw-flex tw-justify-end tw-rounded-b-lg">
        <div>
          {addReply === false ? (
            <div>
              <button
                onClick={() => {
                  setAddReply(true);
                }}
                className="tw-px-4 tw-py-2 tw-rounded-lg tw-bg-cortico-blue tw-text-white tw-text-base tw-flex tw-items-center"
              >
                <span className="tw-mr-2">New Reply</span>
                <PlusIcon className="tw-h-4 tw-w-4 tw-text-white" />
              </button>
            </div>
          ) : (
            <div className="tw-flex tw-justify-end">
              <button
                onClick={() => {
                  setAddReply(false);
                }}
                className="tw-px-4 tw-py-2 tw-rounded-lg tw-bg-gray-500 tw-text-white tw-text-base tw-flex tw-items-center tw-mr-2"
              >
                <span className="tw-mr-2">Cancel</span>
                <PlusIcon className="tw-h-4 tw-w-4 tw-text-white" />
              </button>
              <button className="tw-px-4 tw-py-2 tw-rounded-lg tw-bg-cortico-blue tw-text-white tw-text-base tw-flex tw-items-center">
                <span className="tw-mr-2">Save Reply</span>
                <PlusIcon className="tw-h-4 tw-w-4 tw-text-white" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SavedReplies;
