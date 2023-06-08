import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Header from "./components/header/Header";

import Home from "./components/content/home/Home";
import Contact from "./components/Contact";
import About from "./components/About";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div style={{ height: "auto" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}
