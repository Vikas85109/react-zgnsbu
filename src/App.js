import React from 'react';
import './style.css';
import Home from './Component/Home';
import Contact from './Component/Contact';
import Aboutus from './Component/Aboutus';
import Navbar from './Component/Navbar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import SampleComponent from "./SampleComponent"
// import Todo from "./Todo"
export default function App() {
  return (
    <>
      <div>
        {/* <Home/>
      <Contact/>
      <Aboutus/> */}

        <Router>
          <Routes>
            <Route path="/"element={<Home />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/about" element={<Aboutus />}></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}
