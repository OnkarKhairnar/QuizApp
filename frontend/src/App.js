import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Future pages: Login, Quiz, Admin */}
      {/* <Route path="/login" element={<Login />} /> */}
    </Routes>
  );
};

export default App;
