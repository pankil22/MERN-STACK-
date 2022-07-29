import React from 'react'
import {Routes,Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Logout from "./components/Logout";
import Reset from "./components/Reset";
import NewPassword from "./components/NewPassword";
import ChangePassword from './components/ChangePassword';

import Errorpage from './components/Errorpage';

const App = () => {

  return (
    <>
    <Navbar />

    <Routes>  
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/logout" element={<Logout />} />
    <Route exact path="/reset" element={<Reset />} />
    <Route path="/reset/:resetLink" element={<NewPassword />} />
    <Route path="*" element={<Errorpage/>}/>
    </Routes>
    </>
  )
}

export default App