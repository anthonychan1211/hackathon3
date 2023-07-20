import { NavLink } from "react-router-dom";
import { useAuth } from "../../contexts";

function NavBar() {
  const { user } = useAuth();

  return (
    <header>
      <nav>
        {user && <p className="welcome">Welcome Back, {user}</p>}
        <NavLink to="/">Home</NavLink>
        <NavLink to="/message">Message Me</NavLink>
        <NavLink to="login">LogIn</NavLink>
      </nav>
    </header>
  );
}

export default NavBar;
