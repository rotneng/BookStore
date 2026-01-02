import { booksConstant } from "../Actions/constant";

const initialState = {
  loading: false,
  book: [],
  error: null,
  message: "",
};

export const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case booksConstant.ADDBOOKS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        message: "",
      };

    case booksConstant.ADDBOOKS_SUCCESS:
      return {
        ...state,
        loading: false,
        book: action.payload,
        message: "Book added successfully",
      };

    case booksConstant.ADDBOOKS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        message: "Failed to add book",
      };
    case booksConstant.GETBOOKS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        message: "",
      };
    case booksConstant.GETBOOKS_SUCCESS:
      return {
        ...state,
        loading: false,
        book: Array.isArray(action.payload) ? action.payload : [],
        message: "Get books successfull",
      };
    case booksConstant.GETBOOKS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        message: "Failed to get book",
      };
    case booksConstant.UPDATE_BOOKS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        message: "",
      };
    case booksConstant.UPDATE_BOOKS_SUCCESS:
      return {
        ...state,
        loading: false,
        book: action.payload,
        message: "Book updated successfully",
      };
    case booksConstant.UPDATE_BOOKS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        message: "Failed to update book",
      };
    case booksConstant.DELETE_BOOKS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        message: "",
      };
    case booksConstant.DELETE_BOOKS_SUCCESS:
      return {
        ...state,
        loading: false,
        book: state.books.filter((book) => book._id !== action.payload),
        message: "Book deleted successfully",
      };
    case booksConstant.DELETE_BOOKS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        message: "Failed to delete book",
      };
    default:
      return state;
  }
};
