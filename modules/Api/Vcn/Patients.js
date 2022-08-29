import { cerebroURL } from "../../Utils/VcnUtils";
import { loadExtensionStorageValue } from "../../Utils/Utils";

export const getPatients = async () => {
    const accessToken = await (loadExtensionStorageValue('jwt_access_token'));
    return await fetch(`${cerebroURL}/vcn/patients/`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
        }
    });
}