const express = require('express');
const cors = require('cors');
const pool = require('./database');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/posts', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM posts');
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener posts');
  }
});

app.post('/posts', async (req, res) => {
  try {
    const { titulo, img, description } = req.body;
    await pool.query(
      'INSERT INTO posts (titulo, img, description) VALUES ($1, $2, $3)',
      [titulo, img, description]
    );
    res.status(201).send('Post creado');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al crear post');
  }
});

app.listen(3000, () => {
  console.log('Servidor en http://localhost:3000');
});