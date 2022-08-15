import axios from "./axios";

export const getChatMessageData = async (id) => {
    return await axios.get(`/vcn/chat-messages/${id}/`);
}

export const getConversationsList = async (patient) => {
    const apiUrl = patient ? `/vcn/conversations/?patient=${patient.id}` : '/vcn/conversations/'
    return await axios.get(apiUrl);
}

export const createConversation = async (inputs) => {
    return await axios.post('/vcn/conversations/', {
        "patient": inputs.patient.id,
        "members": inputs.members
    });
}