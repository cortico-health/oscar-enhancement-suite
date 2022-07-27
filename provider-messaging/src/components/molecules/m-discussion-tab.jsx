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
    let participiants = discussion.participiants.filter(
      (participiant) => participiant.id !== auth.id
    );
    setShowDiscussion({ ...discussion, participiants: participiants });
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
        selected ? "h-24 rounded-lg pt-4 bg-primary-500" : "h-12 my-5"
      }`}
    >
      <div
        className={`flex relative ${
          selected ? "" : "items-center"
        } w-12.5 max-w-12.5 justify-between`}
      >
        {showDiscussion?.participiants.length > 1 ? (
          <div className="cursor-pointer" onClick={() => setOpenModal(true)}>
            <div className="o-aspect-ratio w-8 min-w-8 h-8 min-h-8">
              <img
                className="left-0 o-aspect-ratio__content object-cover rounded-full"
                src={
                  showDiscussion?.participiants[
                    showDiscussion?.participiants.length - 1
                  ].avatar
                }
                alt=""
              />
            </div>

            <div className="o-aspect-ratio w-8 min-w-8 h-8 min-h-8">
              <img
                className="-left-4 o-aspect-ratio__content object-cover rounded-full"
                src={
                  showDiscussion?.participiants[
                    showDiscussion?.participiants.length - 2
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
              src={showDiscussion?.participiants[0].avatar}
              alt=""
            />
          </div>
        )}
        <div className="max-w-40">
          {showDiscussion?.participiants.map((participiant, index) => {
            return (
              <div key={participiant.id}>
                <CProfileCard 
                  setOpenModal={setOpenModal}
                  opened={openModal} 
                  profile={participiant}/>
                <p
                  onClick={() => setOpenModal(true)}
                  className={`whitespace-nowrap font-medium text-contact2 lg:text-contact1 cursor-pointer ${
                    selected ? "text-white" : "text-secondary-500"
                  }`}
                >
                  {participiant.name +
                    (index != showDiscussion.participiants.length - 1
                      ? ", "
                      : "")}
                </p>
              </div>
            );
          })}
          <p
            className={`text-contact3 lg:text-contact2 truncate mt-1.5  ${
              selected ? "text-white" : "text-secondary-500"
            }`}
          >
            {" "}
            {discussion.messages[discussion.messages.length - 1].content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MDiscussionTab;
