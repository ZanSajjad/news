import Login from "./components/Login";
import Signup from "./components/Signup";
// import Navbar from "./components/Navbar";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import News from "./components/News";
import Navbar from "./components/Navbar";

function App() {
  const pageSize = 12;
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<News key="general" pagesize={pageSize} category="general" />} />
        <Route path="/business" element={<News key="business" pagesize={pageSize} category="business" />} />
        <Route path="/entertainment" element={<News key="entertainment" pagesize={pageSize} category="entertainment" />} />
        <Route path="/health" element={<News key="health" pagesize={pageSize} category="health" />} />
        <Route path="/science" element={<News key="science" pagesize={pageSize} category="science" />} />
        <Route path="/general" element={<News key="general" pagesize={pageSize} category="general" />} />
        <Route path="/technology" element={<News key="technology" pagesize={pageSize} category="technology" />} />
        <Route path="/sports" element={<News key="sports" pagesize={pageSize} category="sports" />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />



    

      </Routes>
    </Router>
  );
}

export default App;
