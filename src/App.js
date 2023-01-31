import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Content from "./components/Content";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Content />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
