import React, { createContext, useContext, useReducer } from "react";

// Create context
const CartContext = createContext();

// Reducer function for cart actions
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const item = action.payload;
      const existingItem = state.find((i) => i._id === item._id);

      if (existingItem) {
        // If item already exists, increase quantity
        return state.map((i) =>
          i._id === item._id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...state, { ...item, quantity: 1 }];
      }
    }

    case "REMOVE_FROM_CART":
      return state.filter((i) => i._id !== action.payload);

    case "DECREASE_QUANTITY":
      return state
        .map((i) =>
          i._id === action.payload ? { ...i, quantity: i.quantity - 1 } : i
        )
        .filter((i) => i.quantity > 0);

    case "CLEAR_CART":
      return [];

    default:
      return state;
  }
};

//Provider component
export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  // Helper functions
  const addToCart = (item) => dispatch({ type: "ADD_TO_CART", payload: item });
  const removeFromCart = (id) =>
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  const decreaseQuantity = (id) =>
    dispatch({ type: "DECREASE_QUANTITY", payload: id });
  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  // Total price calculation
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, decreaseQuantity, clearCart, total }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook for easy use
export const useCart = () => useContext(CartContext);
