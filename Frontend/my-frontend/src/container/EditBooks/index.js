import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  Paper,
  IconButton,
  Grid,
  Avatar,
  InputAdornment,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SaveIcon from "@mui/icons-material/Save";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import PersonIcon from "@mui/icons-material/Person";
import CategoryIcon from "@mui/icons-material/Category";
import EventIcon from "@mui/icons-material/Event";
import ImageIcon from "@mui/icons-material/Image";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { updateBooks } from "../../Actions/book.action";

const EditBooks = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { allBooks } = location.state || {};

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
    date: "",
    image: "",
  });

  useEffect(() => {
    if (allBooks) {
      setFormData({
        title: allBooks.title || "",
        author: allBooks.author || "",
        genre: allBooks.genre || "",
        date: allBooks.date || "",
        image: allBooks.image || "",
      });
    } else {
      navigate("/getBooks");
    }
  }, [allBooks, navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // No alert needed: Dispatching update and navigating back
    await dispatch(updateBooks(allBooks._id, formData));
    navigate("/getBooks");
  };

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#fdfdfc", pb: 8 }}>
      <Box
        sx={{
          background: "linear-gradient(135deg, #7e7e66 0%, #454538 100%)",
          pt: 10,
          pb: 12,
          textAlign: "center",
          color: "white",
          mb: -10,
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h2"
            sx={{
              fontFamily: "cursive",
              fontWeight: 900,
              mb: 1,
              fontSize: { xs: "2.5rem", md: "3.5rem" },
            }}
          >
            Refine Your Collection
          </Typography>
          <Typography sx={{ opacity: 0.8, fontStyle: "italic" }}>
            Currently Editing: {formData.title || "Library Entry"}
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="md">
        <IconButton
          onClick={() => navigate("/getBooks")}
          sx={{
            mb: 2,
            color: "white",
            backgroundColor: "rgba(255,255,255,0.1)",
            "&:hover": { backgroundColor: "rgba(255,255,255,0.2)" },
          }}
        >
          <ArrowBackIcon />
        </IconButton>

        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 6 },
            borderRadius: "32px",
            boxShadow: "0px 20px 50px rgba(0,0,0,0.1)",
            border: "1px solid #ececeb",
            position: "relative",
            zIndex: 1,
          }}
        >
          <form onSubmit={handleSubmit}>
            <Grid container spacing={4}>
              <Grid
                item
                xs={12}
                sx={{ display: "flex", justifyContent: "center", mb: 2 }}
              >
                <Box sx={{ textAlign: "center" }}>
                  <Avatar
                    src={formData.image}
                    sx={{
                      width: 180,
                      height: 180,
                      borderRadius: "24px",
                      boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                      border: "4px solid white",
                      mb: 2,
                      mx: "auto",
                      backgroundColor: "#f5f5f5",
                    }}
                  >
                    <ImageIcon sx={{ fontSize: 60, color: "#ccc" }} />
                  </Avatar>
                  <Typography
                    variant="caption"
                    sx={{
                      color: "#7e7e66",
                      fontWeight: "bold",
                      textTransform: "uppercase",
                    }}
                  >
                    Cover Preview
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  variant="standard"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MenuBookIcon sx={{ color: "#7e7e66" }} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{ mb: 2 }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Author"
                  name="author"
                  value={formData.author}
                  onChange={handleChange}
                  variant="standard"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon sx={{ color: "#7e7e66" }} />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Genre"
                  name="genre"
                  value={formData.genre}
                  onChange={handleChange}
                  variant="standard"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <CategoryIcon sx={{ color: "#7e7e66" }} />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Publication Date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  variant="standard"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EventIcon sx={{ color: "#7e7e66" }} />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Image URL"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  variant="standard"
                  helperText="Updating the link updates the preview above"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <ImageIcon sx={{ color: "#7e7e66" }} />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  size="large"
                  startIcon={<SaveIcon />}
                  sx={{
                    mt: 2,
                    backgroundColor: "#7e7e66",
                    borderRadius: "20px",
                    py: 2,
                    fontSize: "1.1rem",
                    fontWeight: "bold",
                    textTransform: "none",
                    boxShadow: "0 10px 20px rgba(126, 126, 102, 0.3)",
                    "&:hover": {
                      backgroundColor: "#6a6a56",
                      transform: "translateY(-2px)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  Save Changes
                </Button>
                <Button
                  fullWidth
                  onClick={() => navigate("/getBooks")}
                  sx={{
                    mt: 2,
                    color: "#7e7e66",
                    textTransform: "none",
                    fontWeight: 600,
                  }}
                >
                  Discard and Return
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </Box>
  );
};

export default EditBooks;
