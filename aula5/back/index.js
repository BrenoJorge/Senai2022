const express = require('express')
const cors = require('cors')
const mysql = require('mysql')

const app = express()

const conDB = mysql.createConnection({
    "host": "localhost",
    "user": "root",
    "database": "lojinha"
})

app.use(express.json())
app.use(cors())

app.get('/buscar/:cod', (req, res) =>{

    let query = `select * from produtos where cod='${req.params.cod}'`
    conDB.query(query, (err, result) =>{
        if( err == null){
            res.status(200).json(result).end()
        }
    })
})

app.post('/inserir', (req, res)=>{

    // query => para url
    // body => para body

    let query = `insert into produtos values(default, '${req.body.cod}', '${req.body.nome}', '${req.body.qtd}', '${req.body.preco}')`

    conDB.query(query, (err, result)=>{
        if(err == null){
            res.status(201).json(req.body).end()
        } else {
            res.status(406).json(err).end()
        }
    })
})

app.get("/produtos", (req, res) => {
    let query = "SELECT * FROM produtos";

    conDB.query(query, (err, result)=>{
        if(err == null) {
            res.status(201).json(result).end()
        } else {
            res.status(500).json(err).end()
        }
    })
})

app.delete("/produto", (req, res) => {
    let query = `DELETE FROM produtos where cod= '${req.body.cod}'`

    conDB.query(query, (err, result)=>{
        if(err == null){
            res.status(200).json(req.body).end()
        } else {
            res.status(400).json(err).end()
        }
    })
})

app.put("/produto", (req, res) => {
    let query = `UPDATE produtos SET cod = '${req.body.cod}', nome = '${req.body.nome}', qtd = ${req.body.qtd}, preco = ${req.body.preco} where cod = '${req.body.cod}'`

    conDB.query(query, (err, result)=>{
        if(err == null){
            res.status(200).json(req.body).end()
        } else {
            res.status(200).json(err).end()
        }
    })
})

app.listen(4200, ()=>{
    console.log("4:20 ta na hora")
})