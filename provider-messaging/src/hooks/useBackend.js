import axios from "axios";
import { getConversations, getChatMessages, getUser, postLogin, udpateUser } from "../adapters";

const useBackend = () => {
    const getChatMessageData = async (id, accessToken) => {
        return await axios.all([getChatMessages(id, accessToken), getConversations(accessToken)]);
    }

    const getConversationsList = async (accessToken) => {
        return await getConversations(accessToken);
    }

    const getUserData = async (accessToken) => {
        return await getUser(accessToken);
    }

    const postLoginAccess = async (email, password) => {
        return await postLogin(email, password);
    }

    const updateUser = async (inputs) => {
        return await udpateUser(inputs);
    }

    return {
        getChatMessageData,
        getConversationsList,
        getUserData,
        postLoginAccess,
        updateUser
    }
}

export default useBackend;