import { Link, NavLink } from "react-router-dom";

function NavBar() {

  return (

    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">

        <div className="collapse navbar-collapse justify-content-center" >
          <ul className="navbar-nav gap-4">

            <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/chisiamo">About us</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/prodotti"> Products </NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
