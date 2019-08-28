import React from 'react'
import Header from './Navbar/Header'
import Menu from './Navbar/Menu'
import Footer from './Navbar/Footer'
import Home from './Layout/Home'
import { BrowserRouter, Route } from "react-router-dom";
const App = () => {
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
}

export default App;
