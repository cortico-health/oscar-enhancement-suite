import axios from "axios";
import { getConversations, getChatMessages, getUser, postLogin } from "../adapters";

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

    return {
        getChatMessageData,
        getConversationsList,
        getUserData,
        postLoginAccess
    }
}

export default useBackend;