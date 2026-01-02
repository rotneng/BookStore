import { booksConstant } from "../Actions/constant";
import axios from "axios";

export const addBooks = (form, navigate) => {
  return async (dispatch) => {
    try {
      dispatch({ type: booksConstant.ADDBOOKS_REQUEST });
      console.log("hhh",form.get("title"));
      const response = await axios.post(
        "http://localhost:3001/Books/addBooks",
        form
      );
      console.log("xxx");
      
      if (response.success) {
        navigate("/getBooks");
        dispatch({
          type: booksConstant.ADDBOOKS_SUCCESS,
          payload: response.data,
        });
      } else {
        const errorMessage = response.data.message;
        dispatch({
          type: booksConstant.ADDBOOKS_FAILURE,
          payload: { errorMessage },
        });
      }
    } catch (err) {
      console.log("Error in addbook action");
    }
  };
};

export const getBooks = (navigate) => {
  return async (dispatch) => {
    try {
      dispatch({ type: booksConstant.GETBOOKS_REQUEST });
      console.log("hhhh");

      const response = await axios.get("http://localhost:3001/Books/allBooks");
      console.log("hfg");
      console.log("response", response);

      if (response.status == 200) {
        dispatch({
          type: booksConstant.GETBOOKS_SUCCESS,
          payload: response.data,
        });
      } else {
        const errorMessage = response.data.message;
        dispatch({
          type: booksConstant.GETBOOKS_FAILURE,
          payload: { errorMessage },
        });
      }
    } catch (err) {
      console.log("error in getting books action");
    }
  };
};

export const updateBooks = (_id, formData, navigate) => {
  return async (dispatch) => {
    console.log("form data", formData);
    console.log("id", _id);

    try {
      dispatch({ type: booksConstant.UPDATE_BOOKS_REQUEST });
      const response = await axios.put(
        `http://localhost:3001/Books/editBooks/${_id}`,
        formData,
        {headers: {"Content-Type": "multipart/form-data"}}
      );
      if (response.status == 200) {
        dispatch({
          type: booksConstant.UPDATE_BOOKS_SUCCESS,
          payload: response.data,
        });
        navigate("/getBooks")
      } else {
        const errorMessage = response.data.message;
        dispatch({
          type: booksConstant.UPDATE_BOOKS_FAILURE,
          payload: { errorMessage },
        });
      }
    } catch (err) {
      console.log("error in updating books action");
    }
  };
};

export const deleteBooks = (_id, navigate) => {
  return async (dispatch) => {
    try {
      dispatch({ type: booksConstant.DELETE_BOOKS_REQUEST });
      const response = await axios.delete(
        `http://localhost:3001/Books/deleteBooks/${_id}`
      );
      if (response.status == 200) {
        dispatch({
          type: booksConstant.DELETE_BOOKS_SUCCESS,
          payload: response.data,
        });
      } else {
        const errorMessage = response.data.message;
        dispatch({
          type: booksConstant.DELETE_BOOKS_FAILURE,
          payload: { errorMessage },
        });
      }
    } catch (err) {
      console.log("error in deleting books action");
    }
  };
};
