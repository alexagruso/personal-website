import express, { Express, Request, Response } from "express";
import path from "path";
import ejsLayouts from "express-ejs-layouts";

import { pageTitle } from "@src/test";

const server: Express = express();

server.set("view engine", "ejs");
server.set("views", path.resolve(__dirname, "../public/views/"));

server.use(express.static(path.resolve(__dirname, "../dist/public/styles/")));
server.use(express.static(path.resolve(__dirname, "../dist/public/scripts/")));
server.use(express.static(path.resolve(__dirname, "../public/res/")));
server.use(ejsLayouts);

server.get("/", (req: Request, res: Response) => {
    res.status(200).render("home", { title: pageTitle });
});

server.get("/about", (req: Request, res: Response) => {
    res.status(200).render("about", { title: pageTitle });
});

server.get("/portfolio", (req: Request, res: Response) => {
    res.status(200).render("portfolio", { title: pageTitle });
});

server.get("/contact", (req: Request, res: Response) => {
    res.status(200).render("contact", { title: pageTitle });
});

server.get("*", (req: Request, res: Response) => {
    res.status(200).render("404", { title: pageTitle });
});

const port: number = parseInt(process.env.PORT!) || 8080;

server.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
