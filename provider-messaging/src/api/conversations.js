import axios from "./axios";

export const getChatMessageData = async (id) => {
    return await axios.get(`/vcn/chat-messages/${id}/`);
}

export const getConversationsList = async () => {
    return await axios.get('/vcn/conversations/');
}

export const createConversation = async (inputs) => {
    return await axios.post('/vcn/conversations/', {
        "patient": inputs.patient.id,
        "members": inputs.members
    });
}

export const createFile = async (file) => {
    const data = new FormData();
    data.append('file', file, file.name);
    return await axios.post('/vcn/files/', data, { headers: { "Content-Type": "multipart/form-data" } });
}

export const deleteFile = async (id) => {
    return await axios.delete(`/vcn/files/${id}`);
}