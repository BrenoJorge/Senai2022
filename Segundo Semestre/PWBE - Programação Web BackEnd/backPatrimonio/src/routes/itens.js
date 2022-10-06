const express = require('express');
const router = express.Router();

const Item = require("../controllers/ItemController");

router.get("/solicitacoes/listarView", Item.listarView);
router.post("/solicitacoes/solicitarItem", Item.solicitarItem);

module.exports = router;