import path from "path";
import { fileURLToPath } from "url";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import passengerRoutes from "./routes/passengerRoutes.js";


dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use("/images", express.static(path.join(__dirname, "images")));
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});
app.use("/api/passengers", passengerRoutes);

// Test Route
app.get("/", (req, res) => {
    console.log("Root route was hit");
    res.send("Titanic MERN Backend Running 🚢");
});
// MongoDB Connection
mongoose
.connect(process.env.MONGO_URI)
.then(() => {
    console.log("✅ MongoDB Connected");
})
.catch((err) => {
    console.log(err);
});

// Start Server
const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});