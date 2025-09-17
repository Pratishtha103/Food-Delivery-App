import { Link } from 'react-router-dom';
import { useAuth } from "../contexts/AuthContext.jsx";


function Navbar() {
  const { user, logout } = useAuth();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">FoodApp</Link>
        <div>
            {user ? (
              <>
                <span>Welcome, {user.name}</span>
                <button className="btn btn-outline-light mx-2" onClick={logout}>Logout</button>
              </>
            ) : (
              <a  className="btn btn-outline-light mx-2" href="/login">Login</a>
            )}
          {/* <Link className="btn btn-outline-light mx-2" to="/login">Login</Link> */}
          <Link className="btn btn-outline-light mx-2" to="/register">Register</Link>
          <Link className="btn btn-warning" to="/checkout">Cart</Link>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
