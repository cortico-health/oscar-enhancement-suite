import { cerebroApiUrl } from "../../Utils/VcnUtils";
import { loadExtensionStorageValue } from "../../Utils/Utils";

export const getUserData = async () => {
    const accessToken = await (loadExtensionStorageValue('jwt_access_token'));
    return await fetch(`${cerebroApiUrl}/vcn/user/`,{
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
        }
    });
}

export const getUsersData = async () => {
    const accessToken = await (loadExtensionStorageValue('jwt_access_token'));
    return await fetch(`${cerebroApiUrl}/vcn/users/`,{
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
        }
    });
}

export const updateProfile = async (inputs) => {
    const accessToken = await (loadExtensionStorageValue('jwt_access_token'));
    return await fetch(`${cerebroApiUrl}/vcn/profile/`,{
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`
        },
        body: JSON.stringify(inputs),
    });
}