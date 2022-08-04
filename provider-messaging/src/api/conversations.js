import axios from "./axios";

export const getChatMessageData = async(id) => {
    return await axios.get(`/vcn/chat-messages/${id}/`);
}

export const getConversationsList = async() => {
    return await axios.get(`/vcn/conversations`);
}


export const createConversation = async(inputs) => {
    /* TODO: will do this if I have the api documentation */
    console.log(inputs)
        /* return await postConversation(inputs); */
}