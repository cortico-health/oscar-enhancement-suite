import classNames from "classnames";
import { observer } from "mobx-react-lite";
import { h } from "preact";
/* import { useRouter,route } from "preact-router"; */
import { useEffect,useState } from "preact/hooks";
import { multipleObjectDataFormatting } from "../../../../helper/name-formatting";
import useUtils from "../../../../Hooks/useUtils";
import { useStore } from "../../store/mobx";
/* import CProfileCard from "../organisms/c-profile-card"; */
import MProfilePicture from "./MProfilePicture";

const MConversationTab = ({ conversation,selected,...props }) => {
    const { conversationStore } = useStore();

    const { getOtherMembersName } = useUtils();

    const [openModal,setOpenModal] = useState(false);

    const [isSelected,setIsSelected] = useState(null);

    useEffect(() => {
        const selectedId = conversationStore.conversations.selected?.id;
        setIsSelected(selectedId == conversation.id);
    },[conversationStore.conversations.selected]);

    const handleChatRedirect = (e) => {
        conversationStore.selectConversation(conversation.id);
    }

    if (!conversation) {
        return <div>loading...</div>;
    }

    return (
        <div
            onClick={ handleChatRedirect }
            { ...props }
            className={ classNames("tw-flex tw-flex-column tw-items-center tw-px-2.5 tw-my-3 hover:tw-cursor-pointer",
                isSelected ? "tw-h-24 tw-rounded-lg tw-bg-primary-500" : "",
                conversation.unread_messages_count ? 'tw-font-bold' : "")
            }
        >
            <div
                className={ `tw-flex tw-relative tw-items-center tw-justify-between` }
            >
                { conversation?.members.length > 2 ? (
                    <div className="tw-cursor-pointer tw-ml-4" onClick={ () => setOpenModal(true) }>
                        <div className="tw-w-11 tw-min-w-8 tw-h-11 tw-min-h-8">
                            <MProfilePicture avatar={ conversation?.members[conversation?.members.length - 1].avatar }
                                className="tw-absolute tw-left-2 tw-top-2"
                            />
                        </div>

                        <div className="tw-w-11 tw-min-w-8 tw-h-11 tw-min-h-8">
                            <MProfilePicture avatar={ conversation?.members[conversation?.members.length - 2].avatar }
                                className="tw-absolute -tw-left-3 tw-top-9"
                            />
                        </div>
                    </div>
                ) : (
                    <div
                        onClick={ () => setOpenModal(true) }
                            className="tw-cursor-pointer"
                    >
                            <MProfilePicture avatar={ conversation?.members[0].avatar } />
                    </div>
                ) }
                <div className="tw-max-w-full tw-ml-4">
                    <p
                        className={ `tw-text-contact2 tw-w-64 tw-cursor-pointer tw-whitespace-nowrap tw-text-ellipsis tw-overflow-hidden ${isSelected ? "tw-text-white" : "tw-text-secondary-500"
                            }` }
                    >
                        {/* <CProfileCard
                    setOpenModal={setOpenModal}
                    opened={openModal}
                    profile={participiant}/> */}
                        { multipleObjectDataFormatting(getOtherMembersName(conversation?.members)) }
                    </p>
                    <p
                        className={ `tw-text-contact3 tw-relative tw-mt-2 tw-w-64 tw-whitespace-nowrap tw-text-ellipsis tw-overflow-hidden ${isSelected ? "tw-text-white" : "tw-text-secondary-300"
                            }` }
                    >
                        { conversation?.last_message ? (
                            <span>
                                { conversation?.last_message.from_user.full_name }: { conversation?.last_message?.body }
                            </span>
                        ) : '' }
                        <br />
                        Unread Messages: { conversation.unread_messages_count }
                    </p>
                </div>
            </div>
        </div>
    );
};

export default observer(MConversationTab);