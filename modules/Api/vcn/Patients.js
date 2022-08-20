import { cerebroURL } from "../../Utils/VcnUtils";

export const getPatients = async () => {
    return await fetch(`${cerebroURL}/vcn/patients/`,{
        headers: {
            "Content-Type": "application/json"
        }
    });
}