import express from 'express';
const router = express.Router();
import mongoose from "mongoose";
import Product from '../Models/ProductSchema.mjs';

const collection =
    router.get('/', async (req, res) => {
        try {
            const data = await Product.find({});
            if (!data) {
                return res.sendStatus(404);
            }
            res.json(data);
        } catch (err) {
            console.log(err.message);
            res.sendStatus(500);
        }
    });

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const data = await Product.findById(id);
        if (!data) {
            return res.sendStatus(404);
        }
        res.json(data);
    } catch (err) {
        console.log(err.message);
        res.sendStatus(500);
    }
});

export default router;
