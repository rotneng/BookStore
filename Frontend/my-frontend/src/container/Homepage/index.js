import {
  Box,
  Typography,
  Button,
  IconButton,
  AppBar,
  Toolbar,
  Container,
  Avatar,
  Tooltip,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import TuneIcon from "@mui/icons-material/Tune";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import LogoutIcon from "@mui/icons-material/Logout";
import photo from "/Users/User/Desktop/Project/Frontend/my-frontend/src/Util/Image.jpg";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Actions/auth.action";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const { user, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    <Box sx={{ minHeight: "100vh", backgroundColor: "#fdfdfc" }}>
      {/* Finer Header / Navbar */}
      <AppBar
        position="sticky"
        sx={{
          background: "linear-gradient(90deg, #7e7e66 0%, #6b6b57 100%)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <Toolbar sx={{ height: 80, justifyContent: "space-between", px: { xs: 2, md: 5 } }}>
          {/* Logo */}
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

          {/* Navigation Links */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 4 }}>
            <Box sx={navItemStyle}>About <KeyboardArrowDownIcon fontSize="small" /></Box>
            <Box sx={navItemStyle} onClick={() => navigate("/getBooks")}>Library</Box>
            <Box sx={navItemStyle} onClick={() => navigate("/addBooks")}>Contribute</Box>
            <Box sx={navItemStyle}>Staff</Box>
          </Box>

          {/* Action Icons & Profile */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <IconButton sx={{ color: "white", opacity: 0.8, "&:hover": { opacity: 1 } }}>
              <SearchIcon fontSize="small" />
            </IconButton>
            <IconButton sx={{ color: "white", opacity: 0.8, "&:hover": { opacity: 1 } }}>
              <ShoppingCartCheckoutIcon fontSize="small" />
            </IconButton>
            
            <Box sx={{ width: "1px", height: "24px", backgroundColor: "rgba(255,255,255,0.3)", mx: 1 }} />

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
                    border: "2px solid rgba(255,255,255,0.2)"
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
                  "&:hover": { backgroundColor: "#f0f0f0" }
                }}
              >
                Sign In
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Container maxWidth="xl" sx={{ mt: { xs: 4, md: 10 }, pb: 10 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 8,
          }}
        >
          {/* Text Content */}
          <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
            <Typography
              variant="overline"
              sx={{
                fontWeight: 800,
                color: "#7e7e66",
                letterSpacing: 2,
                mb: 1,
                display: "block"
              }}
            >
              Premium Library Management
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontFamily: "'Cursive', sans-serif",
                fontWeight: 900,
                color: "#424242",
                mb: 2,
                fontSize: { xs: "3rem", md: "4.5rem" },
                lineHeight: 1.1,
              }}
            >
              Organize Your <br /> Universe
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: "#757575", mb: 5, fontWeight: 400, maxWidth: "500px" }}
            >
              The most elegant way to catalog, track, and manage your personal book collection.
            </Typography>

            <Box
              sx={{
                display: "flex",
                gap: 2,
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              {!token && (
                <Button
                  variant="contained"
                  onClick={() => navigate("/SignUp")}
                  sx={{
                    backgroundColor: "#7e7e66",
                    borderRadius: "12px",
                    px: 4,
                    py: 1.8,
                    fontWeight: "bold",
                    boxShadow: "0 10px 20px rgba(126, 126, 102, 0.3)",
                    "&:hover": { backgroundColor: "#6a6a56" },
                  }}
                >
                  Start For Free
                </Button>
              )}
              {token && (
                <Button
                    variant="contained"
                    onClick={() => navigate("/getBooks")}
                    sx={{
                      backgroundColor: "#7e7e66",
                      borderRadius: "12px",
                      px: 4,
                      py: 1.8,
                      fontWeight: "bold",
                      "&:hover": { backgroundColor: "#6a6a56" },
                    }}
                  >
                    View Gallery
                  </Button>
              )}
            </Box>
          </Box>

          {/* Hero Image */}
          <Box sx={{ flex: 1.2, width: "100%", display: "flex", justifyContent: "center" }}>
            <Box
              component="img"
              src={photo}
              alt="Hero"
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: "40px",
                boxShadow: "0px 30px 60px rgba(0,0,0,0.12)",
                transition: "transform 0.5s ease",
                "&:hover": { transform: "scale(1.02)" }
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Homepage;