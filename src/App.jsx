import React, { useState, useEffect } from "react";
import Navbar from "./Components/NavBar/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";

const App = () => {

  const [theme, setTheme] = useState('light');
  const [text, setText] = useState('a Developer');
  return (
    <Router>
      <div className="App">
        <div className={`container ${theme} ${text}`}>
          <Navbar theme={theme} setTheme={setTheme}/>
        </div>
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      </div>
    </Router>
  )
}

export default App