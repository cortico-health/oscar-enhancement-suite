import { useStore } from "../cortico/Widget/store/mobx";

const useUtils = () => {
    const { userStore } = useStore();

    const getOtherMembersName = (members) => {
        if (!members) return "No Members";

        return members.filter((member) => {
            return member.full_name !== userStore.user?.profile.first_name + " " + userStore.user?.profile.last_name;
        })
    }

    return {
        getOtherMembersName
    }
}

export default useUtils;