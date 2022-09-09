import { h } from "preact";
import { useEffect,useState } from "preact/hooks";
import { useStore } from "../../store/mobx";

import MConversationTab from "../Molecules/MConversationTab"
import MSearch from "../Molecules/MSearch";
import CNotFound from "./CNotFound";
import { observer } from "mobx-react-lite";
import { debounce } from "lodash";
import ASpinner from "../Atoms/ASpinner";

const CConversationList = () => {
    const { conversationStore,patientStore } = useStore();

    const [searchName,setSearchName] = useState("");
    //This is for a all conversation regarding patient
    const [patientConversations,setPatientConversations] = useState(undefined);
    //This is a result of query conversation in conversations filtered by patients.
    const [filteredConversations,setFilteredConversations] = useState(undefined);
    const [isLoading,setIsLoading] = useState(false);

    //Handle the conversation that is filtered by patient
    useEffect(() => {
        setIsLoading(true);
        const selectedPatient = patientStore.patients.selected;

        //If no one is selected then place all conversation otherwise filter it
        if (!selectedPatient) {
            //Call the conversation without query to bring back all of conversations
            conversationStore.fetchConversations();
            return;
        }

        //Filter Conversation by Patients hin
        conversationStore.fetchConversations(selectedPatient.hin);
    },[patientStore.patients.selected]);

    useEffect(() => {
        setPatientConversations(conversationStore.conversations.all);
    },[conversationStore.conversations.all]);

    //Handle the conversation that is being viewed by the user
    useEffect(() => {
        setFilteredConversations(patientConversations);
        setIsLoading(false);
    },[patientConversations]);

    const searchHandler = debounce(query => {
        setSearchName(query);

        if (!query) return setFilteredConversations(patientConversations)

        const filteredData = patientConversations.filter((conversation) => {
            return conversation.members.find((member) => {
                return member.full_name.includes(query);
            })
        })

        setFilteredConversations(filteredData);
    },500)

    return (
        <div className="tw-mx-2.5">
            <MSearch disabled={ filteredConversations?.length === 0 && !searchName } onInput={ (e) => searchHandler(e.target.value) } />
            <div className="tw-h-[400px] tw-overflow-y-auto">
                { !isLoading ? (
                    filteredConversations?.length > 0 ? (
                        <>
                            { filteredConversations?.map(conversation => {
                                return (
                                    <MConversationTab
                                        key={ `conversation-${conversation.id}` }
                                        conversation={ conversation }
                                    />
                                )
                            }) }
                        </>
                    ) : <CNotFound name={ searchName } />
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
