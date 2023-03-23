import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./app.scss";
import Home from "./components/Home/Home";
import Profile from './components/Profile';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/user/:userId/*" element={<Profile />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
