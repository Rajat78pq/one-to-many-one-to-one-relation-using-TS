import express from 'express';
import userRoutes from './routes/userRoutes';
import videoRoutes from './routes/videoRoutes';
import videoTagRoutes from './routes/videoTagRoutes';
import tagRoutes from './routes/tagRoutes';

const app = express();

app.use(express.json());

app.use(userRoutes);
app.use(videoRoutes);
app.use(videoTagRoutes);
app.use(tagRoutes);

export default app;