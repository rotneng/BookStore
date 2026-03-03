import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar"; 
import Homepage from "./container/Homepage";
import SignUp from "./container/signUp";
import Login from "./container/Login/login";
import AddBooks from "./container/AddBooks";
import GetBooks from "./container/GetBooks";
import EditBooks from "./container/EditBooks";

function App() {
  return (
    <div className="App">
      <Navbar /> {/* This stays on all pages */}
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