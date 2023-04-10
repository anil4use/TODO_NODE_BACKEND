import  express  from "express";
import { Newtask,getMyTask,UpdataTask,DeleteTask } from "../controllers/task.js";
import { isAuthendication, } from "../middlewares/auth.js";
 
const router = express.Router();

router.post("/new",isAuthendication, Newtask)
router.get("/my",isAuthendication, getMyTask)
router.put("/:id",isAuthendication,UpdataTask)
router.delete("/:id",isAuthendication,DeleteTask,
)

export default router
