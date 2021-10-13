import { getUsers, deleteUser, getAllUsers } from "../Service/api";
import { useEffect, useState } from "react";
import { Table, TableBody, TableRow, TableCell, TableHead, Button } from "@mui/material"
import { Link } from 'react-router-dom';

const Allusers = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        init();
    }, []);
    const init = async () => {
        var d = await getAllUsers();
        setUsers(d);
        console.log(d);
    }
    const deleteUserData = async (id) => {
        await deleteUser(id).then((res) => {
            prompt(res.data);
        });
        init();
    }
    if (users)
        return (
            <Table style={{
                width: '90%',
                margin: '100px 0 0 50px'
            }}>
                <TableHead>
                    <TableRow style={{ backgroundColor: 'black' }}>
                        <TableCell style={{ color: 'white', fontSize: '20px' }}>ID</TableCell>
                        <TableCell style={{ color: 'white', fontSize: '20px' }}>NAME</TableCell>
                        <TableCell style={{ color: 'white', fontSize: '20px' }}>USERNAME</TableCell>
                        <TableCell style={{ color: 'white', fontSize: '20px' }}>EMAIL</TableCell>
                        <TableCell style={{ color: 'white', fontSize: '20px' }}>PHONE</TableCell>
                        <TableCell style={{ color: 'white', fontSize: '20px' }}></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        users.map((user) => (
                            <TableRow key={user._id} style={{
                                fontSize: 18
                            }
                            }>
                                <TableCell>{user._id}</TableCell>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.username}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.phone}</TableCell>
                                <TableCell>
                                    <Button color="primary" variant="contained" style={{ marginRight: 10 }} component={Link} to={`/edit/${user._id}`}>Edit</Button>
                                    <Button color="secondary" variant="contained" onClick={() => deleteUserData(user._id)}>Delete</Button>
                                </TableCell>
                            </TableRow>

                        ))
                    }
                </TableBody>
            </Table>
        );
}

export default Allusers;