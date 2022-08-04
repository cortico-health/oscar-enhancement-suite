import { useStore } from "../state"

const useUtils = () => {
    const { userStore } = useStore();

    const getOtherMembersName = (members) => {
        if (!members) return "";

        const { first_name, last_name } = userStore.user?.profile;
        const userFullName = first_name + " " + last_name;

        return members.filter((member) => {
            return member.full_name !== userFullName
        })
    }

    return {
        getOtherMembersName
    }
}

export default useUtils