import { getUsers,deleteUser } from "../Service/api";
import { useEffect,useState } from "react";
import { Table,TableBody,TableRow,TableCell,TableHead, } from "@mui/material"

const Allusers = () => {

    const [users,setUsers]=useState([]);

    useEffect(() => {
        getAllUsers();
    },[])

    const deleteUserData = async (id) => {
        await deleteUser(id);
        getAllUsers();
    }

    const getAllUsers = async() => {

        const response = await getUsers();
        console.log(response.data);
        setUsers(response.data);
    }

    return(
        <Table style={{
            width: '90%',
            margin: '50px 0 0 50px'
        }}>
            <TableHead>
                <TableRow style={ {backgroundColor: 'black'} }>
                <TableCell style={{color: 'white',fontSize: '20px'}}>ID</TableCell>
                <TableCell style={{color: 'white',fontSize: '20px'}}>NAME</TableCell>
                <TableCell style={{color: 'white',fontSize: '20px'}}>USERNAME</TableCell>
                <TableCell style={{color: 'white',fontSize: '20px'}}>EMAIL</TableCell>
                <TableCell style={{color: 'white',fontSize: '20px'}}>PHONE</TableCell>
                </TableRow>   
            </TableHead>
            <TableBody>
                {
                    users.map((user) =>(
                        <TableRow style={{
                            '& > *': {
                                fontSize: 18
                            }
                        }}>
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                        </TableRow>

                    ))
                }
            </TableBody>
        </Table>
    );
}

export default Allusers;