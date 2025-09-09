-- Create database (change name if you want)
CREATE DATABASE IF NOT EXISTS quiz_app CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE quiz_app;

-- Users table
CREATE TABLE IF NOT EXISTS users (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(150) NOT NULL UNIQUE,
  age INT UNSIGNED NOT NULL,
  gender ENUM('male','female','other') NOT NULL,
  role ENUM('user','admin') NOT NULL DEFAULT 'user',
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  INDEX (email)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- (Optional) Create a default admin for testing
-- password = Admin@123  (hash it with bcrypt if inserting manually)
-- Recommended: create via /register and then update role to 'admin':
-- UPDATE users SET role='admin' WHERE email='admin@example.com';
