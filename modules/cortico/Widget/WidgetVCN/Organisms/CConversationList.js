import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { useStore } from "../../store/mobx";

import MConversationTab from "../Molecules/MConversationTab"
import MSearch from "../Molecules/MSearch";
import CNotFound from "./CNotFound";
import { observer } from "mobx-react-lite";
import { debounce } from "lodash";
import ASpinner from "../Atoms/ASpinner";

const CConversationList = () => {
    const { conversationStore, patientStore } = useStore();

    const [searchName, setSearchName] = useState("");
    const [conversationKey, setConversationKey] = useState("all")

    //Handle the conversation that is filtered by patient
    useEffect(() => {
        setConversationKey(patientStore.patients.selected?.hin || "all")
    }, [patientStore.patients.selected?.hin]);

    useEffect(() => {
        const selectedPatient = patientStore.patients.selected;

        //If no one is selected then place all conversation otherwise filter it
        if (!selectedPatient) {
            //Call the conversation without query to bring back all of conversations
            conversationStore.fetchConversations();
            return;
        }

        //Filter Conversation by Patients hin
        conversationStore.fetchConversations(selectedPatient.hin);
    }, [conversationKey])

    const searchHandler = debounce(query => {
        // TODO: Justin - Implement search later
    }, 500)

    return (
        <div className="tw-mx-2.5">
            <MSearch disabled={conversationStore.conversations[conversationKey]?.length === 0 && !searchName} onInput={(e) => searchHandler(e.target.value)} />
            <div className="tw-h-[400px] tw-overflow-y-auto">
                {conversationStore.conversations[conversationKey] ? (
                    conversationStore.conversations[conversationKey].length > 0 ? (
                        <>
                            {conversationStore.conversations[conversationKey]?.map(conversation => {
                                return (
                                    <MConversationTab
                                        key={`conversation-${conversation.id}`}
                                        conversation={conversation}
                                    />
                                )
                            })}
                        </>
                    ) : <CNotFound name={searchName} />
                ) : (
                    <div className="tw-flex tw-justify-center tw-items-center tw-mt-3">
                        <ASpinner />
                    </div>
                )
                }
            </div>
        </div>
    );
};

export default observer(CConversationList);
