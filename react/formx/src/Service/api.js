import axios from 'axios';

const url = 'http://localhost:3003/users';

export const getUsers = async() => {
    return await axios.get(url);
}

export const deleteUser = async() => {
    return await axios.delete(url);
}

export const updateUser = async() => {
    return await axios.put(url);
}


export const addUser = async(user) => {
    return await axios.post(url,user);
}