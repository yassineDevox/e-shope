import "./side-bar.css";
import { NavLink, Link, useHistory } from "react-router-dom";
import { useContext, useState } from "react";
import AuthContext from "../../auth/context/auth-context";

export default function Sidebar() {
  const { logout } = useContext(AuthContext);
  const history = useHistory();
  const [dashboard, setdashboard] = useState(false);
  const [customers, setcustomers] = useState(false);
  const [products, setproducts] = useState(false);
  const [categories, setcategories] = useState(false);
  const [orders, setorders] = useState(false);
  const [shoppingCard, setshoppingCard] = useState(false);

  function setAll(
    dashboard,
    customers,
    products,
    categories,
    orders,
    shoppingCard
  ) {
    setdashboard(dashboard);
    setcustomers(customers);
    setproducts(products);
    setcategories(categories);
    setorders(orders);
    setshoppingCard(shoppingCard);
  }

  function logoutMe() {
    logout();
    history.push("/");
  }

  return (
    <nav id="sidebar" className="sidebar-wrapper">
      <div className="sidebar-content">
        <div className="sidebar-brand text-center ">
          <a href="#  ">E-shope Admin</a>
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
              <span>Manage</span>
            </li>
            <NavLink
              to="/admin/"
              isActive={(match) => {
                if (match && match.isExact)
                  setAll(true, false, false, false, false, false);
              }}
            >
              {" "}
              <li
                className={`sidebar-dropdown ${
                  dashboard == true ? " active" : ""
                }`}
              >
                <a href="#">
                  <i className="fa fa-home" />
                  <span>Dashboard</span>
                </a>
              </li>
            </NavLink>
            <NavLink
              to="/admin/customers"
              isActive={(match) => {
                if (match && match.isExact)
                  setAll(false, true, false, false, false, false);
              }}
            >
              {" "}
              <li
                className={`sidebar-dropdown ${
                  customers == true ? " active" : ""
                }`}>
                <a href="#">
                  <i className="fa fa-users" />
                  <span>Customers</span>
                </a>
              </li>
            </NavLink>
            <NavLink
              to="/admin/products"
              isActive={(match) => {
                if (match && match.isExact)
                  setAll(false, false, true, false, false, false);
              }}>
              <li
              className={`sidebar-dropdown ${
                products == true ? " active" : ""
              }`}>
                <a href="#">
                  <i className="fas fa-tshirt" />
                  <span>Products</span>
                </a>
              </li>
            </NavLink>
            <NavLink
              to="/admin/categories"
              isActive={(match) => {
                if (match && match.isExact)
                  setAll(false, false, false, true, false, false);
              }}>
              <li
              className={`sidebar-dropdown ${
                categories == true ? " active" : ""
              }`}>
                <a href="#">
                  <i className="fa fa-list-alt " />
                  <span>Category</span>
                </a>
              </li>
            </NavLink>
            <NavLink
              to="/admin/orders"
              isActive={(match) => {
                if (match && match.isExact)
                  setAll(false, false, false, false, true, false);
              }}>
              <li
              className={`sidebar-dropdown ${
                orders == true ? " active" : ""
              }`}>
                <a href="#">
                  <i className="fa fa-chart-line" />
                  <span>Orders</span>
                </a>
              </li>
            </NavLink>
          </ul>
          <ul>
            <li className="header-menu">
              <span>Extra</span>
            </li>
            <NavLink
              to="/admin/shopping-cards"
              isActive={(match) => {
                if (match && match.isExact)
                  setAll(false, false, false, false, false, true);
              }}>
              <li
              className={`sidebar-dropdown ${
                shoppingCard == true ? " active" : ""
              }`}>
                <a href="#">
                  <i className="fa fa-shopping-cart" />
                  <span>Shopping cart</span>
                </a>
              </li>
            </NavLink>
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
