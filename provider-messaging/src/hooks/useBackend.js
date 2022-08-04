import axios from "axios";
import { useEffect } from "preact/hooks";
import { useStore } from "../state";

const BACKEND_URL = "http://localhost:8426/api";

const useBackend = () => {

    const getChatMessageData = async(id, accessToken) => {
        return await axios.get(`${BACKEND_URL}/vcn/chat-messages/${id}/`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });
    }

    const getConversationsList = async(accessToken) => {
        return await axios.get(`${BACKEND_URL}/vcn/conversations`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });
    }

    const getUserData = async(accessToken) => {
        return await axios.get(`${BACKEND_URL}/vcn/user`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });
    }

    const updateUser = async(inputs) => {
        /* Can be improved I think */
        return await axios.patch(`${BACKEND_URL}`, JSON.stringify(inputs), {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    const createConversation = async(inputs) => {
        /* TODO: will do this if I have the api documentation */
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