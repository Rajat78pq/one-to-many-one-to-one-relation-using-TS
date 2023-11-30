import {PrismaClient} from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

//get the data
export const getAllVideoTag = async (req:Request, res:Response)=>{
    const allvideo = await prisma.videoTag.findMany();
    res.json(allvideo);
}

//create the data
export const createVideoTag = async (req:Request, res:Response)=>{
    const createvideo = await prisma.videoTag.create({data:req.body})
    res.json(createvideo);
}

//update the data
export const updateVideoTag = async (req:Request, res:Response)=>{
    const id = req.params.id
    const newVideoId = req.body.VideoId;
    const newtagId = req.body.TagId;;
    const updatevideoTag = await prisma.videoTag.update({
        where:{id: parseInt(id)},
        data:{
            VideoId: parseInt(newVideoId),
            TagId: newtagId
        }
    });
    res.json(updatevideoTag);
}

//delete data
export const deleteVideoTag =async (req:Request, res:Response) => {
    const id = req.params.id;
    const deletevideoTag = await prisma.videoTag.delete({
        where:{id:parseInt(id)}
    })    ;
    res.json(deletevideoTag);
}