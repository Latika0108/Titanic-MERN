import { useState, useEffect } from "react";
import PassengerForm from "./components/PassengerForm";
import PassengerTable from "./components/PassengerTable";
import {
  getPassengers,
  addPassenger,
  deletePassenger as removePassenger,
} from "./services/api";

import "./App.css";

function App() {
  const [passengers, setPassengers] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    pclass: "",
    sex: "",
    age: "",
    fare: "",
  });

  // Load passengers when page opens
  useEffect(() => {
    loadPassengers();
  }, []);

  const loadPassengers = async () => {
    try {
      const data = await getPassengers();
      setPassengers(data);
    } catch (error) {
      console.log(error);
    }
  };

  // Handle form inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Save passenger
  const savePassenger = async () => {
    if (
      !formData.name ||
      !formData.age ||
      !formData.sex ||
      !formData.pclass ||
      !formData.fare
    ) {
      alert("Please fill all fields.");
      return;
    }

    try {
      await addPassenger(formData);

      alert("Passenger Saved Successfully!");

      setFormData({
        name: "",
        pclass: "",
        sex: "",
        age: "",
        fare: "",
      });

      loadPassengers();
    } catch (error) {
      console.log(error);
      alert("Error saving passenger.");
    }
  };

  // Delete passenger
  const deletePassenger = async (id) => {
    if (!window.confirm("Delete this passenger?")) return;

    try {
      await removePassenger(id);
      loadPassengers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
  <div className="container">

    <h1>Titanic Survival Prediction</h1>

    <PassengerForm
      formData={formData}
      handleChange={handleChange}
      savePassenger={savePassenger}
    />

    <h2>Passenger Records</h2>

    <PassengerTable
      passengers={passengers}
      deletePassenger={deletePassenger}
    />

    {/* Decision Tree Visualization */}
    <div style={{ marginTop: "40px", textAlign: "center" }}>
      <h2>Trained Decision Tree</h2>

      <img
        src="http://localhost:5050/images/decision_tree.png"
        alt="Decision Tree"
        style={{
          width: "100%",
          maxWidth: "900px",
          marginTop: "15px",
          border: "1px solid #ccc",
          borderRadius: "8px",
        }}
      />
    </div>

  </div>
);
}

export default App;