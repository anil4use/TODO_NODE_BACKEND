import mongoose from "mongoose";

const schema = new mongoose.Schema({
    tittle: {
        type:String,
        required:true 
    },
    description: {
        type:String,
        required:true ,
    },
    iscompleted:{
        type:Boolean,
        default:false,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    createOF:{
        type:Date,
        default:Date.now
    }
}); 
 export const Task = mongoose.model("Task", schema);
