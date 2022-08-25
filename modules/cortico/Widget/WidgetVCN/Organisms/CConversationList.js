import { h } from "preact";
import { useEffect,useState } from "preact/hooks";
import { useStore } from "../../store/mobx";

import MConversationTab from "../Molecules/MConversationTab"
import MSearch from "../Molecules/MSearch";
import CNotFound from "./CNotFound";
import { observer } from "mobx-react-lite";

const CConversationList = () => {
    const { conversationStore,patientStore } = useStore();
    const [patientName,setPatientName] = useState("");
    const [filteredConversation,setFilteredConversation] = useState(undefined);

    useEffect(() => {
        const selectedPatient = patientStore.patients?.selected;
        setFilteredConversation(conversationStore.conversations.filter((conversation) => {
            /* TODO Dwight: Change this if the API is ready */
            return conversation.patient_full_name === selectedPatient?.first_name + " " + selectedPatient?.last_name
        }))
    },[patientStore.patients?.selected])

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
        <div className="tw-mx-2.5">
            <MSearch onInput={ searchHandler } />
            {
                conversationStore.conversations && conversationStore.conversations?.length ? (
                    <>
                        { conversationStore.conversations.map(conversation => {
                            return (
                                <MConversationTab key={ `conversation-${conversation.id}` } conversation={ conversation } />
                            )
                        }) }
                    </>
                )
                    : <CNotFound name={ patientName } />
            }
        </div>
    );
};

export default observer(CConversationList);
