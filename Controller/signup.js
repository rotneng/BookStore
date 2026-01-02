const bcrypt = require("bcrypt");
const User = require("../Models/signupmodel");
const { createTransporter, sendEmail } = require("../Util/emailService");
const { response } = require("express");
const Token = require("../Models/tokenmodel");
const newCloud = require("../Util/cloudinary");
const jwt = require("jsonwebtoken");
const generateWebToken = (_id) => {
  return jwt.sign({ _id }, "qwerty", { expiresIn: "2d" });
};

// let Name, userName, password, phoneNumber
exports.signUp = async (req, res) => {
  try {
    const { Name, userName, email, password, phoneNumber, isVerified } =
      req.body;
    console.log("req.body", req.body);

    if (!email || !Name || !userName || !phoneNumber || !password) {
      console.log("validation error", err);
      return;
    }
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "User Exists" });
    }

    // const newUser = new User ({
    //     Name, userName, email, phoneNumber
    //  })

    const salt = await bcrypt.genSalt();
    const encryptedPassword = await bcrypt.hash(password, salt);
    function randomNumber() {
      return Math.floor(100000 + Math.random() * 900000);
    }

    // const upload = await newCloud (req.file.path, "cloudImages")
    const newUser = new User({
      Name,
      userName,
      email,
      phoneNumber,
      password: encryptedPassword,
      isVerified,
      // profileImage:upload.url
    });
    try {
      const otp = randomNumber();
      const token = new Token({
        email,
        token: otp,
      });
      await token.save();
      await sendEmail(email, otp);
      console.log("email sent sucessfully", otp);
    } catch (err) {
      console.log("error sendimg mail", err);
    }

    await newUser.save();
    console.log("New User Data", newUser);
    return res.status(201).json({ message: "User Registered Succesfully" });
  } catch (e) {
    console.log("unable to signup", e);
  }
};

exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("emailawthrsgdrgf", email);
    console.log("password wwwwwwwwwwwwww", password);
    const user = await User.findOne({ email: email });
    const token = generateWebToken(user._id);
    if (!user) {
      return res.status(400).json({ message: "User does not exist" });
    }
    console.log("user-------------------", user.userName);

    // const validPassword = await user.authenticate(userPassword)
    // if(!validPassword) {
    //     return res.status(400).json({message:'invalid Password'})
    // }
    bcrypt.compare(password, user.password, function (err, result) {
      // result == true
      if (result) {
        console.log("User Signin Succesful", user);
        return res.status(200).json({
          message: "user was able to signin successfully",
          user: user,
          token: token,
        });
      }
    });
  } catch (error) {
    console.log("unable to sign in", error);
  }
};

exports.verifyEmail = async (req, res) => {
  const { email, verifyToken } = req.body;
  const token = await Token.findOne({ email });
  console.log("database token", token);
  const user = await Token.findOne({ email });

  if (!user) {
    return res.status(200).json({ message: "user with email does not exist" });
  }

  const checkToken = user.token === verifyToken;
  if (checkToken) {
    const users = await User.findOne({ email });
    users.isVerified = true;
    await users.save();
    // const deleteToken = await Token.finOneAndDelete({email})
    // console.log ("token deleted")
    return res.status(200).json({ message: "email verified" });
  } else {
    return res.status(200).json({ message: "email not verified" });
  }
};
