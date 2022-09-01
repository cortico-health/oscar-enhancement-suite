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
    const [filteredConversation,setFilteredConversation] = useState(undefined);

    useEffect(() => {
        setFilteredConversation(() => { return conversationStore.conversations.all });
    },[]);

    useEffect(() => {
        const selectedPatient = patientStore.patients.selected;
        if (!selectedPatient) {
            setFilteredConversation(conversationStore.conversations.all);
            return;
        }

        setFilteredConversation(conversationStore.conversations.all.filter((conversation) => {
            return conversation.patient === selectedPatient?.first_name + " " + selectedPatient?.last_name
        }))
    },[patientStore.patients.selected]);

    const searchHandler = debounce(query => {
        if (!query) return setFilteredConversation(conversationStore.conversations.all)

        const filteredData = conversationStore.conversations.all.filter((conversation) => {
            return conversation.members.find((member) => {
                return member.full_name.includes(query);
            })
        })

        setFilteredConversation(filteredData);
        setSearchName(query);
    },500)

    return (
        <div className="tw-mx-2.5">
            <MSearch onInput={ (e) => searchHandler(e.target.value) } />
            <div className="tw-h-[400px] tw-overflow-y-auto">
                { filteredConversation ? (
                    filteredConversation.length > 0 ? (
                        <>
                            { filteredConversation?.map(conversation => {
                                return (
                                    <MConversationTab
                                        key={ `conversation-${conversation.id}` }
                                        conversation={ conversation }
                                    />
                                )
                            }) }
                        </>
                    ) : <CNotFound name={ searchName } />
                ) : (<ASpinner />)
                }
            </div>
        </div>
    );
};

export default observer(CConversationList);
