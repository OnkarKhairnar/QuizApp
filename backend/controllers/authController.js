const bcrypt = require('bcryptjs');
const { createUser } = require('../models/userModel');

const register = async (req, res) => {
  try {
    const { name, email, age, gender, password, role } = req.body;

    if (!name || !email || !age || !gender || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await createUser({
      name,
      email,
      age,
      gender,
      password: hashedPassword,
      role: role || "user"
    });

    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Registration failed" });
  }
};

module.exports = { register };
