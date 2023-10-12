import { NavLink } from "react-router-dom";

const Navbar = () => {
  const isActiveStyle = ({ isActive }) => ({
    fontWeight: isActive ? "bold" : "",
    color: isActive ? "#a855f7" : ""
  });

  return (
    <ul>
      <li>
        <NavLink to="/" style={isActiveStyle} className="nav-items">
          Items
        </NavLink>
      </li>
      <li>
        <NavLink to="/sales" style={isActiveStyle} className="nav-items">
          Sales
        </NavLink>
      </li>
      <li>
        <NavLink to="/reports" style={isActiveStyle} className="nav-items">
          Reports
        </NavLink>
      </li>
    </ul>
  );
};

export { Navbar };
