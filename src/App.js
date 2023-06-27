import Profile from "./portfoliocontainer/Home/Profile";
import Navbar from "./portfoliocontainer/Navbar/Navbar";
import "./App.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ContactMe from "./portfoliocontainer/Contactme/Contactme";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Aboutme from "./portfoliocontainer/Aboutme/Aboutme";
import Home from "./portfoliocontainer/Home/Home";
function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Aboutme" element={<Aboutme />} />
          <Route path="/Contact" element={<ContactMe />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
