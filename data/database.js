import mongoose from 'mongoose'
export const connetDB=()=>{ mongoose.connect(process.env.MONGO_URI, {
    dbName: "backend_api"
}).then(() => console.log("database conntected "))
    .catch((e) => console.log(e));
}