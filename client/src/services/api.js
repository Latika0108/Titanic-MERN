const API_URL = "http://localhost:5050/api/passengers";

// Get all passengers
export const getPassengers = async () => {
  const response = await fetch(API_URL);
  return await response.json();
};

// Add passenger
export const addPassenger = async (passenger) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(passenger),
  });

  return await response.json();
};

// Delete passenger
export const deletePassenger = async (id) => {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
};