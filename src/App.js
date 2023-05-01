import React from 'react'
import Navbars from './component/Navbars'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Main , Routes, Route } from "react-router-dom";
import Home from './component/Home'
import About from './component/About';
import Contact from './component/Contact';
import Login from './component/Login';
import Register from './component/Register';
import Footer from './component/Footer';
import Errorpage from './screen/Errorpage';



export default function App() {
  return (
    <>
    <Main>
       <Navbars />
       <Routes>
          <Route path="/" element={<Home />}  /> 
          <Route path="/about" element={<About />} /> 
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/login" element={<Login />} /> 
          <Route path="/register" element={<Register />} /> 
          <Route path="*" element={<Errorpage />} /> 
          
       </Routes>
    </Main>
    <Footer />
    </>
  )
}
