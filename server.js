const express = require('express');
const app = express();
const PORT = 5000;

// Definir las rutas
app.get('/', (req, res) => {
  res.send('Laboratorio 4');
});

app.get('/clientes', (req, res) => {
  const clientes = ['Farid Lucio Gonzales', 'Linda Mercedez Zegarra', 'Karolay Gallegos'];
  res.json(clientes);
});

app.get('/productos', (req, res) => {
  const productos = ['Televisor 42 pulgadas', 'Camara Cannon', 'Mouse inalambrico'];
  res.json(productos);
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
