import { h } from "preact";
import { useRouter, route } from "preact-router";
import { useEffect, useState } from "preact/hooks";
import { multipleObjectDataFormatting } from "../../helper/multipleDataFormatting";
import useUtils from "../../hooks/useUtils";
import CProfileCard from "../organisms/c-profile-card";
import MProfilePicture from './m-profile-picture';

const MConversationTab = ({ conversation, ...props }) => {
  const router = useRouter()[0];

  const { getOtherMembersName } = useUtils();

  const [selected, setSelected] = useState(false);
  const [showConversation, setShowConversation] = useState(undefined);

  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    setShowConversation(conversation);
  }, [conversation]);

  useEffect(() => {
    if (router.matches?.id && conversation?.id) {
      setSelected(router.matches.id == conversation.id);
    }
  }, [router.matches?.id]);

  if (!showConversation) {
    return <div>loading...</div>;
  }

  return (
    <div
      onClick={() => { route('/chat/' + conversation?.id) }}
      href={'/chat/' + conversation?.id}
      {...props}
      className={`flex flex-column items-center px-2.5 block my-3 cursor-pointer ${selected ? "h-24 rounded-lg bg-primary-500" : ""}`}
    >
      <div
        className={`flex relative items-center`}
      >
        {showConversation?.members.length > 1 ? (
          <div className="cursor-pointer ml-4" onClick={() => setOpenModal(true)}>
            <div className="o-aspect-ratio w-11 min-w-8 h-11 min-h-8">
              <MProfilePicture avatar={showConversation?.members[showConversation?.members.length - 1].avatar}
                className="left-0 top-2 o-aspect-ratio__content"
              />
            </div>

            <div className="o-aspect-ratio w-11 min-w-8 h-11 min-h-8">
              <MProfilePicture avatar={showConversation?.members[showConversation?.members.length - 2].avatar}
                className="-left-4 -top-2 o-aspect-ratio__content"
              />
            </div>
          </div>
        ) : (
          <div
            onClick={() => setOpenModal(true)}
            className="o-aspect-ratio cursor-pointer w-11 min-w-11 lg:w-12.5 lg:min-w-12.5 ml-2"
          >
            <MProfilePicture avatar={showConversation?.members[0].avatar}
              className="o-aspect-ratio__content"
            />
          </div>
        )}
        <div className="max-w-full ml-4">
          <p
            className={`text-contact2 lg:text-contact1 w-64 cursor-pointer whitespace-nowrap text-ellipsis overflow-hidden ${selected ? "text-white" : "text-secondary-500"
              }`}
          >
            {/* <CProfileCard
                    setOpenModal={setOpenModal}
                    opened={openModal}
                    profile={participiant}/> */}
            {multipleObjectDataFormatting(getOtherMembersName(showConversation?.members))}
          </p>
          <p
            className={`text-contact3 relative lg:text-contact2 mt-2 w-64 whitespace-nowrap text-ellipsis overflow-hidden ${selected ? "text-white" : "text-secondary-300"
              }`}
          >
            {showConversation?.last_message ? (
              <span>
                {showConversation?.last_message.from_user.full_name}: {showConversation?.last_message?.body}
              </span>
            ) : ''}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MConversationTab;
