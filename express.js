const express = require('express');
const { db } = require("./database/server");
const app = express();


app.get("/", function(req, res) {
    res.sendFile(__dirname + "/html/index.html");
});

app.get("sobre", function(req, res) {
    res.send("minha pagina sobre");
})

app.get('/ola/:nome/:cargo', function(req, res) {
    res.send(req.params);
});

app.listen(3000, function() {
   console.log("servidor rodando"); 
});
