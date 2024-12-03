import express from 'express';
import mongoose from 'mongoose';

import dotenv from 'dotenv'
dotenv.config();

const port = process.env.PORT || 3000;
const mongo_url = process.env.MONGO_DB;

const app = express();
app.use(express.json());

mongoose.connect(mongo_url);

import task from './route/task.route.js';
app.use('/task', task);

import User from './route/user.route.js';
app.use('/user', User);

app.listen(port);