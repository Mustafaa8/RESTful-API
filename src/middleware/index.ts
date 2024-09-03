import express from 'express'
import {get,merge} from 'lodash'
import { getUserBySessionToken } from '../models/user'

export const isAuthenticated = async (req:express.Request,res:express.Response,next:express.NextFunction)=>{
    try{
        const sessionToken = req.cookies['LoggedIn-Auth'];
        if(!sessionToken){
            return res.sendStatus(403)
        }
        const existingUser = await getUserBySessionToken(sessionToken)
        if(!existingUser){
            return res.sendStatus(403)
        }
        merge(req,{identity:existingUser})
        return next()
    } catch(err) {
        console.log(err)
        return res.sendStatus(400)
    }
}