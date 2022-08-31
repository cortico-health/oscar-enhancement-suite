import { cerebroApiUrl } from "../../Utils/VcnUtils";
import { loadExtensionStorageValue } from "../../Utils/Utils";

export const getChatMessageData = async (id) => {
    const accessToken = await (loadExtensionStorageValue('jwt_access_token'));
    return await fetch(`${cerebroApiUrl}/vcn/chat-messages/${id}/`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
        }
    });
}

export const getConversationsList = async () => {
    const accessToken = await (loadExtensionStorageValue('jwt_access_token'));
    return await fetch(`${cerebroApiUrl}/vcn/conversations/`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
        }
    });
}

export const getConversation = async (id) => {
    const accessToken = await (loadExtensionStorageValue('jwt_access_token'));
    return await fetch(`${cerebroApiUrl}/vcn/conversations/${id}`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
        }
    });
}

export const createConversation = async (userInputs) => {
    const accessToken = await (loadExtensionStorageValue('jwt_access_token'));
    const inputs = {
        "patient": userInputs.patient.id,
        "members": userInputs.members
    };

    return await fetch(`${cerebroApiUrl}/vcn/conversations/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
        },
        body: JSON.stringify(inputs),
    });
}

export const createFile = async (file) => {
    const accessToken = await (loadExtensionStorageValue('jwt_access_token'));
    const data = new FormData();
    data.append('file', file, file.name);

    return await fetch(`${cerebroApiUrl}/vcn/files/`, {
        method: "POST",
        headers: {
            "Content-Type": "multipart/form-data",
            "Authorization": `Bearer ${accessToken}`
        },
        body: data,
    });
}

export const deleteFile = async (id) => {
    const accessToken = await (loadExtensionStorageValue('jwt_access_token'));
    return await fetch(`/vcn/files/${id}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${accessToken}`
        },
    });
}