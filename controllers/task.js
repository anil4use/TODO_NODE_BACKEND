import ErrorHandler from "../middlewares/Error.js";
import { Task } from "../models/task.js";
export const Newtask = async (req, res) => {
    const { tittle, description } = req.body;
    await Task.create({
        tittle, description,
        user: req.user
    });
    res.status(201).json({
        succuss: true,
        message: "task Added Succesfullly"
    });
};
export const getMyTask = async (req, res) => {
    const userid = req.user._id;
    const task = await Task.find({ user: userid })
    res.status(201).json({
        succuss: true,
        task,
    });
};
export const UpdataTask = async (req, res,next) => {
    const { id } = req.params;
    const task = await Task.findById(id)
    if (!task)return next(new ErrorHandler("Task not found",404))
    task.iscompleted = !task.iscompleted;
    await task.save();

    res.status(200).json({
        succuss: true,
        message: "updataed succesfully"
    });
};
export const DeleteTask = async (req, res,next) => {
    const { id } = req.params;
    const task = await Task.findById(id)
    if (!task)return next(new ErrorHandler("Task not found",404))
    await task.deleteOne()
    res.status(200).json({
        succuss: true,
        message: "Delete succesfully"
    });
};