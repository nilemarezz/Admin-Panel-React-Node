import React from "react";

const Menu = () => {
  return (
    <div>
      <aside className="main-sidebar">
        {/* sidebar: style can be found in sidebar.less */}
        <section className="sidebar">
          {/* Sidebar user panel */}

          {/* /.search form */}
          {/* sidebar menu: : style can be found in sidebar.less */}
          <ul className="sidebar-menu" data-widget="tree">
            <li className="header">MAIN NAVIGATION</li>

            <li>
              <a href="pages/widgets.html">
                <i className="fa fa-dashboard" /> <span>DashBoard</span>
              </a>
            </li>
            <li className="treeview">
              <a href="#">
                <i className="fa fa-folder" />
                <span>Pages</span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right" />
                </span>
              </a>
              <ul className="treeview-menu">
                <li>
                  <a href="pages/charts/chartjs.html">
                    <i className="fa fa-circle-o" /> ChartJS
                  </a>
                </li>
                <li>
                  <a href="pages/charts/morris.html">
                    <i className="fa fa-circle-o" /> Morris
                  </a>
                </li>
                <li>
                  <a href="pages/charts/flot.html">
                    <i className="fa fa-circle-o" /> Flot
                  </a>
                </li>
                <li>
                  <a href="pages/charts/inline.html">
                    <i className="fa fa-circle-o" /> Inline charts
                  </a>
                </li>
              </ul>
            </li>

            <li className="treeview">
              <a href="#">
                <i className="fa fa-table" /> <span>Tables</span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right" />
                </span>
              </a>
              <ul className="treeview-menu">
                <li>
                  <a href="pages/tables/simple.html">
                    <i className="fa fa-circle-o" /> User Table
                  </a>
                </li>
                <li>
                  <a href="pages/tables/data.html">
                    <i className="fa fa-circle-o" /> Item Table
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </section>
        {/* /.sidebar */}
      </aside>
    </div>
  );
};

export default Menu;
