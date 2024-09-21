import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Home from "./Home"
import Details from "./components/Details";


function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
    </Router>
  );
}

export default App;
