import axios from 'axios';

const url = 'http://localhost:8000/users';


export const getAllUsers = async () => {
    let data = [];
    await axios.get(`${url}/`).then((response) => {
        for (var i in response.data) {
            data.push(response.data[i]);
        }
    }).catch((error) => { console.error(error) });;
    return data;
}
export const getUsers = async (id) => {
    console.log(id);
    id = id || '';
    return await axios.get(`${url}/${id}`);
}
export const deleteUser = async (id) => {
    return await axios.delete(`${url}/${id}`);
}

export const editUser = async (id, user) => {
    return await axios.put(`${url}/${id}`, user);
}


export const addUser = async (user) => {
    return await axios.post(`${url}/add`, user);
}