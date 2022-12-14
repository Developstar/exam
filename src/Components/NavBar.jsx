import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar-container">
        <h3>Adeyeye Boluwatife</h3>

        <div className="navlinks-container">
      <NavLink
        style={({ isActive }) =>
          isActive ? { color: "green" } : { color: "black" }
        }
        to="/"
        className="navlink-btn"
      >
        Home
      </NavLink>

           <NavLink
        style={({ isActive }) =>
          isActive ? { color: "green" } : { color: "black" }
        }
        to="/404errortest"
        className="navlink-btn"
      >
        Error 404
      </NavLink>

      <NavLink
        style={({ isActive }) =>
          isActive ? { color: "green" } : { color: "black" }
        }
        to="/errorboundarytest"
        className="navlink-btn"
      >
        ErrorBoundary
      </NavLink>

     
      </div>
    </nav>
  );
};

export default NavBar;