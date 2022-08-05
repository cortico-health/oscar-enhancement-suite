import axios from "./axios";

export const getChatMessageData = async (id) => {
    return await axios.get(`/vcn/chat-messages/${id}/`);
}

export const getConversationsList = async () => {
    return await axios.get(`/vcn/conversations/`);
}

export const createConversation = async (inputs) => {
    return await axios.post('/vcn/conversations/', {
        "patient_full_name": "",
        "patient_dob": null,
        "patient_hin": "",
        "members": inputs
    });
}