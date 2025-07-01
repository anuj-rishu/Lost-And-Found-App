import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL

export const getLostItems = async () => {
  try {
    const response = await axios.get(`${API_URL}/get-items?status=lost`);
    // Ensure we always return an array
    return Array.isArray(response.data) ? response.data : response.data.items || [];
  } catch (error) {
    console.error("Error fetching items:", error);
    return [];
  }
};

export const getItemById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching item:", error);
    throw error;
  }
};

export const reportLostItem = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/report-item`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error reporting item:", error);
    throw error;
  }
};