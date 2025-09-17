import React, { createContext, useContext, useState, useEffect } from "react";
import api from "../services/Api";

// 1️⃣ Create context
const AuthContext = createContext();

// 2️⃣ Provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);       // stores user info
  const [token, setToken] = useState(null);     // stores JWT
  const [loading, setLoading] = useState(true);

  // Load user from localStorage on mount
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // Login function
  const login = async (email, password) => {
    try {
      const res = await api.post("/auth/login", { email, password });
      const { token, user } = res.data;
      setToken(token);
      setUser(user);
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      return { success: true };
    } catch (err) {
      console.error(err);
      return { success: false, message: err.response?.data?.message || err.message };
    }
  };

  // Register function
  const register = async (name, email, password) => {
    try {
      const res = await api.post("/auth/register", { name, email, password });
      const { token, user } = res.data;
      setToken(token);
      setUser(user);
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      return { success: true };
    } catch (err) {
      console.error(err);
      return { success: false, message: err.response?.data?.message || err.message };
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// 3️⃣ Custom hook for easy access
export const useAuth = () => useContext(AuthContext);
