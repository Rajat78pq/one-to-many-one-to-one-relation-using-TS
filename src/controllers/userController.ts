import {PrismaClient} from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

//get the data
export const getAlluser = async (req:Request, res:Response)=>{
    const alluser = await prisma.user.findMany();
    res.json(alluser);
}

//create the data
export const createUser = async (req:Request, res:Response)=>{
    const createuser = await prisma.user.create({data:req.body})
    res.json(createuser);
}

//update the data
export const updateUser = async (req:Request, res:Response)=>{
    const id = req.params.id
    const newName = req.body.name;
    const newEmail = req.body.email;
    const updateuser = await prisma.user.update({
        where:{id: parseInt(id)},
        data:{
            name:newName,
            email:newEmail
        }
    });
    res.json(updateuser);
}

//delete data
export const deleteUser =async (req:Request, res:Response) => {
    const id = req.params.id;
    const deleteuser = await prisma.user.delete({
        where:{id:parseInt(id)}
    })    ;
    res.json(deleteuser);
}