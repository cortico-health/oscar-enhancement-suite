import { useStore } from "../cortico/Widget/store/mobx";

const useUtils = () => {
    const { userStore } = useStore();

    const getOtherMembersName = (members) => {
        if (!members) return [];

        return members.filter((member) => {
            return member.id !== userStore.user.id;
        })
    }

    return {
        getOtherMembersName
    }
}

export default useUtils;