import { cerebroURL,getAccessToken } from "../../Utils/VcnUtils";

export const getUserData = async () => {
    return await fetch(`${cerebroURL}/vcn/user/`,{
        headers: {
            "Content-Type": "application/json"
        }
    });
}

export const getUsersData = async () => {
    return await fetch(`${cerebroURL}/vcn/users/`,{
        headers: {
            "Content-Type": "application/json"
        }
    });
}

export const updateProfile = async (inputs) => {
    return await fetch(`${cerebroURL}/vcn/profile/`,{
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getAccessToken()}`,
        },
        body: JSON.stringify(inputs),
    });
}