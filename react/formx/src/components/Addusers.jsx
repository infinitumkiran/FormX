import react, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, Typography } from '@mui/material';
import { addUser } from '../Service/api';
import { useHistory } from 'react-router-dom';


const AddUser = () => {

    const [user, setUser] = useState({
        name: '',
        username: '',
        email: '',
        phone: ''
    });
    const { name, username, email, phone } = user;
    let history = useHistory();
    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const addUserDetails = async () => {
        await addUser(user).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.error(error);
        })
        history.push('./all');
    }

    return (
        <FormGroup style={{
            width: '50%',
            margin: '10% 0 0 25%',
        }}>
            <Typography variant="h4">Add User</Typography>
            <FormControl style={{ marginTop: '1%' }}>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" />
            </FormControl>
            <FormControl style={{ marginTop: '1%' }}>
                <InputLabel htmlFor="my-input">Username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='username' value={username} id="my-input" />
            </FormControl>
            <FormControl style={{ marginTop: '1%' }}>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input" />
            </FormControl>
            <FormControl style={{ marginTop: '1%' }}>
                <InputLabel htmlFor="my-input">Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phone' value={phone} id="my-input" />
            </FormControl>
            <FormControl style={{ marginTop: '1%' }}>
                <Button variant="contained" color="primary" onClick={(e) => { console.log(user); e.preventDefault(); addUserDetails(); }}>Add User</Button>
            </FormControl>
        </FormGroup>
    )
}

export default AddUser;