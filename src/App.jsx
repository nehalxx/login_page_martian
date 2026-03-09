import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/section1/login';
import Navbar from './components/section1/navbar';
import Sec1cont from './components/section1/sec1cont';
import Sec1 from './components/section1/sec1'; // DELETE the 'sec1' (lowercase) line above this!
import Blank from './components/section1/blank';
import Home from './components/section1/home';

import Set2 from './components/section1/set2';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login page */}
        <Route path="/" element={<Login />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<Sec1 />} />

        {/* Navbar */}
        <Route path="/nav" element={<Navbar />} />

        {/* Blank page */}
        <Route path="/blank" element={<Blank />} />
        <Route path="/home" element={<Home/>} />
        
        <Route path="/fset" element={<Set2/>}/>
      
        
      </Routes>
      
      
    </BrowserRouter>
  )
}

export default App


