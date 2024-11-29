import axios from "axios";

export const addCategory = async (data: { name: string }) => {
  try {
    const response = await axios.post("http://localhost:7000/categories", data);
    console.log("Added Category:", response.data); // Debug response
    return response.data;
  } catch (error) {
    console.error("Error adding category:", error);
    throw error;
  }
};
