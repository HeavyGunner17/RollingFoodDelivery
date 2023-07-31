import { Link } from "react-router-dom";

const CardFeautured = ({ dataProducto, category }) => {
    return (
      <div className="bg-gray-100 p-4 rounded  mb-12 m-3 border border-yellow-400 shadow-md shadow-red-500">
        <h3 className="text-lg font-semibold">{dataProducto.name}</h3>
        <p className="mt-2">Price: {dataProducto.price}</p>
        <p className="mt-2">Categoría: {category && category.name}</p>
        <Link to={"/productos"}>
        <button className="bg-green-500 p-2 rounded text-white border border-yellow-300 hover:bg-green-600">Ver Producto</button>
        </Link>
        
      </div>
    );
  };
   export default CardFeautured