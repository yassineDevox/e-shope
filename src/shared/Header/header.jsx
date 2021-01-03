import "./Header.css";
import { NavLink } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import ProductContext from "../context/product-context";
import AuthContext from "../context/auth-context";
import Modal from "../modal";

export default function Header() {
  const [shopping_card, setShopingCard] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [home, setHome] = useState(false);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const [keySearch, setKeySearch] = useState(false);

  const setAll = (shopping_card, admin, home) => {
    setShopingCard(shopping_card);
    setAdmin(admin);
    setHome(home);
  };

  const { filter } = useContext(ProductContext);
  const { signup } = useContext(AuthContext);

  // console.log(context.products);

  const filterListProduct = (e) => {
    let query = e.target.value.toLowerCase();
    setKeySearch(query);
    filter(query);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signup();
  };
  const handleChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    if (name == "username") setUsername(value);
    else setPassword(value);
  };
  return (
    <nav className="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand text-warning" href="#">
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
          <NavLink
            to="/shopping-card"
            isActive={(match) => {
              if (match && match.isExact) setAll(true, false, false);
            }}
          >
            <li
              className={`nav-item ${shopping_card == true ? " active" : ""}`}
            >
              <a className="nav-link" href="#">
                <i class="fa fa-shopping-basket">
                  <span className="badge badge-danger">0</span>
                </i>
              </a>
            </li>
          </NavLink>
        </ul>
        <input
          className="form-control mx-auto w-50"
          type="text"
          placeholder="🟠 Search for your product by title"
          aria-label="Search"
          onChange={filterListProduct}
        />
        <ul className="navbar-nav ">
          <NavLink
            to="/"
            isActive={(match) => {
              if (match && match.isExact) setAll(false, false, true);
            }}
          >
            <li className={`nav-item ${home ? " active" : ""}`}>
              <a className="nav-link">
                <i className="fa fa-home"></i>
              </a>
            </li>
          </NavLink>
          <NavLink
            to="/admin"
            isActive={(match) => {
              if (match && match.isExact) setAll(false, true, false);
            }}
          >
            <li className={`nav-item ${admin ? " active" : ""}`}>
              <a className="nav-link">
                <i className="fa fa-pie-chart"></i>
              </a>
            </li>
          </NavLink>
        </ul>
        <form
          className="form-inline my-2 my-lg-0"
          onSubmit={(e) => e.preventDefault()}
        >
          <button
            className="btn btn-outline-warning my-2 my-sm-0 mr-2"
            data-toggle="modal"
            data-target="#login-register"
          >
            LOGIN <i className="fa fa-lock"></i>
          </button>
        </form>
      </div>

      <Modal
        id="login-register"
        title="Signin-Form"
        submitBtn="Connexion"
        submitIcon="reply"
      >
        <form onSubmit={handleSubmit} className="col-10 mx-auto">
          <div className="form-group d-flex align-items-center justify-content-around">
            <label className="border pl-3 pr-3 pt-1 pb-2 mt-2" htmlFor="em">
              <i className="fa fa-user "></i>
            </label>
            <input
              id="em"
              type="text"
              className="form-control ml-2"
              placeholder="Enter Your Email address"
              name="username"
              onChange={handleChage}
            />
          </div>
          <div className="form-group d-flex align-items-center justify-content-around">
            <label className="border pl-3 pr-3 pt-1 pb-2 mt-2" htmlFor="em">
              <i className="fa fa-lock "></i>
            </label>
            <input
              id="em"
              type="password"
              className="form-control ml-2"
              placeholder="Enter Your Password "
              name="password"
              onChange={handleChage}
            />
          </div>
          <a style={{ cursor: "pointer" }} className="text-secondary">
            {" "}
            Forget Password ?
          </a>
        </form>
      </Modal>
    </nav>
  );
}
