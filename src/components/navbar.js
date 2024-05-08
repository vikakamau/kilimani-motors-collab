import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav classNameName="navbar navbar-expand-lg bg-body-tertiary">
        <div classNameName="container-fluid">
          <h1 classNameName="text-bold text-primary m-2">
            Kilimani Motors Limited
          </h1>

          <div
            classNameName="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul classNameName="navbar-nav me-auto mb-2 mb-lg-0">
              <div classNameName="m-2">
                <li classNameName="nav-item">
                  <Link to="/">
                    <h3>Home</h3>
                  </Link>
                </li>
              </div>
              <div classNameName="m-2">
                <li classNameName="nav-item">
                  <Link to="/about">
                    <h3>About Us</h3>
                  </Link>
                </li>
              </div>
              <div classNameName="m-2">
                <li classNameName="nav-item">
                  <Link to="/available">
                    <h3>List of available Cars</h3>
                  </Link>
                </li>
              </div>
              <div classNameName="m-2">
                <li classNameName="nav-item">
                  <Link to="/contacts">
                    <h3>Contact Us</h3>
                  </Link>
                </li>
              </div>
            </ul>
            <form classNameName="d-flex" role="search">
              <input
                classNameName="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button classNameName="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
