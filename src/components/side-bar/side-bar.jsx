import "./side-bar.css";

export default function Sidebar() {
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
              className="img-responsive img-rounded"
              src="https://raw.githubusercontent.com/azouaoui-med/pro-sidebar-template/gh-pages/src/img/user.jpg"
              alt="User picture"
            />
          </div>
          <div className="user-info">
            <span className="user-name">
              Imad
              <strong>BMZ</strong>
            </span>
            <span className="user-role">Administrator</span>
            <span className="user-status">
              <i className="fa fa-circle" />
              <span>LOG OUT</span>
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
            <li className="sidebar-dropdown">
              <a href="#">
                <i className="fa fa-users" />
                <span>Users</span>
              </a>
            </li>
            <li className="sidebar-dropdown">
              <a href="#">
                <i className="fa fa-tshirt" />
                <span>Products</span>
              </a>
            </li>

            <li className="sidebar-dropdown">
              <a href="#">
                <i className="fa fa-list-alt " />
                <span>Category</span>
              </a>
            </li>
            <li className="sidebar-dropdown">
              <a href="#">
                <i className="fa fa-chart-line" />
                <span>Orders</span>
              </a>
            </li>
          </ul>
          <ul>
            <li className="header-menu">
              <span>Extra</span>
            </li>
            <li className="sidebar-dropdown">
              <a href="#">
                <i className="fa fa-shopping-cart" />
                <span>Shopping cart</span>
              </a>
            </li>
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