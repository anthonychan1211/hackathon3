import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/message">Message Me</NavLink>
        <NavLink to="login">LogIn</NavLink>
      </nav>
    </header>
  );
}

export default NavBar;
