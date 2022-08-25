import { cerebroURL,getAccessToken } from "../../Utils/VcnUtils";

export const getChatMessageData = async (id) => {
    return await fetch(`${cerebroURL}/vcn/chat-messages/${id}/`,{
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${getAccessToken}`,
        }
    });
}

export const getConversationsList = async () => {
    return await fetch(`${cerebroURL}/vcn/conversations/`,{
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${getAccessToken}`,
        }
    });
}

export const createConversation = async (userInputs) => {
    const inputs = {
        "patient": userInputs.patient.id,
        "members": userInputs.members
    };

    return await fetch(`${cerebroURL}/vcn/conversations/`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${getAccessToken}`,
        },
        body: JSON.stringify(inputs),
    });
}

export const createFile = async (file) => {
    const data = new FormData();
    data.append('file',file,file.name);

    return await fetch(`${cerebroURL}/vcn/files/`,{
        method: "POST",
        headers: {
            "Content-Type": "multipart/form-data",
            "Authorization": `Bearer ${getAccessToken}`,
        },
        body: data,
    });
}

export const deleteFile = async (id) => {
    return await fetch(`/vcn/files/${id}`,{
        method: "DELETE"
    });
}