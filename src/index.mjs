import express from 'express';
import mongoose from 'mongoose';
import router from './routs/routes.mjs';
import cors from 'cors';

const app = express();
app.use(express.json())

mongoose.connect('mongodb+srv://pintupk:hppk12pintu@cluster0.z14ijp4.mongodb.net/signup')
.then(()=> console.log("database connected successful"))
.catch((err)=> console.log(err.message))

app.use('/', router)

app.listen(8000, () => console.log("serveer starteed on port :", 8000))