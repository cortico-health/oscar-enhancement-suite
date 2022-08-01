import { observer } from 'mobx-react-lite';
import React from 'react'
import { useStore } from '../state';

const useAuth = () => {

    const login = async(email, password) => {
        return await postLogin(email, password);
    }

    return {
        login
    }
}

export default useAuth