import React from "react";
import { Box, Container, Typography, Grid, Paper, Avatar } from "@mui/material";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import VisibilityIcon from "@mui/icons-material/Visibility";
import GroupsIcon from "@mui/icons-material/Groups";

const About = () => {
  const values = [
    {
      icon: <VisibilityIcon sx={{ fontSize: 40, color: "white" }} />,
      title: "Our Vision",
      text: "To create a digital sanctuary for book lovers where every collection is treated as a masterpiece.",
    },
    {
      icon: <HistoryEduIcon sx={{ fontSize: 40, color: "white" }} />,
      title: "Our Mission",
      text: "Providing an elegant, intuitive interface that removes the friction from personal library management.",
    },
    {
      icon: <GroupsIcon sx={{ fontSize: 40, color: "white" }} />,
      title: "Community",
      text: "Built for readers, by readers. We believe that sharing knowledge is the highest form of contribution.",
    },
  ];

  return (
    <Box sx={{ backgroundColor: "#fdfdfc", minHeight: "100vh" }}>
      {/* Editorial Header */}
      <Box
        sx={{
          py: { xs: 10, md: 15 },
          textAlign: "center",
          backgroundColor: "#f7f7f2",
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="overline"
            sx={{
              letterSpacing: 3,
              fontWeight: 800,
              color: "#7e7e66",
              display: "block",
              mb: 1,
            }}
          >
            The Story Behind
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "serif",
              fontWeight: 900,
              mb: 3,
              color: "#424242",
              fontSize: { xs: "2.5rem", md: "3.75rem" },
            }}
          >
            Collective Gallery
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#757575",
              fontWeight: 400,
              lineHeight: 1.8,
              maxWidth: "700px",
              mx: "auto",
            }}
          >
            Born from a passion for physical libraries and the need for digital
            organization, Collective Gallery is more than a database—it's a home
            for your intellectual journey.
          </Typography>
        </Container>
      </Box>

      {/* Values Grid - Centralized and Balanced */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Grid
          container
          spacing={4}
          justifyContent="center" // Centers items horizontally
          alignItems="stretch" // Ensures all cards have the same height
        >
          {values.map((v, i) => (
            <Grid item xs={12} sm={6} md={4} key={i} sx={{ display: "flex" }}>
              <Paper
                elevation={0}
                sx={{
                  p: 5,
                  textAlign: "center",
                  borderRadius: "32px",
                  border: "1px solid #ececeb",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%", // Ensures it fills the grid item
                  transition: "transform 0.3s ease",
                  "&:hover": { transform: "translateY(-5px)" },
                }}
              >
                <Avatar
                  sx={{
                    bgcolor: "#7e7e66",
                    width: 80,
                    height: 80,
                    mb: 3,
                    boxShadow: "0 8px 16px rgba(126, 126, 102, 0.2)",
                  }}
                >
                  {v.icon}
                </Avatar>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 800, mb: 2, color: "#424242" }}
                >
                  {v.title}
                </Typography>
                <Typography sx={{ color: "#757575", lineHeight: 1.7 }}>
                  {v.text}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Footer Text Section */}
      <Container maxWidth="sm" sx={{ py: 10, textAlign: "center" }}>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "serif",
            mb: 4,
            color: "#424242",
            fontStyle: "italic",
          }}
        >
          "Every book is a world. We just provide the map."
        </Typography>
        <Typography
          sx={{ color: "#7e7e66", fontWeight: 800, letterSpacing: 2 }}
        >
          ESTABLISHED 2024
        </Typography>
      </Container>
    </Box>
  );
};

export default About;
