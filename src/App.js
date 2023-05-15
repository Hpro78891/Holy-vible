import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Ebook from "./pages/Ebook";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/about" element={<About />}></Route>
          <Route path="/ebook" element={<Ebook />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
