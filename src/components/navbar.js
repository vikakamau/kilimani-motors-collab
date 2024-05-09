import { Link } from "react-router-dom";



function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <h1 className="text-bold text-primary m-2">Kilimani Motors Limited</h1>

          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <div className="m-2">
                <li className="nav-item">
                  <Link to="/">
                    <h3>
                      Home
                    </h3>
                  </Link>
                </li>
                
              </div>
              <div className="m-2">
              
              <li className="nav-item">
                <Link to="/about">
                <h3 >
                  About Us
                </h3>
                </Link>
              </li>
              </div>
              <div className="m-2">
              <li className="nav-item">
                <Link to="/available">
                  <h3>
                      List of available Cars
                  </h3>
                  </Link>
              </li>
              </div>
              <div className="m-2">
              <li className="nav-item">
                <Link to="/contacts">
                  <h3>
                    Contact Us
                  </h3>
                </Link>
              </li>
              </div>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search By Name or Model"
                aria-label="Search"
              
              />
              <button className="btn btn-outline-success" type="submit" >
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
