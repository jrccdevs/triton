import axios from "axios";

const API_URL = "http://localhost:5000"; // Cambia al host de tu API si es necesario

export const createOrder = async () => {
  try {
    const response = await axios.post(`${API_URL}/create-order`);
    return response.data;
  } catch (error) {
    console.error("Error creating order:", error);
    throw error;
  }
};