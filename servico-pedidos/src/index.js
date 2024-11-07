// servico-pedidos/src/index.js

const express = require('express');
const app = express();
const port = 3002;

app.get('/pedidos', (req, res) => {
  res.json({ pedidos: ["pedido1", "pedido2", "pedido3"] });
});

app.listen(port, () => {
  console.log(`Serviço de Pedidos rodando na porta ${port}`);
});