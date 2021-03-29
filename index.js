const express = require("express");
const app = express();
let port = process.env.PORT || 3000;

app.get("/api", (req, res) => {
    res.send("hello world");
});

app.listen(port, () => {
    console.log('Hello World http://localhost:${port}')
})