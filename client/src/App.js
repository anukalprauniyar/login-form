import React from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";
import { Routes, Route, BrowserRouter } from "react-router-dom";



const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes> 
      </BrowserRouter>
    </>
  );
};

export default App;
