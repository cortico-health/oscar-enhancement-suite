import axios from "axios"

const BACKEND_URL = "http://localhost:8426/api";

//GET
export const getChatMessages = async(id, accessToken) => {
    return axios.get(`${BACKEND_URL}/vcn/chat-messages/${id}/`, {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })
}

export const getConversations = async(accessToken) => {
    return axios.get(`${BACKEND_URL}/vcn/conversations`, {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })
}

export const getUser = async(accessToken) => {
    return axios.get(`${BACKEND_URL}/vcn/user`, {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })
}

//POST
export const postLogin = async(email, password) => {
    return axios.post(`${BACKEND_URL}/token/`, {
        username: email,
        password: password
    });
}

export const postConversation = async(data) => {
    return axios.post(`${BACKEND_URL}//`, {

    })
}

//PUT
export const patchUser = async(inputs) => {
    /* TODO: change URL */
    return axios.patch(`${BACKEND_URL}`, JSON.stringify(inputs), {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}