import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  Paper,
  IconButton,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SaveIcon from "@mui/icons-material/Save";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
// Ensure this action exists in your book.action file
import { updateBooks } from "../../Actions/book.action";

const EditBooks = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Extract the book data passed via navigate state
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
      // If someone accesses this page directly without state, send them back
      navigate("/getBooks");
    }
  }, [allBooks, navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Assuming your updateBooks action takes (id, updatedData)
    await dispatch(updateBooks(allBooks._id, formData));
    navigate("/getBooks");
  };

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#fdfdfc", py: 8 }}>
      <Container maxWidth="sm">
        <IconButton
          onClick={() => navigate("/getBooks")}
          sx={{ mb: 2, color: "#7e7e66" }}
        >
          <ArrowBackIcon />
        </IconButton>

        <Paper
          elevation={0}
          sx={{
            p: 4,
            borderRadius: "24px",
            border: "1px solid #ececeb",
            boxShadow: "0px 20px 40px rgba(0,0,0,0.05)",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontFamily: "cursive",
              fontWeight: 900,
              color: "#424242",
              mb: 1,
            }}
          >
            Edit Masterpiece
          </Typography>
          <Typography variant="body2" sx={{ color: "#757575", mb: 4 }}>
            Update the details of your curated collection below.
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: "flex", flexDirection: "column", gap: 3 }}
          >
            <TextField
              fullWidth
              label="Book Title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Author Name"
              name="author"
              value={formData.author}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              label="Genre"
              name="genre"
              value={formData.genre}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              label="Publication Date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              label="Image URL"
              name="image"
              value={formData.image}
              onChange={handleChange}
            />

            <Button
              type="submit"
              variant="contained"
              size="large"
              startIcon={<SaveIcon />}
              sx={{
                mt: 2,
                backgroundColor: "#7e7e66",
                borderRadius: "12px",
                py: 1.5,
                fontWeight: "bold",
                "&:hover": { backgroundColor: "#6a6a56" },
              }}
            >
              Update Library Entry
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

// CRITICAL: This default export fixes the "Element type is invalid" error
export default EditBooks;
