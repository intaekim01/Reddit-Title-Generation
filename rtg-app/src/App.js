import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Placeholder from './Pages/Placeholder';
import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";

function App() {
  const [text, setText] = useState("")

  return (
   
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/placeholder' element={<Placeholder />} />
      </Routes>
    </>
    
  );
}


export default App;