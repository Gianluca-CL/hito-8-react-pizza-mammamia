function Header({ title, description, fondo, style }) {
  return (
    <div>
      <div style={{ backgroundImage: `url(${fondo})`, ...style, }} className={"w-100 text-white p-5"}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}


export default Header;