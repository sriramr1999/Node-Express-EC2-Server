import express from "express";

const app = express();

app.listen(5001, () => console.log("api running in 5001"));

app.get("/", (req, res) => res.json("MY API WORKING"));
