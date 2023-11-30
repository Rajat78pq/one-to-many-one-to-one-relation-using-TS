import express from 'express';
import {getAllVideoTag, createVideoTag, updateVideoTag, deleteVideoTag} from "../controllers/videoTagController";
import {body, validationResult} from 'express-validator';

const router = express.Router();

router.get("/videoTag",getAllVideoTag);

router.post("/videoTag", createVideoTag);

router.put("/videoTag/:id", updateVideoTag);

router.delete("/videoTag/:id", deleteVideoTag);

export default router;