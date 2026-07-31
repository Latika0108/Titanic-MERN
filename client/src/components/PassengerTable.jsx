function PassengerTable({ passengers, deletePassenger }) {
  return (
    <table>

      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Class</th>
          <th>Fare</th>
          <th>Prediction</th>
          <th>Delete</th>
        </tr>
      </thead>

      <tbody>

        {passengers.map((passenger) => (

          <tr key={passenger._id}>

            <td>{passenger.name}</td>
            <td>{passenger.age}</td>
            <td>{passenger.sex}</td>
            <td>{passenger.pclass}</td>
            <td>{passenger.fare}</td>
            <td>{passenger.prediction}</td>

            <td>

              <button
                onClick={() =>
                  deletePassenger(passenger._id)
                }
              >
                Delete
              </button>

            </td>

          </tr>

        ))}

      </tbody>

    </table>
  );
}

export default PassengerTable;