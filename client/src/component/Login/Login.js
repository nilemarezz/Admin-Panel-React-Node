import React,{useState} from 'react'
import './Login.css'
import { Redirect } from "react-router-dom";
const Login = () => {
    const [user,setUser] = useState("");
    const [password,setPassword] = useState("") 

    const SubmitForm = (e) =>{
        e.preventDefault()
        console.log(user,password)
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

export default Login;
