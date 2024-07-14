const User = require("../models/User");
const token = require("../utils/generateToken");

const registerUser = async (req, res) => {
  try {
    const { email } = req.body;
    const userExist = await User.findOne({ email });
    if (userExist) {
      res.status(500).json("User already exist!");
    } else {
      const user = await User.create(req.body);
      res.status(201).json(token(user._id));
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && user.password === password) {
      res.status(200).json(token(user._id));
    } else {
      res.status(500).json("Invalid credentials!");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.user).select("-password");
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { registerUser, loginUser, getUser };
