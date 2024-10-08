import express, { Express } from "express";
import { Connection } from "./DBconfig/ConnexionDB";
import cors from "cors";
import authRoutes from './routes/authRoutes'; // Importer les routes d'authentification
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS Policy
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
}));

// Register authentication routes
app.use('/api', authRoutes); // Toutes les routes d'authentification seront accessibles sous /api


// Start server
const PORT = process.env.PORT || 3050;

app.listen(PORT, async (): Promise<void> => {
    console.log(`Server is running on port ${PORT}`);
    await Connection();
});
