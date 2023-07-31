import React, { useState } from "react";
import TableProduct from "../components/TableProduct";
import TableUser from "../components/TableUser";

const AdminPanelV2 = () => {
  const [activeTab, setActiveTab] = useState("");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const [users, setUsers] = useState([
    { id: 1, firstName: 'John', lastName: 'Doe',password:'*******', email: 'johndoe@example.com', role: 'usuario' },
    { id: 2, firstName: 'Jane', lastName: 'Smith',password:'*******', email: 'janesmith@example.com', role: 'administrador' },
    // Agrega más usuarios aquí si es necesario
  ]);

  const [products, setProducts] = useState([
    { id: 1, name: 'Hamburguesa 1', category: 'hamburguesas', description: 'Descripción de la hamburguesa 1', price:'$'+ 10 },
    { id: 2, name: 'Hamburguesa 2', category: 'hamburguesas', description: 'Descripción de la hamburguesa 2', price: '$'+12 },
    // Agrega más productos aquí si es necesario
  ]);

  let content;
  if (activeTab === "dashboard") {
    content = <h1>Dashboard Admin</h1>;
  } else if (activeTab === "users") {
    content = <TableUser users={users} />;
  } else if (activeTab === "products") {
    content = <TableProduct products={products} />;
  }

  return (
    <div className="flex mt-16 ">

      <aside className="w-64 bg-gray-100 h-4/5">
        <ul className="p-4 space-y-2 font-medium">
          <li>
            <a
              href="#"
              className={`flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-200 ${
                activeTab === "dashboard" ? "bg-gray-200" : ""
              }`}
              onClick={() => handleTabClick("dashboard")}
            >
              <span className="ml-9 text-red-600">Administration</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-500 ${
                activeTab === "users" ? "bg-red-400" : ""
              }`}
              onClick={() => handleTabClick("users")}
            >
              <span className="ml-3">Users</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-500 ${
                activeTab === "products" ? "bg-red-400" : ""
              }`}
              onClick={() => handleTabClick("products")}
            >
              <span className="ml-3">Products</span>
            </a>
          </li>
        </ul>
      </aside>

      <div className="flex-grow flex justify-center items-center p-4">
        {content}
      </div>
    </div>
  );
};

export default AdminPanelV2;
