import express from "express";
import {
  addPassenger,
  getPassengers,
  deletePassenger,
} from "../controllers/passengerController.js";

const router = express.Router();

// Add a passenger
router.post("/", addPassenger);

// Get all passengers
router.get("/", getPassengers);

// Delete a passenger
router.delete("/:id", deletePassenger);

export default router;