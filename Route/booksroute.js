const express = require("express");
const multer = require("multer");
const {
  addbooks,
  getAllBooks,
  updateBook,
  deleteBook,
} = require("../Controller/bookstore");
const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
});
router.post("/addBooks", upload.single("image"), addbooks);
router.get("/allBooks", getAllBooks);
router.put("/editBooks/:id", upload.single("image"), updateBook);
router.delete("/deleteBooks/:id", deleteBook);
module.exports = router;
