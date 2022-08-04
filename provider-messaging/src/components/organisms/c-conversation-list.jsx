import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { useStore } from "../../state";

import MConversationTab from "../molecules/m-conversation-tab";
import MSearch from "../molecules/m-search";
import CNotFound from "./c-not-found";
import { observer } from "mobx-react-lite";

const CConversationList = () => {
  const { conversationStore } = useStore();
  const [patientName, setPatientName] = useState("");

  const searchHandler = (e) => {
    /* TODO: Improved if needed */
    const nameQuery = e.target.value;
    const filteredData = conversationStore.conversations.filter((conversation) => {
      return conversation.members.find((member) => {
        return member.full_name.includes(nameQuery);
      })
    })

    setConversations(filteredData);
    setPatientName(nameQuery);
  }

  return (
    <div className="mx-2.5">
      <MSearch onInput={searchHandler} />
      {
        conversationStore.conversations && conversationStore.conversations?.length ? (
          <>
            {conversationStore.conversations.map(conversation => {
              return (
                <MConversationTab conversation={conversation} />
              )
            })}
          </>
        )
          : <CNotFound name={patientName} />
      }
    </div>
  );
};

export default observer(CConversationList);
