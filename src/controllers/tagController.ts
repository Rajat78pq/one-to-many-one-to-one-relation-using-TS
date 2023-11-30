import {PrismaClient} from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

//get the data
export const getAllTag = async (req:Request, res:Response)=>{
    const allTag = await prisma.tag.findMany();
    res.json(allTag);
}

//create the data
export const createTag = async (req:Request, res:Response)=>{
    const createTag = await prisma.tag.create({data:req.body})
    res.json(createTag);
}

//update the data
export const updateTag = async (req:Request, res:Response)=>{
    const Id = req.params.id
    const newDes = req.body.Description;
    const newtagId = req.body.TagId;
    const updateTag = await prisma.tag.update({
        where:{id: Id},
        data:{Description: newDes}
    });
    res.json(updateTag);
}

//delete data
export const deleteTag =async (req:Request, res:Response) => {
    const id = req.params.id;
    const deleteTag = await prisma.tag.delete({
        where:{id: id}
    })    ;
    res.json(deleteTag);
}