
import React from 'react'
import {  Routes, Route } from "react-router-dom";
import Aboutpage from './pages/Aboutpage';
import Index from './pages/Index';
import Productpage from './pages/Productpage';
import Dashboard from './pages/Dashboard';
import AlertsPage from './pages/AlertsPage';
import Contactpage from './pages/Contactpage';
 import Login from './pages/Login';
 import Signup from './pages/Signup';


const App = () => {
  return (
    <>
      
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/> 
        <Route path="/product/:productId" element={<Productpage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/alerts" element={<AlertsPage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/contactus" element={<Contactpage />} />
        </Routes>
      
    </>
  )
}

export default App