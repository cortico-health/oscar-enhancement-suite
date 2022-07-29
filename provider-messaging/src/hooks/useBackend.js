import axios from "axios";
import { getConversations, getChatMessages } from "../adapters";

const useBackend = () => {
    const getChatMessageData = async (id, accessToken) => {
        return await axios.all([getChatMessages(id, accessToken), getConversations(accessToken)]);
    }

    const getConversationsList = async (accessToken) => {
        return await getConversations(accessToken);
    }

    return {
        getChatMessageData,
        getConversationsList
    }
}

export default useBackend;