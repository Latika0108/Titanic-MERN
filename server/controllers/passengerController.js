import Passenger from "../models/Passenger.js";
import { exec } from "child_process";

export const addPassenger = (req, res) => {
  const { name, pclass, sex, age, fare } = req.body;

  const pythonCommand =
    process.platform === "win32" ? "python" : "python3";

  exec(
    `${pythonCommand} predict.py ${pclass} ${sex} ${age} ${fare}`,
    async (error, stdout) => {
      if (error) {
        console.log(error);
        return res.status(500).json({
          message: "Prediction Failed",
        });
      }

      try {
        const passenger = new Passenger({
          name,
          pclass,
          sex,
          age,
          fare,
          prediction: stdout.trim(),
        });

        await passenger.save();

        res.status(201).json(passenger);
      } catch (err) {
        res.status(500).json({
          message: err.message,
        });
      }
    }
  );
};
export const getPassengers = async (req, res) => {
  try {
    const passengers = await Passenger.find();
    res.json(passengers);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

export const deletePassenger = async (req, res) => {
  try {
    await Passenger.findByIdAndDelete(req.params.id);

    res.json({
      message: "Passenger Deleted Successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};