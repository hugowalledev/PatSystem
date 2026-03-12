import express from "express";
import {
    getPatients,
    getPatientById,
    getPatientByName,
    getPatientsQuantity
} from "../controllers/patientController.js";

const router = express.Router();

router.get("/", getPatients);

router.get("/count", getPatientsQuantity);

router.get("/search/:name", getPatientByName);

router.get("/:id", getPatientById);


export default router;