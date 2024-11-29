import { useState } from "react";
import AnimalForm from "../components/AnimalForm";
import CategoryForm from "../components/CategoryForm";
import AnimalList from "../components/AnimalList";

const Home = () => {
  const [refresh, setRefresh] = useState(false);

  const refreshData = () => {
    setRefresh(!refresh);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Animal Management</h1>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <AnimalForm onAnimalAdded={refreshData} />
        <CategoryForm onCategoryAdded={refreshData} />
      </div>
      <AnimalList key={refresh.toString()} />
    </div>
  );
};

export default Home;
