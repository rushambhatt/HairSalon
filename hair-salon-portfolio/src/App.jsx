import PhotoCard from "./components/PhotoCard"
import Home from "./pages/Home"
import {Routes, Route} from "react-router-dom"
import './App.css'
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import NavBar from "./components/NavBar";

function App() {

  const photoNumber = 1;

  return (
    <div>
      <NavBar />
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/portfolio" element={<Portfolio />}/>
      </Routes>
    </main>
    </div>
  );
}

export default App
