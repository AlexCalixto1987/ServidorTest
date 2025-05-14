const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Base de datos simulada (array en memoria)
let registeredTokens = [];
let registeredDevice = [];
let registeredModel = [];

app.use(cors());
app.use(bodyParser.json());

// Ruta para registrar el token
app.post("/register-token", (req, res) => {
    const { token, device, ref01, ref02, ref03 } = req.body;

    if (!token) {
        console.log("TOKEN REQUERIDO")
        return res.status(400).json({ error: "Token requerido" });
    }

    if (!registeredTokens.includes(token)) {
        registeredTokens.push(token);
        console.log("Token registrado:", token);
    }

    if (!registeredDevice.includes(device)) {
        registeredDevice.push(device);
        console.log("device: ", device);
    }

    if (!registeredDevice.includes(ref01)) {
        registeredDevice.push(ref01);
        console.log("model:", ref01);
    }

    return res.status(200).json({ message: "Token registrado con éxito" });
});

// Ver tokens guardados (opcional)
app.get("/tokens", (req, res) => {
    res.json(registeredTokens);
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
