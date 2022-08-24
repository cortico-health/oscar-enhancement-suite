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

    return await fetch('/vcn/conversations/',{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${getAccessToken}`,
        },
        body: JSON.stringify(inputs),
    });
}