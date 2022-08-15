const express = require('express')
const app = express()

app.use(express.json())

app.get("/node", (req, res) =>{
    res.json()
})

app.listen(3000, () => {
    console.log("Hello world! 3000")
})