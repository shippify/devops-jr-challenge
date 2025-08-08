-- Simulated schema update commands
ALTER TABLE users ADD COLUMN last_login DATETIME;

UPDATE users SET last_login = NOW() WHERE id = 1;

CREATE TABLE orders (
  id INT PRIMARY KEY,
  user_id INT,
  amount DECIMAL(10,2),
  created_at DATETIME
);
