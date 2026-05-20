const express = require('express');
const mysql = require('mysql2');
require('dotenv').config();

const app = express();
app.use(express.json());

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});

db.connect((err) => {
  if (err) {
    console.error('Database gagal konek:', err);
    return;
  }
  console.log('MySQL connected');

  db.query(`
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(100),
      email VARCHAR(100)
    )
  `);
});

app.get('/users', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

app.post('/users', (req, res) => {
  const { name, email } = req.body;
  db.query(
    'INSERT INTO users (name, email) VALUES (?, ?)',
    [name, email],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.json(result);
    }
  );
});

app.put('/users/:id', (req, res) => {
  const { name, email } = req.body;
  db.query(
    'UPDATE users SET name=?, email=? WHERE id=?',
    [name, email, req.params.id],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.json(result);
    }
  );
});

app.delete('/users/:id', (req, res) => {
  db.query(
    'DELETE FROM users WHERE id=?',
    [req.params.id],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.json(result);
    }
  );
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});