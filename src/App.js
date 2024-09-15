import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./components/Login";
import Navbar from "./components/Navbar";

function App() {
  return (
<Router>
  <Navbar />
  <Routes>
    <Route path="/" element={<Login />}/>
  </Routes>
</Router>
  );
}


export default App;
