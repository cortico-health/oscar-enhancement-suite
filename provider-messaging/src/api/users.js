import axios from "./axios";

export const getUserData = async () => {
    return await axios.get(`/vcn/user/`);
}

export const getUsersData = async () => {
    return await axios.get(`/vcn/users/`);
}

export const updateProfile = async (inputs) => {
    return await axios.patch(`/vcn/profile/`, inputs, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}