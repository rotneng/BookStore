const Books = require("../Models/booksmodel");
const { newCloud } = require("../Util/cloudinary");

exports.addbooks = async (req, res) => {
  // console.log("request body----------------------", req.body);
  // console.log("uploaded file", req.file);

  try {
    const { title, author, date, genre } = req.body;
    const imageFile = req.file;
    let imageUrl = "";
    console.log("title", title);

    if (imageFile) {
      const uploadResult = await newCloud(imageFile.path);
      if (uploadResult && uploadResult.url)
      {
        imageUrl = uploadResult.url;
        console.log("image uploaded to cloudinary", imageUrl);
      }
    }

    const publicationDate = new Date(date);

    const newBook = new Books({
      title: title.trim(),
      author: author.trim(),
      date: publicationDate,
      genre: genre.trim(),
      image: imageUrl,
    });
    await newBook.save();
    console.log("book added succesfully");

    return res
      .status(200)
      .json({ success: true, message: "book added", book: newBook });
  } catch (err) {
    console.log("error adding books");
    if (err.name === "ValidationError") {
      return res.status(400).json({
        success: false,
        message: Object.values(err.errors)
          .map((e) => e.message)
          .join(","),
      });
    }
    res.status(500).json({ success: "false", message: "error adding book" });
  }
};

exports.getAllBooks = async (req, res) => {
  try {
    const books = await Books.find();
    // console.log("Books found", books);
    return res.status(200).json(books);
  } catch (err) {
    console.log("error in getting books");
  }
};

exports.updateBook = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Books.findById(id);
    if (!book) {
      return res.status(400).json({ message: "Book does not exist" });
    }
    console.log("book", book);

    title = req.body.title;
    author = req.body.author;
    genre = req.body.genre;
    date = req.body.date;

    const imageFile = req.file;
    let imageUrl = book.image;

    if (imageFile) {
      const uploadResult = await newCloud(imageFile.path);
      if (uploadResult && uploadResult.url)
      {
        imageUrl = uploadResult.url;
        console.log("image uploaded to cloudinary", imageUrl);
      }
    }

    const publicationDate = new Date(date);

    book.title = title.trim()
    book.author = author.trim()
    book.date = publicationDate
    book.genre = genre.trim()
    book.image = imageUrl

    const update = await book.save();
    if (update) {
      console.log("update succesfull", update);
      return res.status(200).json({ message: "book updated" });
    }
  } catch (err) {
    console.log("error updating book", err);
  }
};

exports.deleteBook = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Books.findOneAndDelete({ _id: id });
    if (!book) {
      console.log("deleted successfully", book.title);
      return res.status(200).json({ message: "Book deleted" });
    }
    else{
      return res.status(400).json({message: "book not found"})
    }
  } catch (err) {
    console.log("error deleting book", err);
    return res.status(500).json({message:"error deleting book"})
  }
};
