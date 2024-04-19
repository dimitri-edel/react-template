import './App.css';
// import './pages/global/styles.css';
import DarkTheme from './pages/global/dark.css';
import LightTheme from './pages/global/light.css';
import { useEffect } from "react";
import React from "react";
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./pages/global/components/NavBar";
import Home from "./pages/home/componenets/home";
import Page1 from "./pages/page1/page1";
import Page2 from "./pages/page2/page2";


function App() {
  const [theme, setTheme] = useState("light");
  // An array of 25 first names sorted alphabetically
  const names = ["Adam", "Bob", "Charlie", "David", "Eve", "Frank", "George", "Helen", "Ivy", "Jack", "Karl", "Liam", "Megan", "Nancy", "Oliver", "Pamela", "Quinn", "Robert", "Samantha", "Tina", "Ursula", "Victor", "Wendy", "Xander", "Yvonne", "Zach"];  
  // A function to sort an array in ascending order
  function sortArray(arr) {
    return arr.sort();
  }
   

  useEffect(() => {
    
  }, [theme]);

  return (
    <div className="App">
      <header className="App-header">
        <NavBar setTheme={setTheme} />

      </header>
      <div className="App-body">
        <Router>
          <Routes>
            <Route path="/page1" element={<Page1 />} />
            <Route path="/" element={<Home theme={theme} />} />
            <Route path="/page2" element={<Page2 theme={theme} />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
