import React, { useEffect, useState, useContext } from "react";
import { getProductos, getCategory } from "../services/consultasFetch";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import CardFeautured from "../components/CardFeauture";
import './loader.css'
import { CartContext } from "../context/cartContext";

const Featured = () => {
  const [loading, setLoading] = useState(true);
  const [productos, setProductos] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [categories, setCategories] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getProductos();
      setProductos(res);
      setLoading(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      const categories = [];
      for (const product of productos.products) {
        const category = await getCategory(product.category);
        categories.push(category);
      }
      setCategories(categories);
    };

    if (productos !== null && productos.products.length > 0) {
      fetchCategories();
    }
  }, [productos]);

  const handleClickPrevious = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const handleClickNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  

  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center h-36">
        <div className="mover">Loading...</div>
        </div>
      ) : (
        <div>
          <h1 className="text-2xl font-bold mb-4">Featured products</h1>
          {productos !== null && productos.products.length > 0 ? (
            <div className="relative">
              {currentIndex > 0 && (
                <button
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-green-500 text-white rounded-md shadow-lg hover:bg-green-700"
                 // onClick={handleClickPrevious}
                >
                  <BsFillArrowLeftCircleFill />
                </button>
              )}
              <div className="grid grid-cols-3 gap-4">
                {productos.products
                  .slice(currentIndex, currentIndex + 3)
                  .map((prod, index) => (
                    
                    <CardFeautured 
                    key={prod._id}
                    dataProducto={prod}
                    category={categories[index]}
                    addToCart={() => addToCart(prod)}
                    />
                  ))}
              </div>
              {currentIndex < productos.products.length - 3 && (
                <button
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-green-500 text-white rounded-md shadow-lg hover:bg-green-700"
                  onClick={handleClickNext}
                >
                  <BsFillArrowRightCircleFill />
                </button>
              )}
            </div>
          ) : (
            <div>There are no products</div>
          )}
        </div>
      )}
    </div>
  );
};

const CardProducto = ({ dataProducto, category }) => {
  return (
    <div className="bg-gray-100 p-4 rounded shadow">
      <h3 className="text-lg font-semibold">{dataProducto.name}</h3>
      <p className="mt-2">Price: {dataProducto.price}</p>
      <p className="mt-2">Categoría: {category && category.name}</p>
    </div>
  );
};

export default Featured;
