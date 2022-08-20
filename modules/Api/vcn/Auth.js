import { cerebroURL } from "../../Utils/VcnUtils";

export const login = async (email,password) => {
    const loginInput = {
        email: email,
        password: password
    };

    return fetch(`${cerebroURL}/token/`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(loginInput),
    });
}