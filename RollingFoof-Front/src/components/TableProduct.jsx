import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaEdit, FaTrash } from "react-icons/fa";
import FormProduct from "../components/FormProduct";

const TableProduct = ({ products, onEdit, onDelete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddProduct = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col mt-4">
      <div className="flex justify-end mb-4">
        <button
          className="flex items-center bg-blue-500 text-white px-3 py-1 rounded-lg text-sm w-max mr-4"
          onClick={handleAddProduct}
        >
          <FaPlus className="mr-2" />
          Add product 
        </button>
      </div>
      <table className="w-full border border-gray-300">
        <thead>
          <tr>
            <th className="border-b bg-gray-100 px-4 py-2">Nombre</th>
            <th className="border-b bg-gray-100 px-4 py-2">Precio</th>
            <th className="border-b bg-gray-100 px-4 py-2">Categoría</th>
            <th className="border-b bg-gray-100 px-4 py-2">Descripción</th>
            <th className="border-b bg-gray-100 px-4 py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className="border-b px-4 py-2">{product.name}</td>
              <td className="border-b px-4 py-2">{product.price}</td>
              <td className="border-b px-4 py-2">{product.category}</td>
              <td className="border-b px-4 py-2">{product.description}</td>
              <td className="px-4 py-2 border-b">
                <button className="mr-2 text-blue-500 hover:text-blue-700">
                  <FaEdit />
                </button>
                <button className="text-red-500 hover:text-red-700">
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && <FormProduct onClose={closeModal} />}
    </div>
  );
};

export default TableProduct;
