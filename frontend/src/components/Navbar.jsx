import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-600 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold">QuizMaster</h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6">
          <li>
            <Link to="/" className="hover:text-gray-200">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-200">About</Link>
          </li>
          <li>
            <Link to="/login" className="hover:text-gray-200">Login</Link>
          </li>
          <li>
            <Link to="/register" className="hover:text-gray-200">Register</Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden bg-white text-blue-600 px-3 py-1 rounded"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Links (Dropdown) */}
      {isOpen && (
        <ul className="md:hidden flex flex-col bg-blue-700 text-white p-4 space-y-3">
          <li>
            <Link to="/" className="hover:text-gray-200">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-200">About</Link>
          </li>
          <li>
            <Link to="/login" className="hover:text-gray-200">Login</Link>
          </li>
          <li>
            <Link to="/register" className="hover:text-gray-200">Register</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
