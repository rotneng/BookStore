import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import { pink } from "@mui/material/colors";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import SignUp from "./container/signUp";
import Homepage from "./container/Homepage";
import Login from "./container/Login/login";
import AddBooks from "./container/AddBooks";
import GetBooks from "./container/GetBooks";
import EditBooks from "./container/EditBooks";
function App() {
  return (
    <div className="App">
      {/* <Routes></Routes> */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/addBooks" element={<AddBooks />} />
        <Route path="/getBooks" element={<GetBooks />} />
        <Route path="/editBooks" element={<EditBooks />} />
      </Routes>
    </div>
  );
}

export default App;
