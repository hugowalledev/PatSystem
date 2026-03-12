import express from "express";
import {
    getPatients,
    getPatientById,
    getPatientByName,
    getPatientsQuantity,
    createPatient,
    updatePatient,
    deletePatient,
} from "../controllers/patientController.js";

const router = express.Router();

router.get("/", getPatients);
router.get("/count", getPatientsQuantity);
router.get("/search/:name", getPatientByName);
router.get("/:id", getPatientById);

router.post("/", createPatient);
router.put("/:id", updatePatient);
router.delete("/:id", deletePatient);


export default router;