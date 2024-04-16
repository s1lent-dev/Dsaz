import React from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import DsaSheet from "./pages/DsaSheet/DsaSheet";
import Signup from "./auth/Signup/Signup";
import Signin from "./auth/Signin/Signin";

const App = () => {
  const isLogin = useSelector((state) => state.user.isLogin);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/" element={<Home />} />
        {isLogin ? (
          <Route path="/:id" element={<DsaSheet />} />
        ) : (
          <Route path="/:id" element={<Navigate to="/" />} />
        )}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
