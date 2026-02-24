import {
  Alert,
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../../Actions/auth.action";
import { useNavigate, useNavigation } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import PasswordIcon from "@mui/icons-material/Password";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import SecurityIcon from "@mui/icons-material/Security";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setshowPassword] = useState(false);

  const handleSubmit = async () => {
    try {
      const user = {
        email: email,
        password: password,
      };
      if (!email && !password) {
        setError("Fill all required Feilds");
      }
      if (email && !password) {
        setError("Password is required");
      }
      if (!email && password) {
        setError("Email is required");
      }
      await dispatch(login(user, navigate));
    } catch (err) {
      setError("unable to login");
      console.log("error in Login");
    }
  };
  return (
    <div className="login" style={{}}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          height: "100vh",
          backgroundColor: "white",
        }}
      >
        <Box
          sx={{
            width: "60%",
            padding: "20px",
            // border: "2px solid pink",
            boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
            borderRadius: "10px",
            // backgroundColor: "#ebe2e2",
          }}
        >
          <Box sx={{ pb: 3 }}>
            <Typography
              style={{
                fontSize: "35px",
                fontWeight: "bolder",
                color: "#7e7e66ff",
              }}
            >
              <SecurityIcon
                sx={{ fontSize: "30px", color: "#7e7e66ff", pr: 2 }}
              />
              Sign In
            </Typography>
          </Box>

          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {error && (
              <Alert
                sx={{ width: "50%", marginBottom: "20px" }}
                severity="error"
              >
                {error}
              </Alert>
            )}

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "50%",
              }}
            >
              <TextField
                label="Email Address"
                type="email"
                onChange={(text) => setEmail(text.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon sx={{ marginRight: "10px" }} />
                    </InputAdornment>
                  ),
                }}
              ></TextField>

              {/* <Typography
          style={{
            width: "100%",
            fontSize: "20px",
            fontWeight: "bold",
            color: "#141e74ff",
          }}
        >
          Password
        </Typography> */}
              <TextField
                type={showPassword ? "text" : "password"}
                label="Password"
                onChange={(text) => setPassword(text.target.value)}
                style={{ marginTop: "20px" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon sx={{ marginRight: "10px" }} />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <Button
                        onClick={() => {
                          setshowPassword(!showPassword);
                        }}
                      >
                        {showPassword ? (
                          <VisibilityOffIcon />
                        ) : (
                          <VisibilityIcon />
                        )}
                      </Button>
                    </InputAdornment>
                  ),
                }}
              ></TextField>
            </Box>
          </Box>
          <Box>
            <button
              style={{
                fontSize: "15px",
                fontWeight: "bold",
                borderRadius: 20,
                marginTop: 15,
                width: "30%",
                padding: 10,
                backgroundColor: "#7e7e66ff",
              }}
              onClick={handleSubmit}
            >
              Sign In
            </button>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Login;
