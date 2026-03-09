import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="from-indigo-500 to-purple-600 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rotate-45"></div>
          <h1 className="text-2xl font-bold text-blue-700">LOGO</h1>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li
            onClick={() => navigate("/")}
            className="hover:text-blue-600 cursor-pointer"
          >
            Home
          </li>
          <li className="hover:text-blue-600 cursor-pointer">Shop</li>
          <li className="hover:text-blue-600 cursor-pointer">Programs</li>
          <li className="hover:text-blue-600 cursor-pointer">Gallery</li>
          <li className="hover:text-blue-600 cursor-pointer">About Us</li>
        </ul>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            onClick={() => navigate("/login")}
            className="px-6 py-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/register")}
            className="px-6 py-2 border border-blue-700 text-blue-700 rounded-full hover:bg-blue-50 transition"
          >
            Sign in
          </button>
          <div clasname="">
          <FaShoppingCart />
          </div>
        </div>
          
        
      </div>
    </nav>
  );
}
