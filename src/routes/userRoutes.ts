import express from 'express';
import {getAlluser, createUser, updateUser, deleteUser} from "../controllers/userController";
import {body, validationResult} from 'express-validator';

const router = express.Router();

router.get("/user",getAlluser);

router.post("/user",[
    body('name').isLength({min: 5}),
    body('email').isEmail().withMessage('Please Enter a valid email')
], createUser);

router.put("/user/:id", updateUser);

router.delete("/user/:id", deleteUser);

export default router;
