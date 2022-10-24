require('dotenv').config(); //Habilita variáveis de Ambiente
const PORT = process.env.PORT || 4000
const express = require('express');
const cors = require('cors');

const routes = require('./src/routes/itens');

const app = express();
app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(PORT, () => {
    console.log("Respondendo na porta " + PORT);
});