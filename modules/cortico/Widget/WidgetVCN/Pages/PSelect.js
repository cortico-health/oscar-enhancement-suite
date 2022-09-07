import { h } from "preact";
import CRecentList from "../Organisms/CRecentList";
import CSelectList from "../Organisms/CSelectList";
// import ASvg from "../components/atoms/a-svg";
// import MSearch from "../components/molecules/m-search";
// import CConversationList from "../components/organisms/c-conversation-list";
// import CMessageList from "../components/organisms/c-message-list";
// import CPatientCard from "../components/organisms/c-patient-card";

const PSelect = () => {
    return (
        <div className="tw-flex tw-h-full">
            <div className="tw-bg-gray-50 tw-shadow tw-h-full tw-block tw-w-[550px]">
                <CRecentList />
            </div>
            <CSelectList />
        </div>
    )
};

export default PSelect;
