
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { useUser } from "../context/UserContext";

const Navbar = () => {
  const { token, logout } = useUser();
  return (
    <nav className="bg-white border-b shadow-md p-4 flex items-center justify-between">
      <h1 className="text-2xl font-bold text-red-600">
        <Link to="/">Pizzería Mamma Mía</Link>
      </h1>
      <ul className="flex gap-4 text-gray-700 font-medium">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/register">Registro</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/profile">Perfil</Link></li>
        <li>
          <Link
            to="/cart"
            className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
          >
            🛒 Total: $0
          </Link>
        </li>
      </ul>
          <span className="navbar-text fw-bold text-white">Total: ${total}</span>
    </nav>
  );
};

export default Navbar;
