import { useState } from "react";
import { addCategory } from "../pages/api/categories";

interface CategoryFormProps {
  onCategoryAdded: () => void;
}

const CategoryForm: React.FC<CategoryFormProps> = ({ onCategoryAdded }) => {
  const [name, setName] = useState('');

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    await addCategory({ name });
    alert('Category added successfully!');
    onCategoryAdded();
    setName('');
  } catch (error) {
    console.error('Error adding category:', error);
    alert('Failed to add category.');
  }
};


  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Category Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Add Category</button>
    </form>
  );
};

export default CategoryForm;
