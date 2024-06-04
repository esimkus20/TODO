import express from "express";
import taskRouter from "./taskRouter.js";

const router = express.Router();

router.use("task", taskRouter);

export default router;
