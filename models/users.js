import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name:  {
        type:String,
        required:true,
       
    },
    email: {
        type:String,
        required:true,
        unique:true,
    },
    password: {
        type:String,
        select:false ,
        required:true,
    },
    createOF:{
        type:Date,
        default:Date.now
    }
}); 
 export const Users = mongoose.model("Users", schema);
