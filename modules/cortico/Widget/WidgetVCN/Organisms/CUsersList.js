import { h } from "preact";
import { useEffect,useState } from "preact/hooks";
import { useDispatch } from "react-redux";
import { usersData } from "../../../../../resources/js/data";
import AButton from "../Atoms/AButton";
import MSearch from "../Molecules/MSearch";
import MUserTab from "../Molecules/MUserTab";

/* import { useStore } from "../../state";
import { observer } from 'mobx-react-lite'
import { createConversation } from "../../api/conversations"; */

const CUsersList = () => {
    const dispatch = useDispatch();
    /* Insert here once the mobx has been integrated */
    /* const { userStore,conversationStore,patientStore } = useStore(); */

    const userStore = null;
    const conversationStore = null;
    const patientStore = null;

    const [checked,setChecked] = useState(undefined);
    const [confirm,setConfirm] = useState(false);

    const searchHandler = (e) => {
        let filteredData = userStore.users?.filter(user => {
            return user.name.toLowerCase().includes(e.target.value.toLowerCase())
                || user.title.toLowerCase().includes(e.target.value.toLowerCase())
                || user.clinic.toLowerCase().includes(e.target.value.toLowerCase())
        });
        setShowUsers(filteredData)
    }

    const [showUsers,setShowUsers] = useState(usersData);

    /* useEffect(() => {
        if (userStore.users) {
            setShowUsers(userStore.users);
            const res = {}
            userStore.users?.forEach(user => {
                res[user.id] = false
            })
            setChecked(res)
        }
    },[userStore.users]) */

    const handleOnChange = (e) => {
        console.log(e.target.value)
        setChecked({ ...checked,[e.target.value]: e.target.checked })
    }

    const getCheckedPatients = () => {
        const userIds = []

        if (checked) {
            for (const key in checked) {
                if (checked[key]) userIds.push(parseInt(key))
            }
        }

        return userIds
    }

    const gotToChat = () => {
        dispatch({
            type: "sidebar/setCurrent",
            payload: "VCN",
        })
    }

    const nextHandle = () => {
        console.log(checked)
        if (Object.values(checked).includes(true)) {
            setConfirm(true)
        }
        else {
            alert("users not selected")
        }
    }


    const handleCreateConversation = () => {
        const inputs = {
            patient: patientStore.patients.selected ? patientStore.patients.selected : {},
            members: [userStore.user.id,...getCheckedPatients()]
        }
        createConversation(inputs).then((response) => {
            const existingConversation = conversationStore.conversations.find((conversation) => {
                return conversation.id === parseInt(response.data.id);
            })
            if (!existingConversation) conversationStore.conversations.push(response.data)
            route(`/chat/${response.data.id}`)
        }).catch((error) => {
            console.log(error);
        });
    }

    if (!showUsers) {
        return <div>loading...</div>
    }

    return (
        <div className="tw-mx-2.5 tw-h-full">
            { confirm ?
                <div className="tw-absolute tw-z-50 tw-bg-white/40 tw-w-[1350px] tw-h-full tw-top-0 tw-right-0">
                    <div className="tw-bg-white tw-max-w-max tw-w-72 tw-px-9 tw-pt-16 tw-pb-8 tw-absolute tw-top-1/2 -tw-translate-y-1/2 tw-left-4">
                        <p className="tw-text-secondary-500 tw-text-h2 tw-pb-4">Are you sure you want to start a new conversation with the following users?</p>
                        {
                            userStore?.users?.map(user => {
                                return checked[user.id] ? <p className="tw-text-secondary-500 tw-text-h2 tw-font-bold tw-mb-2" key={ user.name }>{ user.name }</p> : null
                            })
                        }
                        <div className="tw-flex tw-w-full tw-mt-8 tw-justify-between">
                            <AButton onClick={ () => setConfirm(false) } className="tw-px-5" variant="button-secondary-sm">Cancel</AButton>
                            <AButton onClick={ handleCreateConversation } className="tw-px-5 tw-ml-5">Confirm</AButton>
                        </div>
                    </div>

                </div> : null }

            <div className="tw-flex tw-mt-7 tw-gap-x-2 tw-justify-between tw-items-center">
                <AButton onClick={ gotToChat } className="tw-w-[40%]" variant="button-secondary-sm">Cancel</AButton>
                <h2 className="tw-text-secondary-500 tw-font-bold tw-text-h2 tw-text-center"> New conversation</h2>
                <AButton onClick={ nextHandle } className="tw-w-[40%]" variant="button-primary-sm">Next</AButton>
            </div>

            <MSearch
                onInput={ searchHandler }
            />
            {
                showUsers.map((user,index) => {
                    return (
                        <MUserTab
                            key={ user.id }
                            onChange={ handleOnChange }
                            user={ user }
                            index={ index }
                        />
                    );
                })
            }
        </div>
    );
};

export default /* observer(CUsersList) */ CUsersList;
