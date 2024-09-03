import mongoose from "mongoose";


export const connection =  mongoose.connect(`${process.env.CONN_URL}`)
                

