import React, { useState, useEffect, useContext } from "react";
import { FaHamburger } from "react-icons/fa";
import { FaPizzaSlice } from "react-icons/fa";
import { RiPlantFill } from "react-icons/ri";
import { BiDrink } from "react-icons/bi";
import { IoFastFood } from "react-icons/io5";
import { BiAlignJustify } from "react-icons/bi";
import Card from "../components/Card";
import { getProductos } from "../services/consultasFetch";
import { CartContext } from "../context/cartContext";

const Products = () => {
  const [loading, setLoading] = useState(true);
  const [productos, setProductos] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getProductos();
      setProductos(res);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="flex flex-col items-center border-t border-gray-100 bg-slate-300 ">
          <h2 className="text-2xl font-bold mt-24 mb-5">Products</h2>
          <div className="flex justify-center mt-2">
            <div className="flex flex-wrap gap-4 ">
              <CategoryIcon
                category="hamburguesas"
                icon={<FaHamburger size={40} />}
              />
              <CategoryIcon
                category="pizzas"
                icon={<FaPizzaSlice size={40} />}
              />
              <CategoryIcon
                category="comida-vegetariana"
                icon={<RiPlantFill size={40} />}
              />
              <CategoryIcon category="bebidas" icon={<BiDrink size={40} />} />
              <CategoryIcon category="combos" icon={<IoFastFood size={40} />} />
              <CategoryIcon
                category={null}
                icon={<BiAlignJustify size={40} />}
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-center mt-4 gap-4 mb-6">
            {productos.products.map((prod) => (
              <Card
                key={prod._id}
                id={prod._id}
                dataProducto={prod}
                name={prod.name}
                description={prod.description}
                img={prod.image}
                price={prod.price}
                addToCart={() => addToCart(prod)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const CategoryIcon = ({
  category,
  icon,
  selectedCategory,
  handleCategoryFilter,
}) => (
  <div
    className={`flex flex-col items-center text-black cursor-pointer hover:text-yellow-400 w-16 sm:w-20 md:w-24`}
    onClick={() => handleCategoryFilter(category)}
  >
    <div className="bg-red-600 rounded-full p-2">{icon}</div>
    <span className="mt-2">{category ? category : "Todos"}</span>
  </div>
);

export default Products;
