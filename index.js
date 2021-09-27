import express from 'express';
import mongoose from 'mongoose';
import route from './route/routes.js';

const app = express();


app.use('/users',route);

const PORT = 3000;
const URL = 'mongodb://user:123@cluster0-shard-00-00.vnfe8.mongodb.net:27017,cluster0-shard-00-01.vnfe8.mongodb.net:27017,cluster0-shard-00-02.vnfe8.mongodb.net:27017/Cluster0?ssl=true&replicaSet=atlas-eg6j6l-shard-0&authSource=admin&retryWrites=true&w=majority';

mongoose.connect(URL,{ useNewUrlParser: true,useUnifiedTopology:true }).then(()=>{
    app.listen(PORT,() =>{ 
        console.log(`Running succesfully on ${PORT}`);
        });
}).catch(err =>{
    console.log("didnt connect");
})
