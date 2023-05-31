import { Users } from "../models/users.js";
import bcrypt from 'bcrypt'
import { SetCokies } from '../utils/Featuer.js'
import ErrorHandler from '../middlewares/Error.js'
export const Register = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        let user = await Users.findOne({ email })
        if (user) return next(new ErrorHandler("User alredy exist", 404))
        const hashPassword = await bcrypt.hash(password, 10)
        user = await Users.create({
            name, email, password: hashPassword
        });
        SetCokies(user, res, "Registation Successfully", 201)

    } catch (error) {
        next(error)

    }
};
export const Login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await Users.findOne({ email }).select("+password");
        if (!user) return next(new ErrorHandler("invalid UserID", 404))
        const isMATCH = await bcrypt.compare(password, user.password);
        if (!isMATCH) return next(new ErrorHandler("invalid UserID", 404))
        SetCokies(user, res, "login Successfully", 200)
    } catch (error) {
        next(error)
    }
}
export const getUserDetals = async (req, res) => {
    res.status(200).json({
        success: true,
        user: req.user,
    })
};
export const Logout = async (req, res) => {
    res.status(200).cookie("token", "", {
        expires: new Date(Date.now()),
        sameSite: process.env.NODE_ENV === "Development" ? "lex" : "none",
        secure: process.env.NODE_ENV === "Development" ? false : true,
    }).json({
        success: true,
        message: "logout succussfully"
    })
};

