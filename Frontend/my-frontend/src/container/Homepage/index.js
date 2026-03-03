import {
  Box,
  Typography,
  Button,
  IconButton,
  AppBar,
  Toolbar,
  Container,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import TuneIcon from "@mui/icons-material/Tune";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import photo from "/Users/User/Desktop/Project/Frontend/my-frontend/src/Util/Image.jpg";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Actions/auth.action";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const { user, token, authenticated, loading, authCheck } = useSelector(
    (state) => state.auth,
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await dispatch(logout(navigate));
  };

  // Shared style for Nav Items
  const navItemStyle = {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    fontWeight: 700,
    fontSize: "0.9rem",
    color: "white",
    transition: "opacity 0.2s",
    "&:hover": { opacity: 0.8 },
  };

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#fdfdfc" }}>
      {/* Header / Navbar */}
      <AppBar
        position="sticky"
        sx={{ backgroundColor: "#7e7e66", elevation: 0 }}
      >
        <Toolbar sx={{ justifyContent: "space-between", px: { xs: 2, md: 5 } }}>
          {/* Logo */}
          <Typography
            variant="h4"
            sx={{
              fontFamily: "'Cursive', sans-serif",
              fontWeight: 900,
              letterSpacing: 1,
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
          >
            Homee
          </Typography>

          {/* Navigation Links */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 4 }}>
            <Box sx={navItemStyle}>
              About <KeyboardArrowDownIcon fontSize="small" />
            </Box>
            <Box sx={navItemStyle}>
              Contact <KeyboardArrowDownIcon fontSize="small" />
            </Box>
            <Box sx={navItemStyle} onClick={() => navigate("/addBooks")}>
              AddBooks <KeyboardArrowDownIcon fontSize="small" />
            </Box>
            <Box sx={navItemStyle} onClick={() => navigate("/getBooks")}>
              Books <KeyboardArrowDownIcon fontSize="small" />
            </Box>
            <Box sx={navItemStyle}>
              Staff <KeyboardArrowDownIcon fontSize="small" />
            </Box>
          </Box>

          {/* Icons */}
          <Box sx={{ display: "flex", gap: 1 }}>
            <IconButton color="inherit">
              <ShoppingCartCheckoutIcon />
            </IconButton>
            <IconButton color="inherit">
              <SearchIcon />
            </IconButton>
            <IconButton color="inherit">
              <TuneIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Container maxWidth="xl" sx={{ mt: { xs: 4, md: 10 } }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 4,
          }}
        >
          {/* Text Content */}
          <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 800,
                color: "#7e7e66",
                textTransform: "uppercase",
                mb: 1,
              }}
            >
              Homee Management
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontFamily: "'Cursive', sans-serif",
                fontWeight: 900,
                color: "#424242",
                mb: 2,
                lineHeight: 1.2,
              }}
            >
              Book Management <br /> System
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: "#757575", mb: 4, fontWeight: 500 }}
            >
              Add All Your Books And Manage Them Easily
            </Typography>

            {/* Action Buttons */}
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
                    borderRadius: "30px",
                    px: 4,
                    py: 1.5,
                    fontWeight: "bold",
                    "&:hover": { backgroundColor: "#6a6a56" },
                  }}
                >
                  Sign Up
                </Button>
              )}

              {token ? (
                <Button
                  variant="outlined"
                  onClick={handleLogout}
                  sx={{
                    borderColor: "#7e7e66",
                    color: "#7e7e66",
                    borderRadius: "30px",
                    px: 4,
                    py: 1.5,
                    fontWeight: "bold",
                    borderWidth: 2,
                    "&:hover": { borderWidth: 2, borderColor: "#6a6a56" },
                  }}
                >
                  Log Out
                </Button>
              ) : (
                <Button
                  variant="outlined"
                  onClick={() => navigate("/login")}
                  sx={{
                    borderColor: "#7e7e66",
                    color: "#7e7e66",
                    borderRadius: "30px",
                    px: 4,
                    py: 1.5,
                    fontWeight: "bold",
                    borderWidth: 2,
                    "&:hover": { borderWidth: 2, borderColor: "#6a6a56" },
                  }}
                >
                  Login
                </Button>
              )}
            </Box>
          </Box>

          {/* Hero Image */}
          <Box
            sx={{
              flex: 1,
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              src={photo}
              alt="Hero"
              sx={{
                width: "100%",
                maxWidth: 600,
                height: "auto",
                borderRadius: "32px",
                boxShadow: "20px 20px 60px #d9d9d8, -20px -20px 60px #ffffff", // Soft neumorphic shadow
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Homepage;
