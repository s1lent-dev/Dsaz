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
        <Route path="/Dsaz/Signup" element={<Signup />} />
        <Route path="/Dsaz/Signin" element={<Signin />} />
        <Route path="/Dsaz/" element={<Home />} />
        {isLogin ? (
          <Route path="/Dsaz/:id" element={<DsaSheet />} />
        ) : (
          <Route path="/Dsaz/:id" element={<Navigate to="/Dsaz/" />} />
        )}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
