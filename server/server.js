/* eslint-disable no-undef */
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose"; 
import cors from "cors";
import UserRoutes from "./routes/UserRoutes.js"; 
import JobRoutes from "./routes/JobRoutes.js";
import path from 'path';
import { fileURLToPath } from 'url';
import ProductRoutes from './routes/ProductRoutes.js';


import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

const app = express();
app.use(cors({
  origin: ['http://localhost:5173'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

// Get dirname equivalent in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));


app.use('/users', UserRoutes);
app.use('/jobs', JobRoutes);
app.use('/products', ProductRoutes);


  
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
