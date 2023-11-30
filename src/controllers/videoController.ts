import {PrismaClient} from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

//get the data
export const getAllVideo = async (req:Request, res:Response)=>{
    const allvideo = await prisma.video.findMany();
    res.json(allvideo);
}

//create the data
export const createVideo = async (req:Request, res:Response)=>{
    const createvideo = await prisma.video.create({data:req.body})
    res.json(createvideo);
}

//update the data
export const updateVideo = async (req:Request, res:Response)=>{
    const id = req.params.id
    const newUrl = req.body.url;
    const newVId = req.body.videoId;
    const updatevideo = await prisma.video.update({
        where:{id: parseInt(id)},
        data:{
            url:newUrl,
            videoId:newVId
        }
    });
    res.json(updatevideo);
}

//delete data
export const deleteVideo =async (req:Request, res:Response) => {
    const id = req.params.id;
    const deletevideo = await prisma.video.delete({
        where:{id:parseInt(id)}
    })    ;
    res.json(deletevideo);
}