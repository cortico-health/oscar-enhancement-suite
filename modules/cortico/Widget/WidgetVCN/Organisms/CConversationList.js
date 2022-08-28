import { h } from "preact";
import { useEffect,useState } from "preact/hooks";
import { useStore } from "../../store/mobx";

import MConversationTab from "../Molecules/MConversationTab"
import MSearch from "../Molecules/MSearch";
import CNotFound from "./CNotFound";
import { observer } from "mobx-react-lite";
import { set } from "lodash";

const CConversationList = () => {
    const { conversationStore,patientStore } = useStore();

    const [patientName,setPatientName] = useState("");
    const [filteredConversation,setFilteredConversation] = useState([]);

    useEffect(() => {
        /* TODO Dwight: Make this functionl to make conversation searchable */
        if (conversationStore.conversations.all) {
            setFilteredConversation(conversationStore.conversations.all);
        }
        setFilteredConversation(conversationStore.conversations.all);
    },[conversationStore.conversations.all]);

    useEffect(() => {
        const selectedPatient = patientStore.patients?.selected;
        setFilteredConversation(conversationStore.conversations.all.filter((conversation) => {
            /* TODO Dwight: Change this if the API is ready */
            return conversation.patient_full_name === selectedPatient?.first_name + " " + selectedPatient?.last_name
        }))
    },[patientStore.patients?.selected]);

    const searchHandler = (e) => {
        /* TODO: Improved if needed */
        const nameQuery = e.target.value;
        const filteredData = conversationStore.conversations.all.filter((conversation) => {
            return conversation.members.find((member) => {
                return member.full_name.includes(nameQuery);
            })
        })

        setFilteredConversation(filteredData);
        setPatientName(nameQuery);
    }

    return (
        <div className="tw-mx-2.5">
            <MSearch onInput={ searchHandler } />
            <div className="tw-h-[400px] tw-overflow-y-auto">
                {
                    conversationStore.conversations.all ? (
                        <>
                            { conversationStore.conversations.all?.map(conversation => {
                                return (
                                    <MConversationTab
                                        key={ `conversation-${conversation.id}` }
                                        conversation={ conversation }
                                    />
                                )
                            }) }
                        </>
                    )
                        : <CNotFound name={ patientName } />
                }
            </div>
        </div>
    );
};

export default observer(CConversationList);
