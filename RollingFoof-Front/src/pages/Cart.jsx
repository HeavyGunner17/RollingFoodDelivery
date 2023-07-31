import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart, incrementQuantity, decrementQuantity } = useContext(CartContext);

  // Calcular el total a pagar
  const total = cartItems.reduce((accumulator, item) => {
    return accumulator + item.price * item.quantity;
  }, 0);

  return (
    <div className="container mx-auto p-4 mt-12 mb-6">
      <h1 className="text-3xl font-bold mt-7">Shopping cart</h1>

      <ul className="grid grid-cols-1 gap-4">
        {cartItems.map((item) => (
          <li key={item.id} className="border border-gray-300 p-4 rounded shadow">
            <h2 className="text-lg font-bold">{item.name}</h2>
            <p className="text-gray-600">Price: ${item.price}</p>
            <p className="text-gray-600">Quantity: {item.quantity}</p>
            <div className="flex justify-between items-center">
              <button className="px-2 py-1 bg-red-500 text-white rounded" onClick={() => removeFromCart(item.id)}>Delete</button>
              <div className="flex items-center gap-2">
                <button className="px-2 py-1 bg-green-500 text-white rounded" onClick={() => decrementQuantity(item.id)}>Subtract</button>
                <button className="px-2 py-1 bg-blue-500 text-white rounded" onClick={() => incrementQuantity(item.id)}>Increment</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex justify-end">
        <p className="text-xl font-semibold">Total payable: ${total}</p>
<Link to={"/404"}>
       <button className="ml-4 px-4 py-2 bg-yellow-400 text-white rounded-md">
        Proceed to payment
        </button>
</Link>
      </div>
    </div>
  );
};

export default Cart;
