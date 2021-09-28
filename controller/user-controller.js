import { response } from "express"

export const getUsers = (request, resonse, next) =>{
    response.status(200).json("hello world");
}

export const addUsers = (request, resonse, next) =>{
    response.send.json("HHAHA");
}