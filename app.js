const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");

app.set("views", path.join(__dirname, "views"));
          //từ khóa                    ghi gì cũng được
app.set("view engine", "hbs");

app.get("/", (req, res) => {
    res.render("index");
});

app.listen(port);