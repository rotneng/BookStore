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
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import LogoutIcon from "@mui/icons-material/Logout";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../src/Actions/auth.action";
import { useNavigate, useLocation } from "react-router-dom"; // Added useLocation

const Navbar = () => {
  const { user, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation(); // Hook to get current path

  // Define which paths should NOT have a navbar
  const hideNavbarPaths = ["/login", "/SignUp", "/signup"];

  // If the current path is in our list, don't render anything
  if (hideNavbarPaths.includes(location.pathname)) {
    return null;
  }

  const handleLogout = async () => {
    await dispatch(logout(navigate));
  };

  const navItemStyle = {
    display: "flex",
    alignItems: "center",
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
        borderBottom: "1px solid rgba(255,255,255,0.1)",
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
            letterSpacing: -1,
            cursor: "pointer",
            color: "white",
          }}
          onClick={() => navigate("/")}
        >
          Homee
        </Typography>

        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 4 }}>
          <Box sx={navItemStyle}>
            About <KeyboardArrowDownIcon fontSize="small" />
          </Box>
          <Box sx={navItemStyle} onClick={() => navigate("/getBooks")}>
            Library
          </Box>
          <Box sx={navItemStyle} onClick={() => navigate("/addBooks")}>
            Contribute
          </Box>
          <Box sx={navItemStyle}>Staff</Box>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <IconButton
            sx={{ color: "white", opacity: 0.8, "&:hover": { opacity: 1 } }}
          >
            <SearchIcon fontSize="small" />
          </IconButton>
          <IconButton
            sx={{ color: "white", opacity: 0.8, "&:hover": { opacity: 1 } }}
          >
            <ShoppingCartCheckoutIcon fontSize="small" />
          </IconButton>

          <Box
            sx={{
              width: "1px",
              height: "24px",
              backgroundColor: "rgba(255,255,255,0.3)",
              mx: 1,
            }}
          />

          {token ? (
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Tooltip title="Logout">
                <IconButton onClick={handleLogout} sx={{ color: "white" }}>
                  <LogoutIcon fontSize="small" />
                </IconButton>
              </Tooltip>
              <Avatar
                sx={{
                  width: 38,
                  height: 38,
                  bgcolor: "white",
                  color: "#7e7e66",
                  fontWeight: "bold",
                  border: "2px solid rgba(255,255,255,0.2)",
                }}
              >
                {user?.Name?.charAt(0) || "U"}
              </Avatar>
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
                px: 3,
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
