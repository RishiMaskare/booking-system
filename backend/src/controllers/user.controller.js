import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { asyncHandler } from "../utils/asyncHandler.js";
import { createError } from "../utils/CreateError.js";

const generateToken = (userId) => {
  return jwt.sign({ _id: userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

// REGISTER
const registerUser = asyncHandler(async (req, res) => {
  const { fullName, email, password } = req.body;

  if (!email || !password) {
    throw createError("Email and password are required", 400);
  }
  console.log("registerUser called 1.0");

  if (password.length < 8) {
    throw createError("Password must be at least 8 characters long", 400);
  }

  const userExist = await User.findOne({ email });
  if (userExist) {
    throw createError("User already exists", 400);
  }

  const user = await User.create({
    fullName,
    email,
    password,
  });

  const token = generateToken(user._id);

  console.log("registerUser finished");
  return res.status(201).json({
    success: true,
    message: "User registered successfully",
    data: {
      token,
      user,
    },
  });
});

// LOGIN
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw createError("Email and password are required", 400);
  }

  const user = await User.findOne({ email });
  if (!user) {
    throw createError("User not found", 400);
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw createError("Invalid credentials", 400);
  }

  const token = generateToken(user._id);

  return res.status(200).json({
    success: true,
    message: "Login successful",
    data: {
      token,
      user,
    },
  });
});

// GET CURRENT USER
const getCurrentUser = asyncHandler(async (req, res) => {
  return res.status(200).json({
    success: true,
    data: req.user,
  });
});

// DELETE ACCOUNT
const deleteAccount = asyncHandler(async (req, res) => {
  const userId = req.user._id;

  await User.findByIdAndDelete(userId);

  return res.status(200).json({
    success: true,
    message: "Account deleted successfully",
  });
});

// LOGOUT
const logoutUser = asyncHandler(async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Logged out successfully",
  });
});

export { registerUser, loginUser, getCurrentUser, deleteAccount, logoutUser };
