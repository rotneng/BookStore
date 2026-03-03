import React from "react";
import {
  Box,
  Typography,
  Button,
  IconButton,
  AppBar,
  Toolbar,
  Avatar,
  Tooltip,
} from "@mui/material";
// Modern alternative icons
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../src/Actions/auth.action";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const { user, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const hideNavbarPaths = ["/login", "/SignUp", "/signup"];

  if (hideNavbarPaths.includes(location.pathname)) {
    return null;
  }

  const handleLogout = async () => {
    await dispatch(logout(navigate));
  };

  const navItemStyle = {
    cursor: "pointer",
    fontWeight: 700,
    fontSize: "0.85rem",
    color: "white",
    textTransform: "uppercase",
    letterSpacing: "1px",
    position: "relative",
    transition: "all 0.3s ease",
    "&:after": {
      content: '""',
      position: "absolute",
      width: "0",
      height: "2px",
      bottom: "-4px",
      left: "0",
      backgroundColor: "white",
      transition: "width 0.3s ease",
    },
    "&:hover:after": {
      width: "100%",
    },
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        background: "linear-gradient(90deg, #7e7e66 0%, #6b6b57 100%)",
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        zIndex: 1100,
      }}
    >
      <Toolbar
        sx={{
          height: 80,
          justifyContent: "space-between",
          px: { xs: 2, md: 5 },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontFamily: "'Cursive', sans-serif",
            fontWeight: 900,
            cursor: "pointer",
            color: "white",
          }}
          onClick={() => navigate("/")}
        >
          Collective
        </Typography>

        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 4 }}>
          <Box sx={navItemStyle} onClick={() => navigate("/about")}>
            About
          </Box>
          <Box sx={navItemStyle} onClick={() => navigate("/getBooks")}>
            Library
          </Box>
          <Box sx={navItemStyle} onClick={() => navigate("/addBooks")}>
            Contribute
          </Box>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          {token ? (
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <Tooltip title="Log Out">
                <IconButton
                  onClick={handleLogout}
                  sx={{
                    color: "white",
                    backgroundColor: "rgba(255, 255, 255, 0.1)", // Glass effect
                    transition: "all 0.3s ease",
                    padding: "10px",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.2)",
                      transform: "rotate(90deg)", // Finer interaction
                      color: "#ffcdd2", // Subtle soft red tint on hover
                    },
                  }}
                >
                  <PowerSettingsNewIcon sx={{ fontSize: "1.3rem" }} />
                </IconButton>
              </Tooltip>

              <Box
                sx={{ display: "flex", alignItems: "center", ml: 1, gap: 1.5 }}
              >
                <Typography
                  variant="body2"
                  sx={{ fontWeight: 600, color: "white", opacity: 0.9 }}
                >
                  {user?.Name?.split(" ")[0]}
                </Typography>
                <Avatar
                  sx={{
                    width: 42,
                    height: 42,
                    bgcolor: "white",
                    color: "#7e7e66",
                    fontWeight: 800,
                    fontSize: "1rem",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                    border: "2px solid rgba(255,255,255,0.2)",
                  }}
                >
                  {user?.Name?.charAt(0) || "U"}
                </Avatar>
              </Box>
            </Box>
          ) : (
            <Button
              variant="contained"
              onClick={() => navigate("/login")}
              sx={{
                backgroundColor: "white",
                color: "#7e7e66",
                fontWeight: 800,
                borderRadius: "12px",
                px: 4,
                textTransform: "none",
                "&:hover": { backgroundColor: "#f0f0f0" },
              }}
            >
              Sign In
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
