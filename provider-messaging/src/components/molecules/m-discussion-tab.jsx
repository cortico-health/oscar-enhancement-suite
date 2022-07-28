import { h } from "preact";
import { useRouter, route } from "preact-router";
import { useEffect, useState } from "preact/hooks";
import { useStore } from "../../state";
import CProfileCard from "../organisms/c-profile-card";

const MDiscussionTab = ({ discussion, ...props }) => {
  const selected = useRouter()[0].matches.id == discussion.id;

  const { auth } = useStore();

  const [showDiscussion, setShowDiscussion] = useState(undefined);

  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    setShowDiscussion(discussion);
  }, [discussion]);

  if (!showDiscussion) {
    return <div>loading...</div>;
  }

  return (
    <div
      onClick={() => route('/chat/'+discussion?.id)}
      href={'/chat/'+discussion?.id}
      {...props}
      className={`px-2.5 block ${
        selected ? "h-24 rounded-lg pt-4 bg-primary-500" : "h-12 my-8"
      }`}
    >
      <div
        className={`flex relative ${
          selected ? "" : "items-center"
        } w-12.5 max-w-12.5 justify-between`}
      >
        {/* TODO: Will uncomment this if its dependency will be okay */}
        {/* {showDiscussion?.members.length > 1 ? (
          <div className="cursor-pointer" onClick={() => setOpenModal(true)}>
            <div className="o-aspect-ratio w-8 min-w-8 h-8 min-h-8">
              <img
                className="left-0 o-aspect-ratio__content object-cover rounded-full"
                src={
                  showDiscussion?.members[
                    showDiscussion?.members.length - 1
                  ].avatar
                }
                alt=""
              />
            </div>

            <div className="o-aspect-ratio w-8 min-w-8 h-8 min-h-8">
              <img
                className="-left-4 o-aspect-ratio__content object-cover rounded-full"
                src={
                  showDiscussion?.members[
                    showDiscussion?.members.length - 2
                  ].avatar
                }
                alt=""
              />
            </div>
          </div>
        ) : (
          <div
            onClick={() => setOpenModal(true)}
            className="o-aspect-ratio cursor-pointer w-11 min-w-11 lg:w-12.5 lg:min-w-12.5 mr-4"
          >
            <img
              className="o-aspect-ratio__content object-cover rounded-full"
              src={showDiscussion?.members[0].avatar}
              alt=""
            />
          </div>
        )} */}
        <div
          onClick={() => setOpenModal(true)}
          className="o-aspect-ratio cursor-pointer w-11 min-w-11 lg:w-12.5 lg:min-w-12.5 mr-4"
        >
          {/* TODO: will change this if I have a photo data from API */}
          <img
            className="o-aspect-ratio__content object-cover rounded-full"
            src="https://images.unsplash.com/photo-1611695434398-4f4b330623e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
            alt=""
          />
        </div>
        <div className="max-w-100 hover:cursor-pointer">
          {showDiscussion?.members.map((member, index) => {
            if(index > 1) return;
            return (
              <div key={member.id}>
                {/* <CProfileCard 
                  setOpenModal={setOpenModal}
                  opened={openModal} 
                  profile={participiant}/> */}
                <p
                  className={`whitespace-nowrap font-medium text-contact2 lg:text-contact1 cursor-pointer ${
                    selected ? "text-white" : "text-secondary-500"
                  }`}
                >
                  {member.email +
                    (index != showDiscussion.members.length - 1
                      ? ", "
                      : "")}
                </p>
              </div>
            );
          })}
          <p
            className={`text-contact3 lg:text-contact2 mt-2  ${
              selected ? "text-white" : "text-secondary-500"
            }`}
          >
            <span>{discussion?.last_message?.from_user.email.split("@")[0]}: </span> 
            <span className="truncate" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">{discussion?.last_message?.body}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MDiscussionTab;
