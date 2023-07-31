import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cartContext";
import logo from "../assets/logorfood.jpg";
import { BsCartFill } from "react-icons/bs";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartItems } = useContext(CartContext);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="top-0 left-0 right-0 z-50 w-full bg-white shadow-lg shadow-red-500">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/">
            <img src={logo} className="h-16" alt="Logo" />
          </Link>
        </div>

        <nav className="hidden md:flex md:items-center">
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:text-red-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="/productos" className="hover:text-red-500">
                Products
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-red-500">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-red-500">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/admin" className="hover:text-red-500">
                Admin Panel
              </Link>
            </li>
            <li className="relative">
              <Link to={"/cart"} className="flex items-center">
                Cart
                <BsCartFill />
                {cartItems.length > 0 && (
                  <div className="absolute -top-1 -right-1 text-white bg-red-500 h-4 w-4 rounded-full m-0 p-0 text-sm text-center">
                    {cartItems.length}
                  </div>
                )}
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="hover:bg-green-500 bg-red-600 p-3 rounded text-white"
              >
                Login
              </Link>
            </li>
          </ul>
        </nav>

        <div className="md:hidden">
          <button
            className="text-gray-500 focus:outline-none"
            onClick={handleMobileMenuToggle}
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <MobileMenu handleMobileMenuToggle={handleMobileMenuToggle} />
      )}
    </header>
  );
};

const MobileMenu = ({ handleMobileMenuToggle }) => {
  return (
    <div className="md:hidden">
      <nav className="bg-white">
        <ul className="flex flex-col space-y-2 py-4 px-6">
          <li>
            <Link
              to="/"
              className="hover:text-red-500"
              onClick={handleMobileMenuToggle}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/productos"
              className="hover:text-red-500"
              onClick={handleMobileMenuToggle}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-red-500"
              onClick={handleMobileMenuToggle}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-red-500"
              onClick={handleMobileMenuToggle}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/admin"
              className="hover:text-red-500"
              onClick={handleMobileMenuToggle}
            >
              Admin Panel
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="hover:text-red-500"
              onClick={handleMobileMenuToggle}
            >
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
