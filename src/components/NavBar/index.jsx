import { NavLink } from "react-router-dom";
import { useAuth } from "../../contexts";
let activeStyle = {
  color: "#A0BFE0",
};
function NavBar() {
  const { user } = useAuth();
  return (
    <header>
      <nav>
        {user && <p className="welcome">Welcome Back, {user}</p>}
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Home
        </NavLink>
        <NavLink
          to="/message"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Message Me
        </NavLink>
        <NavLink
          to="login"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          LogOut
        </NavLink>
      </nav>
    </header>
  );
}
export default NavBar;
