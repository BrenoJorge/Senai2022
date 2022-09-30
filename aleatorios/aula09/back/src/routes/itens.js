const express = require('express');
const router = express.Router();

const Item = require("../controllers/itemController");

router.get("/patrimonio/itens", Item.listarItens);

module.exports = router;