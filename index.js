const path = require("path");
const dirname = path.join(process.cwd());

const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });

const express = require("express");
const app = express();
app.use(express.static(dirname));

const jsoneng = require("jsoneng");
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
