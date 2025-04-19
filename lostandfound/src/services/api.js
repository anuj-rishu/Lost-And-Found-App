import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const getLostItems = async () => {
  const response = await axios.get(`${API_URL}/get-items?status=lost`);
  return response.data;
};

export const getItemById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};