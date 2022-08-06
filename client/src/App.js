import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import "./App.css";
import SignUp from "./SignUp";
import LogIn from "./LogIn";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="signup" element={<SignUp />} />
          <Route exact path="login" element={<LogIn />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
