import express from 'express';
import {getUsers,addUsers} from '../controller/user-controller.js';

const route = express.Router();

route.get('/',getUsers);
route.add('/add',addUsers);


export default route;