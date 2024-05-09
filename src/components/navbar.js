import { Link } from "react-router-dom";




function Navbar() {
  return (
    <div>

      <nav className="navbar navbar-expand-lg bg-dark navbar-dark m-3 ">
        <div className="container-fluid">
          <h1 className="text-bold text-primary m-2">
          <img src={"https://i.pinimg.com/564x/0a/e7/16/0ae7168109df3688316c8bfd361ccbfb.jpg"} width="200" height="150" className="d-inline-block align-top" alt="Kilimani Motors"></img>
            
          </h1>

          <div
            className="collapse navbar-collapse justify-content-center "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mx-auto">
              <div className=" m-5">
                <li className="nav-item " >
                  <Link to="/kilimani-motors-collab">
                    <h4>Home</h4>

                  </Link>
                </li>
                
              </div>

              <div className="m-5 ">
                <li className="nav-item ">
                  <Link to="/about">
                    <h4>About</h4>
                  </Link>
                </li>
              </div>
              <div className="m-5">
                <li className="nav-item">
                  <Link to="/kilimani-motors-collab/available">
                    <h4>Cars</h4>
                  </Link>
              </li>
              </div>

              <div className="m-5">
                <li className="nav-item">
                  <Link to="/kilimani-motors-collab/contacts">
                    <h4>Contact Us</h4>
                  </Link>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
