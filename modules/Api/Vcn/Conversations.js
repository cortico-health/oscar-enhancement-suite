import { CEREBRO_API_URL } from "../../Utils/VcnUtils";
import { loadExtensionStorageValue } from "../../Utils/Utils";

export const getChatMessageData = async (id) => {
    const accessToken = await (loadExtensionStorageValue('jwt_access_token'));
    return await fetch(`${CEREBRO_API_URL}/vcn/chat-messages/${id}/`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
        }
    });
}

export const getConversationsList = async (patient_hin = "") => {
    const accessToken = await (loadExtensionStorageValue('jwt_access_token'));
    return await fetch(`${CEREBRO_API_URL}/vcn/conversations/?patient__hin=${patient_hin}`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
        }
    });
}

export const getConversation = async (id) => {
    const accessToken = await (loadExtensionStorageValue('jwt_access_token'));
    return await fetch(`${CEREBRO_API_URL}/vcn/conversations/${id}`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
        }
    });
}

export const createConversation = async (userInputs) => {
    const accessToken = await (loadExtensionStorageValue('jwt_access_token'));
    const inputs = {
        "patient": userInputs.patient,
        "members": userInputs.members
    };

    return await fetch(`${CEREBRO_API_URL}/vcn/conversations/`, {
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
    data.append('data', file, file.name);

    return await fetch(`${CEREBRO_API_URL}/vcn/files/`, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${accessToken}`
        },
        body: data,
    });
}

export const markFileAsUploaded = async (id) => {
    const accessToken = await (loadExtensionStorageValue('jwt_access_token'));
    return await fetch(`${CEREBRO_API_URL}/vcn/files/${id}/upload_to_echarts/`, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${accessToken}`
        },
    });
}

export const markFileAsDismissed = async (id) => {
    const accessToken = await (loadExtensionStorageValue('jwt_access_token'));
    return await fetch(`${CEREBRO_API_URL}/vcn/files/${id}/dismiss/`, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${accessToken}`
        },
    });
}