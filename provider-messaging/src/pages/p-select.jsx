import { h } from "preact";
import CRecentList from "../components/organisms/c-recent-list";
import CSelectList from "../components/organisms/c-select-list";
// import ASvg from "../components/atoms/a-svg";
// import MSearch from "../components/molecules/m-search";
// import CConversationList from "../components/organisms/c-conversation-list";
// import CMessageList from "../components/organisms/c-message-list";
// import CPatientCard from "../components/organisms/c-patient-card";

import { usersData } from '../data';

const loggedUser = usersData[0];

const PSelect= () => {

  return (
    <div className="flex">
      <div className="bg-gray-50 shadow hidden h-screen lg:block w-[450px]">
        <CRecentList />
      </div>
      <CSelectList />
    </div>
  )
  };

export default PSelect;
