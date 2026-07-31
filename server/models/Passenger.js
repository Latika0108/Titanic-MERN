import mongoose from "mongoose";

const passengerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  pclass: {
    type: Number,
    required: true,
  },
  sex: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  fare: {
    type: Number,
    required: true,
  },
  prediction: {
    type: String,
    default: "Pending",
  },
});

export default mongoose.model("Passenger", passengerSchema);