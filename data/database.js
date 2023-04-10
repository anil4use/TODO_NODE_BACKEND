import mongoose from 'mongoose'
export const connetDB=()=>{ mongoose.connect(process.env.MONGO_URI, {
    dbName: "backend_api"
}).then((e) => console.log(`database conntected ${e.connection.host}`))
    .catch((e) => console.log(e));
}