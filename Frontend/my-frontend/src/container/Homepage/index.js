import React from "react";
import {
  Box,
  Typography,
  Button,
  Container,
} from "@mui/material";
import photo from "/Users/User/Desktop/Project/Frontend/my-frontend/src/Util/Image.jpg";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#fdfdfc" }}>
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
                display: "block",
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
              The most elegant way to catalog, track, and manage your personal
              book collection.
            </Typography>

            <Box
              sx={{
                display: "flex",
                gap: 2,
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              {!token ? (
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
              ) : (
                <Button
                  variant="contained"
                  onClick={() => navigate("/getBooks")}
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
                  View Gallery
                </Button>
              )}
            </Box>
          </Box>

          {/* Hero Image */}
          <Box
            sx={{
              flex: 1.2,
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
                height: "auto",
                borderRadius: "40px",
                boxShadow: "0px 30px 60px rgba(0,0,0,0.12)",
                transition: "transform 0.5s ease",
                "&:hover": { transform: "scale(1.02)" },
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Homepage;