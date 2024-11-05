const express = require('express');
const routerApi = require('./routers/rutas');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hola desde mi server de express, esta el la raiz de este proyecto');
});

routerApi(app);

app.listen(port, () => {
  console.log('My port is chambing on: ' + port);
});
