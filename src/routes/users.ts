import { getAllUser,deleteUser,updateUser } from "../controllers/user";
import { isAuthenticated } from "../middleware/index";
import express from 'express'

export default (router:express.Router)=>{
    router.get('/users',isAuthenticated,getAllUser)
    router.delete('/users/delete/:id',isAuthenticated,deleteUser)
    router.patch('/users/patch/:id',isAuthenticated,updateUser)
} 