import express from 'express';
import {getAllVideo, createVideo, updateVideo, deleteVideo} from "../controllers/videoController";
import {body, validationResult} from 'express-validator';

const router = express.Router();

router.get("/video",getAllVideo);

router.post("/video", createVideo);

router.put("/video/:id", updateVideo);

router.delete("/video/:id", deleteVideo);

export default router;