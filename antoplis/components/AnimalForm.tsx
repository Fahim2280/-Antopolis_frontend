import { useState } from "react";
import { addAnimal } from "../pages/api/animals";

const AnimalForm = ({ onAnimalAdded }: { onAnimalAdded: () => void }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState<File | null>(null);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!name || !image) return alert('Please fill all fields');

  const reader = new FileReader();
  reader.onloadend = async () => {
    try {
      const base64Image = reader.result?.toString();
      await addAnimal({ Name: name, image: base64Image || '' });
      alert('Animal added successfully!');
      onAnimalAdded();
      setName('');
      setImage(null);
    } catch (error) {
      console.error('Error adding animal:', error);
      alert('Failed to add animal.');
    }
  };
  reader.readAsDataURL(image);
};


  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Animal Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="file"
        onChange={(e) => setImage(e.target.files?.[0] || null)}
      />
      <button type="submit">Add Animal</button>
    </form>
  );
};

export default AnimalForm;
