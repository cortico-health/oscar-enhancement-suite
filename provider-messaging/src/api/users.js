import axios from "./axios";

export const getUserData = async() => {
    return await axios.get(`/vcn/user`);
}

export const updateUser = async(inputs) => {
    /* Can be improved I think */
    /* TODO (Justin or Dwight): Change the URL into url for user update */
    return await axios.patch(``, JSON.stringify(inputs), {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}