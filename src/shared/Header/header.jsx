import "./Header.css";
import { Link, BrowserRouter as Router } from "react-router-dom";

export default function Header() {

  return (
    <Router>
    <nav className="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
       E-Shope
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i class="fa fa-shopping-basket">
                <span className="badge badge-danger">0</span>
              </i>
              Shoping cart
            </a>
          </li>
        </ul>
        <ul className="navbar-nav ">
        
          <li className="nav-item active">
          
            <a className="nav-link" href="javascript:void">
              <i className="fa fa-home">
              </i>
               <Link to='/home'> Home</Link>
            </a>
            
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0 mr-2"
            type="submit"
          >
            <i className="fa fa-lock"></i> Signin
          </button>
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            <i className="fa fa-user"></i> Signup
          </button>
        </form>
      </div>
    </nav>
    </Router>
  );
}
