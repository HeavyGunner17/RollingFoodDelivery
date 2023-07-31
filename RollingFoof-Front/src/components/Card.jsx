import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";

const Card = ({ id, name, image, description, category, price }) => {
  const { addToCart } = useContext(CartContext);
  const handleAddToCart = () => {
    console.log("Product added to cart:", dataProducto);
    addToCart(dataProducto);
  };

  return (
    <div className="bg-yellow-400 shadow-md rounded-md p-4 w-64 md:w-56 lg:w-64 xl:w-72 mb-3">
      <img src={image} alt={name} className="w-full h-auto rounded-md mb-4" />
      <h3 className="text-lg font-bold mb-2">{name}</h3>
      <p>{description}</p>
      <p>{category}</p>
      <p>{price}</p>
      <button
        className="bg-green-500 p-2 rounded text-white border border-yellow-300 hover:bg-green-600"
        onClick={() => addToCart({ id, name, image, description, category, price, quantity: 1 })}
      >
        Buy
      </button>
    </div>
  );
};

export default Card;
