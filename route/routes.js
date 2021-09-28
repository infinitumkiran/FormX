import express from 'express';
import {getUsers,addUsers} from '../controller/user-controller.js';

const route = express.Router();

route.get('/',getUsers);
route.post('/add',addUsers);


export default route;