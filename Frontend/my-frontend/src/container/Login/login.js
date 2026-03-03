import {
  Alert,
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
  IconButton,
  Paper,
} from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../Actions/auth.action";
import { useNavigate } from "react-router-dom";

// Finer Icon Selections
import HubIcon from "@mui/icons-material/Hub";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import LoginIcon from "@mui/icons-material/Login";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setshowPassword] = useState(false);

  const handleSubmit = async () => {
    try {
      const user = { email, password };

      if (!email && !password) {
        return setError("Fill all required Fields");
      }
      if (email && !password) {
        return setError("Password is required");
      }
      if (!email && password) {
        return setError("Email is required");
      }

      await dispatch(login(user, navigate));
    } catch (err) {
      setError("Unable to login");
      console.log("error in Login");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#f4f7f6", // Matching SignUp background
        p: 2,
      }}
    >
      <Paper
        elevation={0}
        sx={{
          width: "100%",
          maxWidth: 450,
          padding: { xs: 4, md: 6 },
          borderRadius: "32px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          border: "1px solid #e0e0e0",
          background: "rgba(255, 255, 255, 0.9)",
          backdropFilter: "blur(10px)",
        }}
      >
        {/* Header Section */}
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <HubIcon sx={{ fontSize: 48, color: "#7e7e66", mb: 1 }} />
          <Typography
            variant="h4"
            sx={{
              fontWeight: 900,
              color: "#424242",
              letterSpacing: "-1px",
            }}
          >
            Welcome Back
          </Typography>
          <Typography variant="body2" sx={{ color: "#757575", mt: 1 }}>
            Please enter your details to sign in
          </Typography>
        </Box>

        {/* Error Message */}
        {error && (
          <Alert
            severity="error"
            sx={{ width: "100%", mb: 3, borderRadius: "12px" }}
          >
            {error}
          </Alert>
        )}

        {/* Form Fields */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 2.5,
          }}
        >
          <TextField
            fullWidth
            label="Email Address"
            variant="outlined"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AlternateEmailIcon sx={{ color: "#7e7e66", fontSize: 22 }} />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            fullWidth
            label="Password"
            variant="outlined"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FingerprintIcon sx={{ color: "#7e7e66", fontSize: 22 }} />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setshowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Button
            fullWidth
            variant="contained"
            size="large"
            onClick={handleSubmit}
            startIcon={<LoginIcon />}
            sx={{
              mt: 2,
              py: 1.8,
              fontSize: "1rem",
              fontWeight: 700,
              borderRadius: "16px",
              backgroundColor: "#7e7e66",
              textTransform: "none",
              boxShadow: "0 8px 16px -4px rgba(126, 126, 102, 0.3)",
              "&:hover": {
                backgroundColor: "#6a6a56",
                boxShadow: "0 12px 20px -4px rgba(126, 126, 102, 0.4)",
              },
            }}
          >
            Sign In
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Login;
