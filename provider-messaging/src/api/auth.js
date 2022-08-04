import axios from "./axios";

export const login = async(email, password) => {
    return axios.post('/token/', {
        username: email,
        password: password
    });
}