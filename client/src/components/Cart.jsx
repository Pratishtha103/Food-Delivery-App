import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, addToCart, decreaseQuantity, removeFromCart, clearCart, total } =
    useCart();

  if (cart.length === 0) {
    return (
      <div className="container mt-5">
        <h2>Your Cart is Empty 🛒</h2>
        <p>Browse restaurants and add delicious food to your cart.</p>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2>Your Cart 🛒</h2>
      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th>Food Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>₹{item.price}</td>
              <td>
                <button
                  className="btn btn-sm btn-outline-secondary me-2"
                  onClick={() => decreaseQuantity(item._id)}
                >
                  -
                </button>
                {item.quantity}
                <button
                  className="btn btn-sm btn-outline-secondary ms-2"
                  onClick={() => addToCart(item)}
                >
                  +
                </button>
              </td>
              <td>₹{item.price * item.quantity}</td>
              <td>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => removeFromCart(item._id)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="d-flex justify-content-between align-items-center mt-4">
        <h4>Total: ₹{total}</h4>
        <div>
          <button className="btn btn-warning me-2" onClick={clearCart}>
            Clear Cart
          </button>
          <button className="btn btn-success">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
