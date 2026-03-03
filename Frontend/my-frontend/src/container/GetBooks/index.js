import {
  Box,
  Button,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Grid,
  Container,
  Divider,
  Chip,
} from "@mui/material";
import { deleteBooks, getBooks } from "../../Actions/book.action";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Finer Icon Selections
import EditIcon from "@mui/icons-material/Edit";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const GetBooks = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { book } = useSelector((state) => state.book);

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const handleEditBooks = (allBooks) => {
    // Add a log to see if this is triggered in your browser console
    console.log("Edit clicked for:", allBooks.title);

    if (!allBooks?._id) {
      console.error("No book ID found!");
      return;
    }

    navigate("/editBooks", {
      state: {
        allBooks: allBooks,
        returnTo: "/getBooks",
      },
    });
  };

  const handleDeleteBooks = async (allBooks) => {
    // A quick confirm dialog is a "finer" touch to prevent accidental deletes
    if (
      window.confirm(`Are you sure you want to delete "${allBooks.title}"?`)
    ) {
      await dispatch(deleteBooks(allBooks._id));
      setTimeout(() => {
        dispatch(getBooks());
      }, 500);
    }
  };

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#fdfdfc", pb: 5 }}>
      {/* Refined Header Banner */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #7e7e66 0%, #5e5e4d 100%)",
          color: "white",
          pt: 10,
          pb: 8,
          textAlign: "center",
          mb: 6,
          boxShadow: "0px 10px 30px rgba(0,0,0,0.15)",
          position: "relative",
          overflow: "hidden",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Container maxWidth="md">
          <AutoStoriesIcon sx={{ fontSize: 40, mb: 2, opacity: 0.8 }} />
          <Typography
            variant="h2"
            sx={{
              fontFamily: "cursive",
              fontWeight: 900,
              mb: 1,
              textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
            }}
          >
            The Collective Gallery
          </Typography>

          {/* Decorative Divider */}
          <Box
            sx={{
              width: 80,
              height: 4,
              backgroundColor: "rgba(255,255,255,0.3)",
              mx: "auto",
              borderRadius: "2px",
              mb: 2,
            }}
          />

          <Typography
            variant="h6"
            sx={{
              opacity: 0.9,
              fontWeight: 400,
              letterSpacing: "0.5px",
              fontStyle: "italic",
            }}
          >
            Browse and manage your personal curation of literature
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg">
        {/* ... the rest of your Grid and Map logic remains exactly the same ... */}
        {book && book.length > 0 ? (
          <Grid
            container
            spacing={4}
            sx={{
              justifyContent: "center",
            }}
          >
            {book.map((allBooks) => (
              <Grid item xs={12} sm={6} md={4} key={allBooks._id}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: "20px",
                    transition: "transform 0.3s, boxShadow 0.3s",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0px 12px 24px rgba(0,0,0,0.15)",
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{ height: 280, objectFit: "cover" }}
                    image={allBooks.image}
                    alt={allBooks.title}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mb: 1,
                      }}
                    >
                      <Chip
                        label={allBooks.genre}
                        size="small"
                        sx={{
                          backgroundColor: "#7e7e6622",
                          color: "#7e7e66",
                          fontWeight: "bold",
                        }}
                      />
                    </Box>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      sx={{ fontWeight: 800 }}
                    >
                      {allBooks.title}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        color: "text.secondary",
                        mb: 0.5,
                      }}
                    >
                      <AutoStoriesIcon sx={{ fontSize: 18, mr: 1 }} />
                      <Typography variant="body2">{allBooks.author}</Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        color: "text.secondary",
                      }}
                    >
                      <CalendarMonthIcon sx={{ fontSize: 18, mr: 1 }} />
                      <Typography variant="body2">{allBooks.date}</Typography>
                    </Box>
                  </CardContent>
                  <Divider />
                  <CardActions sx={{ justifyContent: "space-between", p: 2 }}>
                    <Button
                      size="small"
                      startIcon={<EditIcon />}
                      onClick={() => handleEditBooks(allBooks)}
                      sx={{ color: "#7e7e66", fontWeight: "bold" }}
                    >
                      EDIT
                    </Button>
                    <Button
                      size="small"
                      color="error"
                      startIcon={<DeleteSweepIcon />}
                      onClick={() => handleDeleteBooks(allBooks)}
                      sx={{ fontWeight: "bold" }}
                    >
                      DELETE
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Box sx={{ textAlign: "center", py: 10 }}>
            <Typography
              variant="h5"
              sx={{ color: "#7e7e66", fontFamily: "cursive" }}
            >
              No books available in the library yet.
            </Typography>
            <Button
              variant="contained"
              sx={{ mt: 2, backgroundColor: "#7e7e66", borderRadius: "20px" }}
              onClick={() => navigate("/addBooks")}
            >
              Add Your First Book
            </Button>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default GetBooks;
