const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const jsoneng = require("jsoneng");

const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const dirname = path.join(process.cwd());

app.use(express.static(dirname));

let jdb = new jsoneng();
jdb.create({}, "SampleDataBase");

app.get("/", (req, res) => {
    res.sendFile("index.html", { root: dirname });
});

app.post("/post", urlencodedParser, (req, res) => {
    const postData = req.body;

    jdb.update({ name: postData["name"] }, "SampleDataBase");

    console.log(postData["name"]);

    res.redirect("/");
});

app.listen(3000);
