import { Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import TuneIcon from "@mui/icons-material/Tune";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import photo from "/Users/User/Desktop/Project/Frontend/my-frontend/src/Util/Image.jpg";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Actions/auth.action";
import { useNavigate } from "react-router-dom";
import { Cursor } from "mongoose";

const Homepage = () => {
  const { user, token, authenticated, loading, authCheck } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log("user ", user);
  console.log("token ", token);
  console.log("authenticated", authenticated);
  console.log("loading", loading);
  console.log("authcheck", authCheck);

  const handleLogout = async () => {
    await dispatch(logout(navigate));

    console.log("user shown", user);
    console.log("token shown", token);
    console.log("authenticated", authenticated);
    console.log("loading", loading);
    console.log("authcheck", authCheck);
  };

  return (
    <Box
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <Box
        className="Header"
        style={{
          backgroundColor: "#7e7e66ff",
          padding: 20,
          display: "flex",
          flexDirection: "row",
          alignitems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box style={{ display: "flex" }}>
          <Box
            style={{
              padding: 10,
              fontFamily: "cursive",
              fontWeight: "bolder",
              fontSize: "30px",
            }}
          >
            Homee
          </Box>
        </Box>

        <Box style={{ display: "flex" }}>
          <Box style={{ padding: 10, fontWeight: "bolder" }}>
            About <KeyboardArrowDownIcon />
          </Box>
          <Box style={{ padding: 10, fontWeight: "bolder" }}>
            Contact <KeyboardArrowDownIcon />
          </Box>
          <Box
            style={{ padding: 10, fontWeight: "bolder" }}
            onClick={() => {
              navigate("/addBooks");
            }}
          >
            AddBooks <KeyboardArrowDownIcon />
          </Box>
          <Box
            style={{ padding: 10, fontWeight: "bolder" }}
            onClick={() => navigate("/getBooks")}
          >
            Books
            <KeyboardArrowDownIcon />
          </Box>
          <Box style={{ padding: 10, fontWeight: "bolder" }}>
            Staff <KeyboardArrowDownIcon />
          </Box>
        </Box>

        <Box style={{ display: "flex" }}>
          <Box>
            <ShoppingCartCheckoutIcon style={{ padding: 10 }} />
          </Box>
          <Box>
            <SearchIcon style={{ padding: 10 }} />
          </Box>
          <Box>
            <TuneIcon style={{ padding: 10 }} />
          </Box>
        </Box>
      </Box>

      <Box
        className="Body"
        style={{
          display: "flex",
          justifyContent: "space-betwwen",
          paddingTop: "50px",
          width: "100%",
          backgroundColor: "#fdfdfcff",
        }}
      >
        <Box className="App" style={{ width: "49%" }}>
          <Box style={{ display: "flex", flexDirection: "column" }}>
            <h4 style={{ fontFamily: "inherit", fontWeight: "bolder" }}>
              Homee Management
            </h4>
            <h1 style={{ fontFamily: "cursive" }}>Book Management System</h1>
            <h4 style={{ fontFamily: "inherit", fontWeight: "bolder" }}>
              Add All Your Books And Manage Them Easily
            </h4>
          </Box>

          <Box style={{ padding: 40 }}>
            {token ? (
              <></>
            ) : (
              <button
                onClick={() => {
                  window.location.href = "/SignUp";
                }}
                style={{
                  borderRadius: 20,
                  padding: 20,
                  backgroundColor: "#7e7e66ff",
                  color: "black",
                  marginLeft: "10px",
                }}
              >
                SignUp
              </button>
            )}

            {token ? (
              <button
                onClick={handleLogout}
                style={{
                  borderRadius: 20,
                  padding: 20,
                  backgroundColor: "#7e7e66ff",
                  color: "black",
                  marginLeft: "10px",
                }}
              >
                LogOut
              </button>
            ) : (
              <button
                onClick={() => {
                  window.location.href = "/login";
                }}
                style={{
                  borderRadius: 20,
                  padding: 20,
                  backgroundColor: "#7e7e66ff",
                  color: "black",
                  marginLeft: "10px",
                }}
              >
                Login
              </button>
            )}
          </Box>
        </Box>

        <Box style={{ width: "49%" }}>
          <img
            src={photo}
            alt="background image"
            style={{ height: "auto", width: "100%" }}
          ></img>
        </Box>
      </Box>
    </Box>
  );
};

export default Homepage;
