import axios from "axios";
import { getConversations, getChatMessages, getUser, postLogin, patchUser } from "../adapters";

const useBackend = () => {

    const getChatMessageData = async(id, accessToken) => {
        return await axios.all([getChatMessages(id, accessToken), getConversations(accessToken)]);
    }

    const getConversationsList = async(accessToken) => {
        return await getConversations(accessToken);
    }

    const getUserData = async(accessToken) => {
        return await getUser(accessToken);
    }

    const updateUser = async(inputs) => {
        return await patchUser(inputs);
    }

    return {
        getChatMessageData,
        getConversationsList,
        getUserData,
        updateUser
    }
}

export default useBackend;