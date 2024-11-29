import axios from "axios";

export const fetchAnimals = async () => {
  try {
    const response = await axios.get("http://localhost:7000/animals");
    console.log("Fetched Animals:", response.data); // Debug response
    return response.data;
  } catch (error) {
    console.error("Error fetching animals:", error);
    throw error;
  }
};

export const addAnimal = async (data: { Name: string; image: string }) => {
  try {
    const response = await axios.post("http://localhost:7000/animals", data);
    console.log("Added Animal:", response.data); // Debug response
    return response.data;
  } catch (error) {
    console.error("Error adding animal:", error);
    throw error;
  }
};
