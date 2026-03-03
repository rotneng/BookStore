import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  IconButton,
  CircularProgress,
  InputAdornment,
  Alert,
} from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBooks } from "../../Actions/book.action";

// Finer Icon Selections
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import EventIcon from "@mui/icons-material/Event";
import CategoryIcon from "@mui/icons-material/Category";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const AddBooks = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null); // For immediate visual feedback
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    date: "",
    genre: "",
  });
  const [loading, setLoading] = useState(false);

  const handleAddBooks = async () => {
    if (
      !formData.title ||
      !formData.author ||
      !formData.date ||
      !formData.genre
    ) {
      setError("All fields are required");
      return;
    }

    if (!image) {
      setError("Please upload a book image");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const formDataToSend = new FormData();
      Object.keys(formData).forEach((key) => {
        formDataToSend.append(key, formData[key]);
      });
      formDataToSend.append("image", image);

      await dispatch(addBooks(formDataToSend, navigate));
    } catch (error) {
      setError("Failed to add book. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const changeBookData = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBookImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        setError("Please select a valid image file");
        return;
      }
      setImage(file);
      setPreview(URL.createObjectURL(file)); // Create a preview URL
      setError("");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f4f7f6",
        p: 3,
      }}
    >
      <Paper
        elevation={0}
        sx={{
          width: "100%",
          maxWidth: 800,
          p: { xs: 3, md: 5 },
          borderRadius: "32px",
          border: "1px solid #e0e0e0",
          background: "rgba(255, 255, 255, 0.9)",
          backdropFilter: "blur(10px)",
        }}
      >
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <AutoStoriesIcon sx={{ fontSize: 48, color: "#7e7e66", mb: 1 }} />
          <Typography
            variant="h4"
            sx={{ fontWeight: 900, color: "#424242", fontFamily: "cursive" }}
          >
            Add New Book
          </Typography>
          <Typography variant="body2" sx={{ color: "#757575" }}>
            Fill in the details to expand the library
          </Typography>
        </Box>

        {error && (
          <Alert severity="error" sx={{ mb: 3, borderRadius: "12px" }}>
            {error}
          </Alert>
        )}

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
          }}
        >
          {/* Form Side */}
          <Box
            sx={{ flex: 2, display: "flex", flexDirection: "column", gap: 2.5 }}
          >
            <TextField
              fullWidth
              label="Book Title"
              name="title"
              value={formData.title}
              onChange={changeBookData}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <DriveFileRenameOutlineIcon sx={{ color: "#7e7e66" }} />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              fullWidth
              label="Author Name"
              name="author"
              value={formData.author}
              onChange={changeBookData}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <DriveFileRenameOutlineIcon sx={{ color: "#7e7e66" }} />
                  </InputAdornment>
                ),
              }}
            />

            <Box sx={{ display: "flex", gap: 2 }}>
              <TextField
                fullWidth
                type="date"
                label="Release Date"
                name="date"
                value={formData.date}
                onChange={changeBookData}
                InputLabelProps={{ shrink: true }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EventIcon sx={{ color: "#7e7e66" }} />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                fullWidth
                label="Genre"
                name="genre"
                value={formData.genre}
                onChange={changeBookData}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <CategoryIcon sx={{ color: "#7e7e66" }} />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Box>

          {/* Image Upload Side */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: 220,
                borderRadius: "16px",
                border: "2px dashed #7e7e66",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                position: "relative",
                backgroundColor: "#fafafa",
              }}
            >
              {preview ? (
                <>
                  <img
                    src={preview}
                    alt="Preview"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <IconButton
                    size="small"
                    sx={{
                      position: "absolute",
                      top: 8,
                      right: 8,
                      backgroundColor: "white",
                      "&:hover": { backgroundColor: "#ffeb3b" },
                    }}
                    onClick={() => {
                      setImage(null);
                      setPreview(null);
                    }}
                  >
                    <DeleteOutlineIcon color="error" />
                  </IconButton>
                </>
              ) : (
                <Box sx={{ textAlign: "center", p: 2 }}>
                  <CloudUploadIcon
                    sx={{ fontSize: 40, color: "#7e7e66", mb: 1 }}
                  />
                  <Typography variant="caption" display="block">
                    Click to upload cover
                  </Typography>
                </Box>
              )}
              <input
                type="file"
                hidden
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  opacity: 0,
                  cursor: "pointer",
                }}
                onChange={handleBookImage}
                accept="image/*"
              />
            </Box>
          </Box>
        </Box>

        <Box sx={{ mt: 5, textAlign: "center" }}>
          <Button
            fullWidth
            variant="contained"
            disabled={loading}
            onClick={handleAddBooks}
            sx={{
              py: 2,
              backgroundColor: "#7e7e66",
              borderRadius: "16px",
              fontWeight: 800,
              fontSize: "1.1rem",
              textTransform: "none",
              boxShadow: "0 8px 16px -4px rgba(126, 126, 102, 0.3)",
              "&:hover": { backgroundColor: "#6a6a56" },
            }}
          >
            {loading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "Publish Book"
            )}
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default AddBooks;
