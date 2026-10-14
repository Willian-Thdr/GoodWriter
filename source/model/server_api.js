const express = require("express");
const path = require("path");
const os = require("os");

let ipv4 = get_ipv4();

function get_ipv4() {
    const interfaces = os.networkInterfaces();

    for (const name of Object.keys(interfaces)) {
        for (const net of interfaces[name]) {
            if (net.family === "IPv4" && !net.internal) {
                return net.address;
            }
        }
    }
}

const app = express();

const PORT = 3000;

app.get("/myarchive", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "view", "profile_window", "profile_window.html"));
});

app.use(express.static(path.join(__dirname, "../..")));
app.use(express.json());

app.post("/api/client-error", (req, res) => {
    console.log("ERROR");
    console.log(req.body);

    res.sendStatus(204);
});

app.listen(PORT, `${ipv4}`, () => {
    console.log(`http://${ipv4}:${PORT}/myarchive`);
});
