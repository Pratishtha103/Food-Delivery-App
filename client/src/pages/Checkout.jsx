import React, { useState } from "react";
import { useCart } from "../contexts/CartContext";

const Checkout = () => {
  const { cart, total, clearCart } = useCart();
  const [form, setForm] = useState({
    name: "",
    address: "",
    phone: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    if (!form.name || !form.address || !form.phone) {
      alert("Please fill in all fields!");
      return;
    }

    // send order to backend API
    console.log("Order placed:", { customer: form, items: cart, total });

    alert("✅ Order placed successfully!");
    clearCart();
  };

  if (cart.length === 0) {
    return (
      <div className="container mt-4">
        <h2>Checkout</h2>
        <p>Your cart is empty. Please add some items first.</p>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2>Checkout</h2>

      {/* Cart Summary */}
      <div className="card p-3 mt-3">
        <h4>Order Summary</h4>
        <ul className="list-group list-group-flush">
          {cart.map((item) => (
            <li
              key={item._id}
              className="list-group-item d-flex justify-content-between"
            >
              <span>
                {item.name} × {item.quantity}
              </span>
              <span>₹{item.price * item.quantity}</span>
            </li>
          ))}
        </ul>
        <h5 className="mt-3">Total: ₹{total}</h5>
      </div>

      {/* Delivery Form */}
      <div className="card p-3 mt-4">
        <h4>Delivery Details</h4>
        <form>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your full name"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Address</label>
            <textarea
              className="form-control"
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="Enter delivery address"
            ></textarea>
          </div>

          <div className="mb-3">
            <label className="form-label">Phone</label>
            <input
              type="text"
              className="form-control"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Enter contact number"
            />
          </div>

          <button
            type="button"
            className="btn btn-success"
            onClick={handlePlaceOrder}
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
