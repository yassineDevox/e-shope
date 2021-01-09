import "./side-bar.css";
import { Link, useHistory } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../auth/context/auth-context";

export default function Sidebar() {
  
  const {logout,currentUser} = useContext(AuthContext);
  const history = useHistory();
 

  function logoutMe() {
    logout();
    history.push('/')
  }

  console.log(currentUser);
  
  return (
    <nav id="sidebar" className="sidebar-wrapper">
      <div className="sidebar-content">
        <div className="sidebar-brand text-center ">
          <a href="#  ">pro sidebar</a>
          <div id="close-sidebar">
            <i className="fas fa-times" />
          </div>
        </div>
        <div className="sidebar-header">
          <div className="user-pic">
            <img
              className="mt-2 img-responsive img-rounded"
              src="https://raw.githubusercontent.com/azouaoui-med/pro-sidebar-template/gh-pages/src/img/user.jpg" 
              alt="User picture"
            />
          </div>
          <div className="user-info">
            <span className="user-name">
              Yassine
              <strong>Rassy</strong>
            </span>
            <span className="user-role">Administrator</span>
            <span className="user-status">
              <span>
                <button
                  onClick={logoutMe}
                  style={{ padding: "0 4px" }}
                  className="btn btn-danger"
                >
                  <i
                    style={{ zoom: "2" }}
                    className="fa fa-power-off text-white"
                  ></i>
                  out
                </button>
              </span>
            </span>
          </div>
        </div>
        {/* sidebar-header  */}
        <div className="sidebar-search">
          <div>
            <div className="input-group">
              <input
                type="text"
                className="form-control search-menu"
                placeholder="Search..."
              />
              <div className="input-group-append">
                <span className="input-group-text">
                  <i className="fa fa-search" aria-hidden="true" />
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* sidebar-search  */}
        <div className="sidebar-menu">
          <ul>
            <li className="header-menu">
              <span>Manager</span>
            </li>
            <Link to="/admin/customers">
              {" "}
              <li className="sidebar-dropdown">
                <a href="#">
                  <i className="fa fa-users" />
                  <span>Users</span>
                </a>
              </li>
            </Link>
            <Link to="/admin/products">
              <li className="sidebar-dropdown">
                <a href="#">
                  <i className="fas fa-tshirt" />
                  <span>Products</span>
                </a>
              </li>
            </Link>

            <Link to="/admin/categories">
              <li className="sidebar-dropdown">
                <a href="#">
                  <i className="fa fa-list-alt " />
                  <span>Category</span>
                </a>
              </li>
            </Link>
            <Link to="/admin/orders">
              <li className="sidebar-dropdown">
                <a href="#">
                  <i className="fa fa-chart-line" />
                  <span>Orders</span>
                </a>
              </li>
            </Link>
          </ul>
          <ul>
            <li className="header-menu">
              <span>Extra</span>
            </li>
            <Link to="admin/shopping-cards">
              {" "}
              <li className="sidebar-dropdown">
                <a href="#">
                  <i className="fa fa-shopping-cart" />
                  <span>Shopping cart</span>
                </a>
              </li>
            </Link>
            <li className="sidebar-dropdown">
              <a href="#">
                <i className="fa fa-thumbs-up" />
                <span>Recomandation</span>
              </a>
            </li>
          </ul>
        </div>
        {/* sidebar-menu  */}
      </div>
      {/* sidebar-content  */}
    </nav>
  );
}
