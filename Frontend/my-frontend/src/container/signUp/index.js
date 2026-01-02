import { useState } from "react";
import {
  Alert,
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { pink } from "@mui/material/colors";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../Actions/auth.action";
import DnsIcon from "@mui/icons-material/Dns";
import PersonIcon from "@mui/icons-material/Person";
import ContactsIcon from "@mui/icons-material/Contacts";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [Name, setName] = useState("");
  const [userName, setuserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setshowPassword] = useState(false);
  const [error, setError] = useState("");
  // console.log("Name", name);
  // const form = new FormData()
  const handleRegistration = async () => {
    // if (!Name || !userName || !phoneNumber || !email || !password) {
    // alert("Please fill in all fields before submitting.");
    if (!Name) {
      setError("Name is required", error);
      return;
    }
    if (!userName) {
      setError("Username is required");
      return;
    }
    if (!phoneNumber) {
      setError("PhoneNumber is required");
      return;
    }
    if (!email) {
      setError("Email is required");
      return;
    }
    if (password) {
      if (password.length < 8) {
        setError("Password should be at least 8 digits");
      }
    } else {
      setError("Password is required");
    }
    console.log("error message", error);

    try {
      const user = {
        Name: Name,
        userName: userName,
        phoneNumber: phoneNumber,
        email: email,
        password: password,
      };
      console.log("user info", user);

      await dispatch(signUp(user, navigate));
    } catch (error) {
      console.log("error in Sign Up");
    }
    // try{
    //   const user = {
    //     Name:Name,
    //     userName: userName,
    //     phoneNumber: phoneNumber,
    //     email: email,
    //     password: password
    //   }
    //   console.log("button clicked");
    //   // const form = new FormData()
    //   // form.append("name", name)
    //   // form.append("userName", userName)
    //   // form.append("phoneNumber", phoneNumber)
    //   // form.append("email", email)
    //   // form.append("password", password)
    //   console.log("form data loaded", user);
    //   const response = await axios.post("http://localhost:3001/auth/signUp", user)
    //   if (response.status == 201){
    //     console.log("response shown", response.data);
    //     window.location.href = "/login"
    //   } else{
    //     console.log("response not shown");
    //   }
    // }catch(e) {
    //   console.log("there was an error", e)
    // }
  };

  return (
    <div className="App">
      <Box>
        <h1
          style={{
            fontSize: 35,
            fontWeight: "bold",
            color: "#7e7e66ff",
          }}
        >
          SIGNUP PAGE
        </h1>
      </Box>

      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {error && (
          <Alert sx={{ width: "50%", marginBottom: "20px" }} severity="error">
            {error}
          </Alert>
        )}

        <TextField
          type="text"
          label="Name"
          onChange={(text) => setName(text.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <DnsIcon />
              </InputAdornment>
            ),
          }}
          sx={{ marginTop: "20px", width: "50%" }}
        >
          Name
        </TextField>

        <TextField
          type="text"
          label="Username"
          onChange={(text) => setuserName(text.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon />
              </InputAdornment>
            ),
          }}
          sx={{ marginTop: "20px", width: "50%" }}
        >
          UserName
        </TextField>

        <TextField
          type="tel"
          label="PhoneNumber"
          onChange={(text) => setPhoneNumber(text.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <ContactsIcon />
              </InputAdornment>
            ),
          }}
          sx={{ marginTop: "20px", width: "50%" }}
        >
          PhoneNumber
        </TextField>

        <TextField
          type="email"
          label="Email"
          onChange={(text) => setEmail(text.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            ),
          }}
          sx={{ marginTop: "20px", width: "50%" }}
        >
          E-mail
        </TextField>

        <TextField
          type={showPassword ? "text" : "password"}
          label="Password"
          onChange={(text) => setPassword(text.target.value)}
          style={{ marginTop: "20px", width: "50%" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <Button
                  onClick={() => {
                    setshowPassword(!showPassword);
                  }}
                >
                  {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </Button>
              </InputAdornment>
            ),
          }}
        ></TextField>
      </Box>

      <Box>
        <Button
          style={{
            fontSize: 30,
            fontWeight: "bold",
            color: "white",
            textAlign: "left",
            paddingLeft: 20,
            paddingRight: 20,
            borderRadius: 20,
            backgroundColor: "#7e7e66ff",
            marginTop: 15,
          }}
          onClick={handleRegistration}
        >
          SIGNUP
        </Button>
      </Box>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Today
        </a>
      </header> */}
    </div>
  );
};

export default SignUp;
