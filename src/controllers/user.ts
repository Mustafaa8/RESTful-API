import express from "express";

import * as userFunc from '../models/user'

export const getAllUser = async(req:express.Request,res:express.Response) => {
    try{ 
    res.status(200).json(await userFunc.getUsers())
    } catch(err){
        console.log(err)
        return res.sendStatus(400)
    }
}
export const deleteUser = async (req:express.Request,res:express.Response) => {
    try{
        const id = req.params.id.toString()
        const deletedUser = await userFunc.User.findOneAndDelete({_id:id}) 
        res.status(200).json(deletedUser)
    } catch (err){
        console.log(err)
        return res.sendStatus(400)
    }
}
export const updateUser = async(req:express.Request,res:express.Response) => {
    try {
        const id = req.params.id
        const {username} = req.body
        if(!username) {
            return res.sendStatus(400)
        }
        const user = await userFunc.User.findByIdAndUpdate(id,{username:username})
        if(!user){
            return res.sendStatus(400)
        }
        res.status(200).json(user)
    } catch(err){
        console.log(err)
        return res.sendStatus(400)
    }
}