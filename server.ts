import express, { Application } from "express";
import path from "path";

const app: Application = express();
const port = parseInt(process.env.PORT || "5000");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views/"));

app.use(express.static("public/"));

app.get("/", (req, res) => {
    res.render("home");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
