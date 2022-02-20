import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./screens/Home";
import Login from "./screens/Login";
import AddPost from "./screens/AddPost";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/addpost" element={<AddPost />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
