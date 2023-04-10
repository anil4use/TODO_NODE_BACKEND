import express from 'express'
import {Register,Logout,Login,getUserDetals} from '../controllers/user.js'
import { isAuthendication } from '../middlewares/auth.js';
const router = express.Router();
router.post("/register",Register);
router.post("/login",Login);
router.get("/logout",Logout);
router.get("/me",isAuthendication,getUserDetals);

export default router