import { app } from "./app.js";
import {connetDB}  from "./data/database.js";
connetDB()
app.listen(process.env.PORT, () => {
    console.log(`server start on ${process.env.PORT} in ${process.env.NODE_ENV} mode`)
   
})