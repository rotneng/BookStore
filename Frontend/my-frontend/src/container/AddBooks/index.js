import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBooks } from "../../Actions/book.action";

const AddBooks = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState();
  const [image, setImage] = useState(null); // Change to single image
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    date: "",
    genre: "",
  });
  const [loading, setLoading] = useState(false);

  const handleAddBooks = async () => {
    // Validate form
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

      // Append text fields
      Object.keys(formData).forEach((key) => {
        formDataToSend.append(key, formData[key]);
      });

      // Append single image (not multiple)
      formDataToSend.append("image", image);
      console.log("title", formDataToSend.get("title"));

      console.log("Submitting book data:", formDataToSend);
      await dispatch(addBooks(formDataToSend, navigate));
    } catch (error) {
      console.log("Error in adding books:", error);
      setError("Failed to add book. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const changeBookData = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleBookImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith("image/")) {
        setError("Please select a valid image file");
        return;
      }
      setImage(file);
      setError("");
    }
  };

  return (
    <Box>
      <Typography
        sx={{
          width: "100%",
          padding: "20px",
          fontSize: "30px",
          fontWeight: "bolder",
          fontFamily: "cursive",
          backgroundColor: "#7e7e66ff",
          textAlign: "center",
        }}
      >
        ADD BOOKS
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <TextField
          type="text"
          label="Title"
          name="title"
          value={formData.title}
          onChange={changeBookData}
          required
          sx={{
            marginTop: "20px",
            width: "50%",
          }}
        />

        <TextField
          type="text"
          label="Author"
          name="author"
          value={formData.author}
          onChange={changeBookData}
          required
          sx={{
            marginTop: "20px",
            width: "50%",
          }}
        />

        <TextField
          type="date"
          name="date"
          value={formData.date}
          onChange={changeBookData}
          required
          InputLabelProps={{
            shrink: true,
          }}
          sx={{
            marginTop: "20px",
            width: "50%",
          }}
        />

        <TextField
          type="text"
          label="Genre"
          name="genre"
          value={formData.genre}
          onChange={changeBookData}
          required
          sx={{
            marginTop: "20px",
            width: "50%",
          }}
        />

        <Button
          variant="contained"
          component="label"
          sx={{
            marginBottom: 1,
            marginTop: 2,
            width: "50%",
          }}
        >
          {image ? "Change Book Image" : "Upload Book Image"}
          <input
            type="file"
            hidden
            onChange={handleBookImage}
            accept="image/*"
          />
        </Button>

        {/* Show selected image name */}
        {image && (
          <Typography sx={{ mt: 1, fontSize: "14px" }}>
            Selected: {image.name}
          </Typography>
        )}
      </Box>

      {error && (
        <Typography color="error" sx={{ textAlign: "center", mt: 2 }}>
          {error}
        </Typography>
      )}

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          disabled={loading}
          sx={{
            padding: "15px",
            backgroundColor: loading ? "#cccccc" : "#7e7e66ff",
            marginTop: "30px",
            borderRadius: "20px",
            color: "black",
            fontWeight: "bold",
            fontSize: "15px",
            "&:hover": {
              backgroundColor: loading ? "#cccccc" : "#6b6b5a",
            },
          }}
          onClick={handleAddBooks}
        >
          {loading ? "ADDING..." : "SUBMIT"}
        </Button>
      </Box>
    </Box>
  );
};

export default AddBooks;
