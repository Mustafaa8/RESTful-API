import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    authentication:{
        password:{
            type:String,
            required:true,
            select:false
        },
        salt:{
            type:String,
            select:false
        },
        sessionToken:{
            type:String,
            select:false
        }
}
})

export const User =  mongoose.model('User',userSchema)

export const getUsers =  () => { return  User.find({}) }
export const getUserByEmail =  (email:string)=> { return  User.findOne({email:email}) }
export const getUserBySessionToken =  (SessionToken:string)=>{ return  User.findOne({'authentication.sessionToken':SessionToken}) }
export const getUserById =  (id:string)=>{ return  User.findById(id) }
export const createUser =  (values: Record<string,any>) =>{  User.create(values).then((user)=>{ user.toObject()}) }
export const deleteUserById =  (id:string)=>{  User.findByIdAndDelete(id) }
export const updateUserById =  (id:string,values: Record<string,any>)=>{  User.findByIdAndUpdate(id,values) }
 