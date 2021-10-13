import express, { application } from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import Routes from './route/routes.js';

const app = express();
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/users/', Routes);

const URL = 'mongodb://abhi:1234@cluster0-shard-00-00.vnfe8.mongodb.net:27017,cluster0-shard-00-01.vnfe8.mongodb.net:27017,cluster0-shard-00-02.vnfe8.mongodb.net:27017/Cluster0?ssl=true&replicaSet=atlas-eg6j6l-shard-0&authSource=admin&retryWrites=true&w=majority';
const PORT = process.env.PORT || '8000';
mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`))
}).catch((error) => {
    console.log('Error:', error.message)
})









