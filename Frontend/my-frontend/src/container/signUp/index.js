import { useState } from "react";
import {
  Alert,
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  Paper,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../Actions/auth.action";

// Finer Icon Selections
import HubIcon from "@mui/icons-material/Hub";
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import BadgeIcon from "@mui/icons-material/Badge";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

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

  const handleRegistration = async () => {
    if (!Name) return setError("Name is required");
    if (!userName) return setError("Username is required");
    if (!phoneNumber) return setError("PhoneNumber is required");
    if (!email) return setError("Email is required");
    if (password) {
      if (password.length < 8)
        return setError("Password should be at least 8 digits");
    } else {
      return setError("Password is required");
    }

    try {
      const user = { Name, userName, phoneNumber, email, password };
      await dispatch(signUp(user, navigate));
    } catch (error) {
      console.log("error in Sign Up");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f4f7f6",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 2,
      }}
    >
      <Paper
        elevation={0}
        sx={{
          width: "100%",
          maxWidth: 500,
          padding: { xs: 4, md: 6 },
          borderRadius: "32px",
          textAlign: "center",
          border: "1px solid #e0e0e0", // Clean subtle border
          background: "rgba(255, 255, 255, 0.9)",
          backdropFilter: "blur(10px)",
        }}
      >
        {/* Header Icon & Title */}
        <Box sx={{ mb: 4 }}>
          <HubIcon sx={{ fontSize: 48, color: "#7e7e66", mb: 1 }} />
          <Typography
            variant="h4"
            sx={{ fontWeight: 900, color: "#424242", letterSpacing: "-1px" }}
          >
            Create Account
          </Typography>
          <Typography variant="body2" sx={{ color: "#757575", mt: 1 }}>
            Join our community today
          </Typography>
        </Box>

        {error && (
          <Alert severity="error" sx={{ mb: 3, borderRadius: "12px" }}>
            {error}
          </Alert>
        )}

        <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
          <TextField
            fullWidth
            label="Full Name"
            onChange={(e) => setName(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FaceRetouchingNaturalIcon
                    sx={{ color: "#7e7e66", fontSize: 22 }}
                  />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            fullWidth
            label="Username"
            onChange={(e) => setuserName(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <BadgeIcon sx={{ color: "#7e7e66", fontSize: 22 }} />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            fullWidth
            label="Phone Number"
            onChange={(e) => setPhoneNumber(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LocalPhoneIcon sx={{ color: "#7e7e66", fontSize: 22 }} />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            fullWidth
            label="Email"
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
            type={showPassword ? "text" : "password"}
            label="Password"
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
            variant="contained"
            fullWidth
            onClick={handleRegistration}
            startIcon={<AppRegistrationIcon />}
            sx={{
              mt: 2,
              backgroundColor: "#7e7e66",
              color: "white",
              fontSize: "1rem",
              fontWeight: 700,
              borderRadius: "16px",
              py: 1.8,
              textTransform: "none",
              boxShadow: "0 8px 16px -4px rgba(126, 126, 102, 0.3)",
              "&:hover": {
                backgroundColor: "#6a6a56",
                boxShadow: "0 12px 20px -4px rgba(126, 126, 102, 0.4)",
              },
            }}
          >
            Register Now
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default SignUp;
