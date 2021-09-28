import react, { useState,useEffect } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, Typography } from '@mui/material';
import { getUsers, editUser } from '../Service/api';
import { useHistory,useParams } from 'react-router-dom';

const initialValue = {
    name: '',
    username: '',
    email: '',
    phone: ''
}

const EditUser = () => {
    const [user, setUser] = useState(initialValue);
    const { name, username, email, phone } = user;
    const { id } = useParams();
    let history = useHistory();

    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value})
    }

    useEffect(() => {
        loadUserDetails();
    }, []);

    const loadUserDetails = async() => {
        const response = await getUsers(id);
        setUser(response.data);
    }

    const editUserDetails = async() => {
        
        const response = await editUser(id, user);
        history.push('/all');
    }   

    return (
        <FormGroup style={{
            width: '50%',
            margin: '10% 0 0 25%',
            }}>
            <Typography variant="h4">Edit User</Typography>
            <FormControl style={{marginTop: '1%'}}>
                <InputLabel htmlFor="${user.id}">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" />
            </FormControl>
            <FormControl style={{marginTop: '1%'}}>
                <InputLabel htmlFor="my-input">Username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='username' value={username} id="my-input" />
            </FormControl>
            <FormControl style={{marginTop: '1%'}}>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input"/>
            </FormControl>
            <FormControl style={{marginTop: '1%'}}>
                <InputLabel htmlFor="my-input">Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phone' value={phone} id="my-input" />
            </FormControl>
            <FormControl style={{marginTop: '1%'}}>
                <Button variant="contained" color="primary" onClick={() => editUserDetails()}>Edit User</Button>
            </FormControl>
        </FormGroup>
    )
}

export default EditUser;