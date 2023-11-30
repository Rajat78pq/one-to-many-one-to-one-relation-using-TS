import express from 'express';
import {getAllTag, createTag, updateTag, deleteTag} from "../controllers/tagController";
import {body, validationResult} from 'express-validator';

const router = express.Router();

router.get("/tag",getAllTag);

router.post("/tag", createTag);

router.put("/tag/:id", updateTag);

router.delete("/tag/:id", deleteTag);

export default router;