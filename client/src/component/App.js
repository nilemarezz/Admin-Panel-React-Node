import React, { useEffect } from "react";
import Header from "./Navbar/Header";
import Menu from "./Navbar/Menu";
import Footer from "./Navbar/Footer";
import Home from "./Layout/Home";
import Login from "./Login/Login";
import { connect } from "react-redux";
import { getAdminProfile } from "../actions/AuthAdminAction";
import { BrowserRouter, Route } from "react-router-dom";
import Profile from "./Layout/Profile";
import userTable from './Layout/CustomerTable'
import {GetItemAdmin} from '../actions/GetItemAdmin'
import FoodTable from './Layout/FoodTable'
import AdminTable from './Layout/AdminTable'
const App = props => {
  const getAllItems = async () => {
    await props.getAdminProfile();
    await props.GetItemAdmin();
  }
  

  useEffect(() => {
    getAllItems()
  }, []);

  

  if (!props.authAdmin.token || props.authAdmin.token === undefined ) {
    
    return <Login />;
  } else {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Menu />
            <Route path="/" component={Home} exact />
            <Route path="/profile" component={Profile} exact />
            <Route path="/CustomerTable" component={userTable} exact />
            <Route path="/FoodTable" component={FoodTable} exact />
            <Route path="/AdminTable" component={AdminTable} exact />
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
};
const mapStateToProps = state => {
  return state;
};
export default connect(
  mapStateToProps,
  { getAdminProfile ,GetItemAdmin}
)(App);
