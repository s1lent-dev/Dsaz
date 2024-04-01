import React from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import DsaSheet from "./pages/DsaSheet/DsaSheet";
import Signup from "./auth/Signup/Signup";
import Signin from "./auth/Signin/Signin";
const App = () => {
  const [islogin, setisLogin] = useState(false);
  return (
    <BrowserRouter>
      <Navbar setisLogin={setisLogin} />
      <Routes>
        <Route path="/Dsaz/Signup" element={<Signup />} />
        <Route path="/Dsaz/Signin" element={<Signin />} />
        <Route path="/Dsaz/" element={<Home islogin={islogin} />} />
        <Route path="/Dsaz/:id" element={<DsaSheet />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
