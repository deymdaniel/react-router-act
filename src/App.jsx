import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login setAuth={setIsAuthenticated} />} />
        <Route
          path='/home'
          element={isAuthenticated ? <Home /> : <Navigate to='/' />}
        />
        <Route
          path='/about'
          element={isAuthenticated ? <About /> : <Navigate to='/' />}
        />
        <Route
          path='/contact'
          element={isAuthenticated ? <Contact /> : <Navigate to='/' />}
        />
      </Routes>
    </Router>
  );
}

export default App;
