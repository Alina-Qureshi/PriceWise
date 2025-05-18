
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
 import Searchpage from './components/Home/Searchpage';
import Featuredproducts from './components/Home/Featuredproducts';
import NewAlert from './pages/NewAlert';
import Searchresult from './pages/Searchresult';
import Faqs from './pages/Faqs';


const App = () => {
  return (
    <>
      
        <Routes>
        <Route path="/electronics" element={<Featuredproducts/>}/>
          <Route path="/beauty" element={< Featuredproducts/>} />
          <Route path="/sports" element={< Featuredproducts/>}/>
          <Route path="/fashion" element={<Featuredproducts/>}/> 
          <Route path="/home" element={<Featuredproducts/>}/> 

          <Route path="/search" element={<Searchpage/>}/>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/> 
        <Route path="/alerts/:productId" element={<Productpage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/alerts" element={<AlertsPage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/contactus" element={<Contactpage />} />
          <Route path="/alerts/new" element={<NewAlert />} />
          <Route path="/Searchresult" element={<Searchresult />} />
          <Route path="/faq" element={<Faqs />} />
        </Routes>
      
    </>
  )
}

export default App