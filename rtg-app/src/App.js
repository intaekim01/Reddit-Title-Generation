import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import TitleGenerator from './Pages/TitleGenerator';
import About from './Pages/About';
import Team from './Pages/Team';
import ComingSoon from './Pages/ComingSoon';
import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";

function App() {

  const [post, setPost] = useState("");

  return (
   
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/title_generator' element={<TitleGenerator post={post} setPost={setPost}/>} />
        <Route path='/about' element={<About />} />
        <Route path='/team' element={<Team />} />
        <Route path='/coming_soon' element={<ComingSoon />} />
      </Routes>
      <Footer></Footer>
    </>
    
  );
}


export default App;