import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaEdit, FaTrash } from "react-icons/fa";
import FormUser from "../components/FormUser";

const TableUser = ({ users, onEdit, onDelete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddUser = () => {
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
          onClick={handleAddUser}
        >
          <FaPlus className="mr-2" />
         Add User
        </button>
      </div>
      <table className="w-full border border-gray-300">
        <thead>
          <tr>
            <th className="border-b bg-gray-100 px-4 py-2">First Name</th>
            <th className="border-b bg-gray-100 px-4 py-2">Last Name</th>
            <th className="border-b bg-gray-100 px-4 py-2">Email</th>
            <th className="border-b bg-gray-100 px-4 py-2">Password</th>
            <th className="border-b bg-gray-100 px-4 py-2">Role</th>
            <th className="border-b bg-gray-100 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="border-b px-4 py-2">{user.firstName}</td>
              <td className="border-b px-4 py-2">{user.lastName}</td>
              <td className="border-b px-4 py-2">{user.email}</td>
              <td className="border-b px-4 py-2">{user.password}</td>
              <td className="border-b px-4 py-2">{user.role}</td>
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

      {isModalOpen && <FormUser onClose={closeModal} />}
    </div>
  );
};

export default TableUser;
