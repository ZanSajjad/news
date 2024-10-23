import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Footer from "./components/Footer";
import News from "./components/News";
import Navbar from "./components/Navbar";

function App() {
  const pageSize = 12;
  const [mode, setMode] = useState("light");

  const togglemode = () => {
    if (mode === "dark") {
      document.body.style.backgroundColor = "#FFFFFF";
      document.body.style.color = "black";
      setMode("light");
    } else {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      setMode("dark");
    }
  };

  return (
    <Router>
      <AppContent mode={mode} togglemode={togglemode} pageSize={pageSize} />
    </Router>
  );
}

function AppContent({ mode, togglemode, pageSize }) {
  const location = useLocation();

  // Set the footer position based on the route.
  const position = location.pathname === "/login" || location.pathname === "/signup" ? "fixed bottom-0" : "static";

  return (
    <>
      <Navbar mode={mode} togglemode={togglemode} />
      <Routes>
        <Route
          path="/"
          element={
            <News
              key="general"
              pagesize={pageSize}
              category="general"
              mode={mode}
            />
          }
        />
        <Route
          path="/business"
          element={
            <News
              key="business"
              pagesize={pageSize}
              category="business"
              mode={mode}
            />
          }
        />
        <Route
          path="/entertainment"
          element={
            <News
              key="entertainment"
              pagesize={pageSize}
              category="entertainment"
              mode={mode}
            />
          }
        />
        <Route
          path="/health"
          element={
            <News
              key="health"
              pagesize={pageSize}
              category="health"
              mode={mode}
            />
          }
        />
        <Route
          path="/science"
          element={
            <News
              key="science"
              pagesize={pageSize}
              category="science"
              mode={mode}
            />
          }
        />
        <Route
          path="/general"
          element={
            <News
              key="general"
              pagesize={pageSize}
              category="general"
              mode={mode}
            />
          }
        />
        <Route
          path="/technology"
          element={
            <News
              key="technology"
              pagesize={pageSize}
              category="technology"
              mode={mode}
            />
          }
        />
        <Route
          path="/sports"
          element={
            <News
              key="sports"
              pagesize={pageSize}
              category="sports"
              mode={mode}
            />
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer position={position} />
    </>
  );
}

export default App;
