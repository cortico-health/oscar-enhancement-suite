import { CEREBRO_API_URL } from "../../Utils/VcnUtils";
import { loadExtensionStorageValue } from "../../Utils/Utils";

export const getPatients = async () => {
    const accessToken = await (loadExtensionStorageValue('jwt_access_token'));
    return await fetch(`${CEREBRO_API_URL}/vcn/patients/`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
        }
    });
}