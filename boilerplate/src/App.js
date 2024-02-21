import logo from './logo.svg';
import './App.css';
import './pages/global/styles.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./pages/global/components/NavBar";
import Home from "./pages/home/componenets/home";
import Page1 from "./pages/page1/page1";
import Page2 from "./pages/page2/page2";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />

      </header>
      <div className="App-body">
        <Router>
          <Routes>
            <Route path="/page1" element={<Page1 />} />
            <Route path="/" element={<Home />} />
            <Route path="/page2" element={<Page2 />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
