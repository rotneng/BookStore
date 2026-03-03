import React from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Paper,
  Divider,
} from "@mui/material";
import photo from "/Users/User/Desktop/Project/Frontend/my-frontend/src/Util/Image.jpg";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// Icons for the features section
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import SearchIcon from "@mui/icons-material/Search";
import SpeedIcon from "@mui/icons-material/Speed";

const Homepage = () => {
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const features = [
    {
      icon: <LibraryBooksIcon sx={{ fontSize: 45, color: "#7e7e66" }} />,
      title: "Curation",
      desc: "Beautifully organize your titles with custom genres and high-quality cover art.",
    },
    {
      icon: <SearchIcon sx={{ fontSize: 45, color: "#7e7e66" }} />,
      title: "Instant Search",
      desc: "Find any book in your collection within seconds by title or author.",
    },
    {
      icon: <SpeedIcon sx={{ fontSize: 45, color: "#7e7e66" }} />,
      title: "Real-time Sync",
      desc: "Access your library from any device with our seamless cloud integration.",
    },
  ];

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#fdfdfc" }}>
      {/* 1. Hero Section */}
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
              sx={{
                color: "#757575",
                mb: 5,
                fontWeight: 400,
                maxWidth: "500px",
              }}
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
                    textTransform: "none",
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
                    textTransform: "none",
                    boxShadow: "0 10px 20px rgba(126, 126, 102, 0.3)",
                    "&:hover": { backgroundColor: "#6a6a56" },
                  }}
                >
                  View Your Gallery
                </Button>
              )}
            </Box>
          </Box>

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
                maxWidth: "600px",
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

      {/* 2. Features Section - CENTRALIZED */}
      <Box sx={{ backgroundColor: "#f7f7f2", py: 15 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 10 }}>
            <Typography
              variant="h3"
              sx={{ fontWeight: 900, color: "#424242", mb: 2 }}
            >
              Why Choose Collective Gallery?
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#757575", maxWidth: "600px", mx: "auto" }}
            >
              Experience a sophisticated environment designed for the modern
              bibliophile.
            </Typography>
          </Box>

          <Grid
            container
            spacing={4}
            justifyContent="center" // Centers the grid items horizontally
            alignItems="stretch" // Ensures all cards are same height
          >
            {features.map((f, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={index}
                sx={{ display: "flex" }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 6,
                    flex: 1, // Ensures paper fills the grid height
                    textAlign: "center",
                    borderRadius: "32px",
                    backgroundColor: "white",
                    border: "1px solid #ececeb",
                    boxShadow: "0px 10px 30px rgba(0,0,0,0.02)",
                    transition: "all 0.4s ease-in-out",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    "&:hover": {
                      transform: "translateY(-12px)",
                      boxShadow: "0px 20px 40px rgba(0,0,0,0.08)",
                      borderColor: "#7e7e66",
                    },
                  }}
                >
                  <Box
                    sx={{
                      mb: 3,
                      backgroundColor: "#fdfdfc",
                      p: 2,
                      borderRadius: "20px",
                      boxShadow: "inset 0px 4px 10px rgba(0,0,0,0.03)",
                    }}
                  >
                    {f.icon}
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 800, mb: 2, color: "#424242" }}
                  >
                    {f.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "#757575", lineHeight: 1.7 }}
                  >
                    {f.desc}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 3. Quote Section */}
      <Container maxWidth="md" sx={{ py: 15, textAlign: "center" }}>
        <Divider
          sx={{
            width: "80px",
            mx: "auto",
            mb: 4,
            height: "4px",
            backgroundColor: "#7e7e66",
            borderRadius: "2px",
          }}
        />
        <Typography
          variant="h4"
          sx={{
            fontStyle: "italic",
            fontFamily: "serif",
            color: "#5e5e4d",
            lineHeight: 1.6,
          }}
        >
          "A room without books is like a body without a soul."
        </Typography>
        <Typography
          sx={{ mt: 3, fontWeight: 700, color: "#7e7e66", letterSpacing: 2 }}
        >
          — CICERO
        </Typography>
      </Container>

      {/* 4. Footer CTA */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #7e7e66 0%, #454538 100%)",
          py: 12,
          color: "white",
          textAlign: "center",
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="h3" sx={{ fontWeight: 900, mb: 3 }}>
            Ready to start your <br /> collection?
          </Typography>
          <Typography sx={{ opacity: 0.8, mb: 6, fontSize: "1.1rem" }}>
            Join thousands of readers who have organized their digital
            bookshelves with us.
          </Typography>
          <Button
            variant="contained"
            onClick={() => navigate(token ? "/getBooks" : "/SignUp")}
            sx={{
              backgroundColor: "white",
              color: "#7e7e66",
              px: 8,
              py: 2.2,
              borderRadius: "50px",
              fontWeight: "900",
              fontSize: "1rem",
              textTransform: "uppercase",
              letterSpacing: 1,
              "&:hover": {
                backgroundColor: "#f0f0f0",
                transform: "scale(1.05)",
              },
              transition: "all 0.3s ease",
            }}
          >
            {token ? "Go to Dashboard" : "Create Account"}
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default Homepage;
