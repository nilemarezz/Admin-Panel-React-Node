import React,{useEffect} from "react";
import Header from "./Navbar/Header";
import Menu from "./Navbar/Menu";
import Footer from "./Navbar/Footer";
import Home from "./Layout/Home";
import Login from "./Login/Login";
import { connect } from "react-redux";
import {getAdminProfile} from '../actions/AuthAdminAction'
import { BrowserRouter, Route } from "react-router-dom";


const App = (props) => {
  useEffect(()=>{
    props.getAdminProfile()
  },[])
  
  if (props.token !== null) {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Menu />
          <Route path="/" component={Home} exact />

          <Footer />
        </div>
      </BrowserRouter>
    );
  } else {
    return (
      <div>
        <Login />
      </div>
    );
  }
};
const mapStateToProps = state => {
  return state;
};
export default connect(mapStateToProps,{getAdminProfile})(App);
