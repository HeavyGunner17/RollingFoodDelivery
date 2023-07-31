import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRepeatPasswordChange = (e) => {
    setRepeatPassword(e.target.value);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar la lógica de registro
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-600 mt-12">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-sm w-full">
        <h2 className="text-2xl font-bold text-center mt-6">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">First Name</label>
            <input
              type="text"
              value={firstName}
              onChange={handleFirstNameChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-green-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Last Name</label>
            <input
              type="text"
              value={lastName}
              onChange={handleLastNameChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-green-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-green-500"
              required
            />
          </div>
          <div className="mb-4 relative">
            <label className="block text-gray-700">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={handlePasswordChange}
              className="w-full px-4 py-2 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:border-green-500"
              required
            />
            <button
              type="button"
              onClick={handleTogglePassword}
              className="absolute inset-y-0 right-0 px-3 flex items-center"
            >
              {showPassword ? (
                <FiEyeOff className="text-gray-500 mt-5" />
              ) : (
                <FiEye className="text-gray-500 mt-5" />
              )}
            </button>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Repeat Password</label>
            <input
              type="password"
              value={repeatPassword}
              onChange={handleRepeatPasswordChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-green-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-yellow-500 text-white rounded-lg hover:bg-green-600"
          >
            Register
          </button>
        </form>
        <div className="text-center text-red-500 mt-3">
          Already have an account?{" "}
          <Link to="/Login" className="text-blue-500 hover:text-blue-800">
            Click here to login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
