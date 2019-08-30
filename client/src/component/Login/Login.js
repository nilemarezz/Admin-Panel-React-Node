import React,{useState} from 'react'
import './Login.css'
import { Redirect } from "react-router-dom";
import {LoginUser} from '../../actions/AuthAdminAction'
import { connect } from "react-redux";
const Login = (props) => {
    const [user,setUser] = useState("");
    const [password,setPassword] = useState("") 

    const SubmitForm = async (e) =>{
        e.preventDefault()
        const User = {user:user,password:password}
        await props.LoginUser(User)
        window.location.reload();
        
    }
    return (
        <div class="login">
        <div class="login-triangle"></div>
        
        <h2 class="login-header">Admin Login</h2>
      
        <form class="login-container" onSubmit={SubmitForm}>
          <p><input type="text" placeholder="User" value={user} onChange={(e)=> setUser(e.target.value)}/></p>
          <p><input type="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)}/></p>
          <p><input type="submit" value="Log in"/></p>
        </form>
      </div>
    )
}
const mapStateToProps = state => {
  return state;
};
export default connect(mapStateToProps,{LoginUser})(Login);
