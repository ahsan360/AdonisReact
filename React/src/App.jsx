import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "./Form";
import Table from "./Table";
import UserForm from "./UserForm";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  Navigate,
} from "react-router-dom";
import AddInfo from "./AddInfo";
import Home from "./Home";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addinfo" element={<AddInfo />} />
          <Route path="/showinfo" element={<Table />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
