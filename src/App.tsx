// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <>
    <div className="w-full h-full">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          {/* <Route path="/EntryHome" element={<EntryHome />} /> */}
        </Routes>
      </Router>
    </div>
    </>
  );
}

export default App;
