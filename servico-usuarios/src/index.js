// servico-usuarios/src/index.js

const express = require('express');
const app = express();
const port = 3001;

app.get('/usuarios', (req, res) => {
  res.json({ usuarios: ["usuario1", "usuario2", "usuario3"] });
});

app.listen(port, () => {
  console.log(`Serviço de Usuários rodando na porta ${port}`);
});