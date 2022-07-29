import axios from "axios"

export const getChatMessages = async (id, accessToken) => {
    return axios.get(`http://localhost:8426/api/vcn/chat-messages/${id}/`, {
        headers: {
        'Authorization': `Bearer ${accessToken}`
        }
    })
}

export const getConversations = async (accessToken) => {
    return axios.get(`http://localhost:8426/api/vcn/conversations`, {
        headers: {
        'Authorization': `Bearer ${accessToken}`
        }
    })
}