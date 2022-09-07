import { CEREBRO_API_URL } from "../../Utils/VcnUtils";
import { loadExtensionStorageValue } from "../../Utils/Utils";

export const getUserData = async () => {
    const accessToken = await (loadExtensionStorageValue('jwt_access_token'));
    return await fetch(`${CEREBRO_API_URL}/vcn/user/`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
        }
    });
}

export const getUsersData = async () => {
    const accessToken = await (loadExtensionStorageValue('jwt_access_token'));
    return await fetch(`${CEREBRO_API_URL}/vcn/users/`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
        }
    });
}

export const updateProfile = async (inputs) => {
    const accessToken = await (loadExtensionStorageValue('jwt_access_token'));
    return await fetch(`${CEREBRO_API_URL}/vcn/profile/`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`
        },
        body: JSON.stringify(inputs),
    });
}