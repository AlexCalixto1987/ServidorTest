const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Base de datos simulada (array en memoria)
let registeredTokens = [];
let device = []
let model = []

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

    if (!device.includes(device)) {
        device.push(device);
        console.log("device: ", device);
    }

    if (!model.includes(ref01)) {
        model.push(ref01);
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
