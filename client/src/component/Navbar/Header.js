import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
const Header = props => {
  const SignOut = async () => {
    await localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div>
      <header className="main-header">
        {/* Logo */}
        <Link to="/"  className="logo">
          {/* mini logo for sidebar mini 50x50 pixels */}
          <span className="logo-mini">
            <b>Ad</b>
          </span>
          {/* logo for regular state and mobile devices */}
          <span className="logo-lg">
            <b>Admin</b>Panel
          </span>
        </Link>
        {/* Header Navbar: style can be found in header.less */}
        <nav className="navbar navbar-static-top">
          {/* Sidebar toggle button*/}
          <a
            href="#"
            className="sidebar-toggle"
            data-toggle="push-menu"
            role="button"
          >
            <span className="sr-only">Toggle navigation</span>
          </a>
          {/* Navbar Right Menu */}
          <div className="navbar-custom-menu">
            <ul className="nav navbar-nav">
              {/* User Account: style can be found in dropdown.less */}
              <li className="dropdown user user-menu">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  <span className="hidden-xs">{props.name}</span>
                </a>
                <ul className="dropdown-menu">
                  {/* User image */}
                  <li className="user-header">
                    <p>
                      {props.name} - {props.department}
                    </p>
                  </li>

                  {/* Menu Footer*/}
                  <li className="user-footer">
                    <div className="pull-left">
                      <Link to="/profile" className="btn btn-default btn-flat">
                        Profile
                      </Link>
                    </div>
                    <div className="pull-right">
                      <button
                        className="btn btn-default btn-flat"
                        onClick={SignOut}
                      >
                        Sign out
                      </button>
                    </div>
                  </li>
                </ul>
              </li>
              {/* Control Sidebar Toggle Button */}
              
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};
const mapStateToProps = state => {
  return state.authAdmin.user;
};
export default connect(mapStateToProps)(Header);
