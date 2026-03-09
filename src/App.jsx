import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Navbar from "./components/Navbar";
import Registration from "./components/Registration";
import Home from "./Pages/Home";



function App() {
  return (
    <BrowserRouter>
       <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;