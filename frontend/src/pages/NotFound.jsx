import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center p-8">
      <h1 className="text-3xl font-bold mb-4">404 - Página no encontrada</h1>
      <p>Ups, esta ruta no existe 😅</p>
      <Link to="/" className="text-blue-600 underline mt-4 inline-block">
        Volver al inicio
      </Link>
    </div>
  );
};
export default NotFound;
