import { cerebroURL } from "../../Utils/VcnUtils";

export const getChatMessageData = async (id) => {
    return await fetch(`${cerebroURL}/vcn/chat-messages/${id}/`,{
        headers: {
            "Content-Type": "application/json"
        }
    });
}

export const getConversationsList = async () => {
    return await fetch(`${cerebroURL}/vcn/conversations/`,{
        headers: {
            "Content-Type": "application/json"
        }
    });
}

export const createConversation = async (inputs) => {
    const inputs = {
        "patient": inputs.patient.id,
        "members": inputs.members
    };

    return await fetch('/vcn/conversations/',{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
    });
}