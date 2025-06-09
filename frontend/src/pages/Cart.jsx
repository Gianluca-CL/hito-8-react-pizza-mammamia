
import { useCart } from "../context/CartContext";

function Cart() {
  const {
    cart,
    total,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
  } = useCart();

  return (
    <div className="container mt-5">
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <div className="row">
          {cart.map((item) => (
            <div key={item.id} className="col-12 mb-4">
              <div className="card p-3 d-flex flex-row align-items-center">
                <img
                  src={item.img}
                  alt={item.name}
                  style={{ width: "100px", height: "100px", objectFit: "cover" }}
                  className="me-3"
                />
                <div className="flex-grow-1">
                  <h5>{item.name}</h5>
                  <p>Precio: ${item.price}</p>
                  <p>Cantidad: {item.quantity}</p>
                  <div>
                    <button
                      className="btn btn-outline-secondary btn-sm me-2"
                      onClick={() => decrementQuantity(item.id)}
                    >
                      -
                    </button>
                    <button
                      className="btn btn-outline-secondary btn-sm me-2"
                      onClick={() => incrementQuantity(item.id)}
                    >
                      +
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="col-12">
            <h4>Total a pagar: ${total}</h4>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
