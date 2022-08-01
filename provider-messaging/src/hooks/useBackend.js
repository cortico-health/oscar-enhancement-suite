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

    const createConversation = async(inputs) => {
        console.log(inputs)
            /* return await postConversation(inputs); */
    }

    return {
        getChatMessageData,
        getConversationsList,
        createConversation,
        getUserData,
        updateUser,
    }
}

export default useBackend;