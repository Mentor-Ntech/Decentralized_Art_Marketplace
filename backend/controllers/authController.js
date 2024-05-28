const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const JWT_SECRET =
  "8b2a56911bb0c1a00d4b770eb7ffc36f9da9c7a8f38877e62bb80ac73c119d7ad38ee5b8e1094bab40bb86bde995cfdfa42fbdd88fb0f3846981c355d514f837"; 

const signup = async (req, res) => {
  const { username, email, password, walletAddress, profilePic, bio } =
    req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      walletAddress,
      profilePic,
      bio,
    });

    await newUser.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ token, message: "Logged in successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};


const logout = (req, res) => {

  res.json({ message: "Logged out successfully" });
};

module.exports = {
  signup,
  login,
  logout,
};
