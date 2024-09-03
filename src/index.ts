require('dotenv').config()
import express from "express";
import cookieParser from 'cookie-parser'
import cors from 'cors'
import compression from "compression";
import morgan from 'morgan'
import {connection} from './db/dbConn'
import router from './routes/index'
const app = express()
// Logger
app.use(morgan('dev'))
// CORS

// Middlewares
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser())
app.use(compression())

connection.then(()=> console.log("Connected Successfully")).catch((err)=>{console.log(err)})

app.use('/',router())
// Port listening
app.listen(3000,()=>{console.log("http://localhost:3000")})

