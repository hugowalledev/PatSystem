import express from "express";
import cors from "cors";

import "./config/db.js";
import patientRoutes from "./routes/patientRoutes.js";

const app = express();

/*
MiddleWare
*/

//authorizing cross origin requests
app.use(cors());

//allow to read sent JSON
app.use(express.json());

/*
Routes
*/

app.get("/health", (req, res) => {
    res.json({ status : "ok"});
});

app.use("/api/patients", patientRoutes);

export default app;