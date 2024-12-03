import express from 'express';
const router = express.Router();
import User from '../schema/User.schema.js';

router.get('/read', async (req, res) => {
    try {
        const id = req.query.id;
        const response = await User.findById(id);
        if(!response){
            return res.status(404).send("user is not found");
        }

        res.status(200).json({response});
    } catch (e) {
        console.log(`Error is found ${e}`);
        res.status(404).send("Error is found");
    }
})

router.post('/create', async (req, res) => {
    try {
        // todo for post
        const data = req.body;
        const response = new User(data);
        const taskSave = await response.save();
        res.status(200).json(taskSave);
    }
    catch (e) {
        console.log(`Error is found ${e}`);
        res.status(404).send(e);
    }
})

router.put('/update', async (req, res) => {
    try{
        const data = req.body;
        const id = req.query.id;
        const response = await User.findByIdAndUpdate(id, data, { new: true });
        console.log(response);
        if(!response){
            return res.status(404).send("User is missing");
        }
        res.status(200).json({response});
    }catch(e){
        console.log(`Error is found ${e}`);
        res.status(404).send("Error is found");
    }
})

router.delete('/delete', async (req, res) => {
    try{
        const id = req.query.id;
        const response = await User.findByIdAndDelete(id);
        console.log(response);
        if(!response){
            return res.status(404).send("User is not found");
        }
        res.status(200).send("User is Deleted");
    }catch(e){
        console.log(`Error is found ${e}`);
        res.status(404).send("Error is found");
    }
})

export default router;