import { useEffect, useState } from "react";
import { fetchAnimals } from "../pages/api/animals";

const AnimalList = () => {
  const [animals, setAnimals] = useState<any[]>([]);

  useEffect(() => {
    const getAnimals = async () => {
      const data = await fetchAnimals();
      setAnimals(data);
    };
    getAnimals();
  }, []);

  return (
    <div>
      <h3>Animals</h3>
      <div style={{ display: "flex", gap: "10px" }}>
        {animals.map((animal, index) => (
          <div key={index} style={{ textAlign: "center" }}>
            <img
              src={animal.image}
              alt={animal.Name}
              style={{ width: 100, height: 100 }}
            />
            <p>{animal.Name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimalList;
