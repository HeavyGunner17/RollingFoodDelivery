import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const FormProduct = ({ product, onSubmit, onClose }) => {
  const [name, setName] = useState(product ? product.name : "");
  const [price, setPrice] = useState(product ? product.price : "");
  const [category, setCategory] = useState(product ? product.category : "");
  const [description, setDescription] = useState(product ? product.description : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: Date.now(),
      name,
      price,
      category,
      description,
    };
    onSubmit(newProduct);
    setName("");
    setPrice("");
    setCategory("");
    setDescription("");
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
      <div className="bg-white rounded-lg p-6 border border-red-500 w-4/5">
        <div className="flex justify-end">
          <button
            className="text-gray-600 hover:text-gray-800"
            onClick={handleCancel}
          >
            <AiOutlineClose className="text-xl" />
          </button>
        </div>
        <h2 className="text-xl font-bold mb-4">Add product</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Nombre del Producto"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded-lg"
          />
          <input
            type="number"
            placeholder="Precio"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded-lg"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded-lg"
          >
            <option value="">Select Category</option>
            <option value="hamburguesas">Hamburgers</option>
            <option value="pizzas">Pizzas</option>
            <option value="comida-vegetariana">Vegetarian food</option>
            <option value="bebidas">Drinks</option>
          </select>
          <textarea
            placeholder="Descripción"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded-lg"
          />
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              Save
            </button>
            <button
              type="button"
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormProduct;
