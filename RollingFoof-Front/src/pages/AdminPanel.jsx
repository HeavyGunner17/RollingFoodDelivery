import React, { useState } from "react";
import TableUser from "../components/TableUser";
import TableProduct from "../components/TableProduct";

const AdminPanel = () => {
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

  return (
    <div>
      <h2 className="text-2xl font-bold mt-16 text-center">Admin Panel</h2>

      <div>
        <h3 className="text-xl font-bold mb-2">Users List</h3>
        {users.length > 0 ? (
          <TableUser users={users} />
        ) : (
          <p>There are no registered users.</p>
        )}
      </div>

      <div>
        <h3 className="text-xl font-bold mb-2">Products List</h3>
        {products.length > 0 ? (
          <TableProduct products={products} />
        ) : (
          <p>No products registered.</p>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
