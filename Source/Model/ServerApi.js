const express = require("express");
const path = require("path");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "View", "MainWindow.html"));
});

app.use(express.static(path.join(__dirname, "../..")));
app.use(express.json());

app.post("/api/client-error", (req, res) => {
    console.log("ERROR");
    console.log(req.body);

    res.sendStatus(204);
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`http://localhost:${PORT}`)
});