function PassengerForm({
  formData,
  handleChange,
  savePassenger,
}) {
  return (
    <div className="form-container">

      <input
        type="text"
        name="name"
        placeholder="Passenger Name"
        value={formData.name}
        onChange={handleChange}
      />

      <input
        type="number"
        name="age"
        placeholder="Age"
        value={formData.age}
        onChange={handleChange}
      />

      <select
        name="sex"
        value={formData.sex}
        onChange={handleChange}
      >
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      <input
        type="number"
        name="pclass"
        placeholder="Passenger Class"
        value={formData.pclass}
        onChange={handleChange}
      />

      <input
        type="number"
        name="fare"
        placeholder="Fare"
        value={formData.fare}
        onChange={handleChange}
      />

      <button onClick={savePassenger}>
        Save Passenger
      </button>

    </div>
  );
}

export default PassengerForm;