const express = require('express')
const app = express()

const PORT = 3000

app.get("/", (req, res)=>{
    res.json({"test" : "hello"});
})

app.listen(PORT, () => {
    console.log("Server is listening on " + PORT)
})