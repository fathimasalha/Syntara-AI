import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Signup from "./components/signup";
import ForgotPwd from "./components/ForgotPwd";
import ResetPwd from "./components/ResetPwd";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPwd />} />
        <Route path="/reset-password" element={<ResetPwd />} />
      </Routes>
    </Router>
  );
}

export default App;
