import React from 'react'
import Header from './Navbar/Header'
import Menu from './Navbar/Menu'
import Footer from './Navbar/Footer'
import Home from './Layout/Home'
import Login from './Login/Login'
import { BrowserRouter, Route } from "react-router-dom";

const login = false;
const App = () => {
    if(login === true){
        return (
            <BrowserRouter>
            <div>
                <Header/>
                <Menu/>
                <Route path="/" component={Home} exact/>
                
                <Footer/>
            </div>
            </BrowserRouter>
        )
    }else{
        return (<div>
            <Login/>
        </div>)
    }
    
}

export default App;
