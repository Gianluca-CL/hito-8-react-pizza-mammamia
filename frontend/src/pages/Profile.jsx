const Protected = () => {
  const { token } = useUser();
  if (!token) return <Navigate to="/login" />;

  return (Profile = () => {
  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold mb-4">Perfil de Usuario</h1>
      <p>Email: usuario@ejemplo.com</p>
      <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded">
        Cerrar sesión
      </button>
    </div>
  );
};
export default Protected;Profile;
