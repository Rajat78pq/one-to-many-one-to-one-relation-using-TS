import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import express from 'express';
import {body, validationResult} from 'express-validator';

const app = express()

const Prisma = new PrismaClient();

app.use(express.json())

const PORT = 3000;

app.listen(PORT, ()=>{
    console.log('🚀 run on 3000');
});


//Read Data of User table
app.get("/user", async(req, res)=>{
    const allUser = await Prisma.user.findMany();
    res.json(allUser);
});

//Create the data 
app.post("/user",body('name').isLength({min : 5}),body('email').isEmail().withMessage('Please enter a valid email'), async(req, res)=>{
    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({error: error.array()});
    }
    const newUser = await Prisma.user.create({data: req.body});
    res.json(newUser);
})

//Update the Data
app.put("/user/:id", async(req, res)=>{
    const id = parseInt(req.params.id);
    const newName = req.body.name;
    const newEmail = req.body.email;
    const UpdateUser = await Prisma.user.update({
        where:{id: id},
        data:{
            name: newName,
            email: newEmail
        }
    });
    res.json(UpdateUser);
});

//Delete the Data
app.delete("/user/:id", async(req, res)=>{
    const id = parseInt(req.params.id);
    const deleteData = await Prisma.user.delete({
        where:{id: id}
    });
    res.json(deleteData);
});



//Read the data from the video table
app.get('/video', async(req, res)=>{
    const allVideo = await Prisma.video.findMany();
    res.json(allVideo);
});

//create the data
app.post('/video', async(req, res)=>{
    const newVideo = await Prisma.video.create({data: req.body});
    res.json(newVideo);
});

//update the data
app.put('/video/:id', async(req, res)=>{
    const id = parseInt(req.params.id);
    const newUrl = req.body.url;
    const newVideoId = parseInt(req.body.videoId);
    const UpdateVideo = await Prisma.video.update({
        where:{id: id},
        data:{
            url: newUrl,
            videoId: newVideoId
        }
    });
    res.json(UpdateVideo);
});

//Delete the Data
app.delete('/video/:id', async(req, res)=>{
    const id = parseInt(req.params.id);
    const deleteVideo = await Prisma.video.delete({
        where:{id: id}
    });
    res.json(deleteVideo);
});




//Read the data from Tag table
app.get('/tag', async(req, res)=>{
    const tags = await Prisma.tag.findMany();
    res.json(tags);
});

//create the data 
app.post('/tag', body('Description').isLength({min:10}), async(req, res)=>{
    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({error: error.array()});
    }
    const newTag = await Prisma.tag.create({data: req.body});
    res.json(newTag);
})

//update the data 
app.put('/tag/:id', async(req, res)=>{
    const Id = req.params.id
    const newDes = req.body.Description;
    body('Description').isLength({min:10}).withMessage('Write the long Description')
    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({error: error.array()});
    }
    const Updatetags = await Prisma.tag.update({
        where:{id: Id},
        data:{Description: newDes}
    });
});

//Delete the data
app.delete("/tag/:id", async(req, res)=>{
    const id = req.params.id;
    const Deletetag = await Prisma.tag.delete({
        where:{id: id}
    });
});



//Read the videoTag
app.get('/videoTag', async(req, res)=>{
    const allVideoTag = await Prisma.videoTag.findMany();
    res.json(allVideoTag);
});

//Create the VideoTag
app.post('/videoTag', async(req, res)=>{
    const newvideoTag = await Prisma.videoTag.create({data:req.body});
    res.json(newvideoTag);
})

//update the videoTag
app.put('/videoTag/:id', async(req, res)=>{
    const id = parseInt(req.params.id);
    const newVideoId = req.body.VideoId;
    const newtagId = req.body.TagId;
    const UpdateVideoTag = await Prisma.videoTag.update({
        where:{id: id},
        data:{
            VideoId: parseInt(newVideoId),
            TagId: newtagId
        }
    });
    res.json(UpdateVideoTag);
});

//Delete the videoTag
app.delete('/videoTag/:id', async(req, res)=>{
    const id = parseInt(req.params.id);
    const DeleteVideoTag = await Prisma.videoTag.delete({
        where:{id: id}
    });
    res.json(DeleteVideoTag);
});