import axios from 'axios';
// --------------------CRUD DE TODOS LOS PRODUCTOS------------------------------
export const getProductosRequest = async () => {
  try {
    const response = await axios.get('http://localhost:5000/productos');
    return response;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};