import { Box, Button, Typography } from "@mui/material";
import { deleteBooks, getBooks, updateBooks } from "../../Actions/book.action";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const GetBooks = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { book } = useSelector((state) => state.book);
  console.log("books shown", book);

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  // allBooks represent a single book

  const handleEditBooks = (allBooks) => {
    navigate("/editBooks", { state: { allBooks, returnTo: "/getBooks" } });
  };

  const handleDeleteBooks = async (allBooks) => {
    await dispatch(deleteBooks(allBooks._id));
    setTimeout(() => {
      dispatch(getBooks());
    }, 1000);
  };

  return (
    <Box>
      <Typography
        sx={{
          fontFamily: "cursive",
          fontSize: "30px",
          fontWeight: "bolder",
          padding: "20px",
          backgroundColor: "#7e7e66ff",
        }}
      >
        ALL BOOKS
      </Typography>

      {book && book.length > 0 ? (
        book.map((allBooks) => (
          <Box>
            <Box
              key={allBooks._id}
              sx={{
                display: "flex",
                alignItems: "center",
                // borderBottom: "2px solid #7e7e66ff",
                padding: "20px",
                margin: "20px auto",
                flexDirection: "row",
                justifyContent: "space-evenly",
              }}
            >
              <Box sx={{ width: "100px", height: "100px" }}>
                <img
                  style={{ width: "100px", height: "100px" }}
                  src={allBooks.image}
                />
              </Box>
              <Box
                sx={{
                  fontWeight: "bold",
                  fontSize: "15px",
                  alignItems: "normal",
                }}
              >
                {allBooks.title}
              </Box>

              <Box sx={{ fontWeight: "bold", fontSize: "15px" }}>
                {allBooks.author}
              </Box>

              <Box sx={{ fontWeight: "bold", fontSize: "15px" }}>
                {allBooks.date}
              </Box>

              <Box sx={{ fontWeight: "bold", fontSize: "15px" }}>
                {allBooks.genre}
              </Box>

              <Box
                sx={{
                  display: "flex",
                }}
              >
                <Button
                  sx={{
                    backgroundColor: "#7e7e66ff",
                    color: "black",
                    marginRight: "10px",
                    borderRadius: "12px",
                  }}
                  onClick={() => handleEditBooks(allBooks)}
                >
                  EDIT
                </Button>
                <Button
                  sx={{
                    backgroundColor: "#7e7e66ff",
                    color: "black",
                    marginRight: "10px",
                    borderRadius: "12px",
                  }}
                  variant="contained"
                  color="error"
                  onClick={() => handleDeleteBooks(allBooks)}
                >
                  DELETE
                </Button>
              </Box>
            </Box>
          </Box>
        ))
      ) : (
        <Typography
          sx={{
            fontFamily: "cursive",
            fontSize: "20px",
            fontWeight: "bolder",
            padding: "20px",
            textAlign: "center",
          }}
        >
          No Books Available
        </Typography>
      )}
    </Box>
  );
};

export default GetBooks;
