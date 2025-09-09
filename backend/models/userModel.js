const pool = require('../config/db');

// Create table if not exists
const createUserTable = async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      email VARCHAR(100) UNIQUE NOT NULL,
      age INT NOT NULL,
      gender ENUM('Male', 'Female', 'Other') NOT NULL,
      password VARCHAR(255) NOT NULL,
      role ENUM('user', 'admin') DEFAULT 'user',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);
};

createUserTable();

const createUser = async (userData) => {
  const { name, email, age, gender, password, role } = userData;
  const [result] = await pool.query(
    `INSERT INTO users (name, email, age, gender, password, role) 
     VALUES (?, ?, ?, ?, ?, ?)`,
    [name, email, age, gender, password, role]
  );
  return result;
};

module.exports = { createUser };
