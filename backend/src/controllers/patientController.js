import * as patientService from "../services/patientService.js";

export const getPatients = (req, res) => {
    const patients = patientService.getAllPatients();
    res.json(patients);
};

export const getPatientById = (req, res) => {
    const id = parseInt(req.params.id);

    if (isNaN(id)){
        return res.status(400).json({
            message: "Invalid patient id"
        });
    }

    const patient = patientService.getPatientById(id);

    if (!patient) {
        return res.status(404).json({
            message: "Patient not found"
        });
    }
    
    res.json(patient);
};

export const getPatientByName = (req, res) => {
    const firstname = req.params.name;
    const patient = patientService.getPatientByName(firstname);


    if (!patient) {
        return res.status(404).json({
            message: "Patient not found"
        });
    }

    res.json(patient);
};

export const getPatientsQuantity = (req, res) => {
    const patients = patientService.getAllPatients();
    res.json(patients.length);
};

export const createPatient = (req, res) => {
    const patient = patientService.createPatient(req.body);

    res.status(201).json(patient);
};

export const updatePatient = (req, res) => {
    console.log(req.body);
    const id = parseInt(req.params.id);

    const patient = patientService.updatePatient(id, req.body);

    if (!patient) {
        return res.status(404).json({
            message: "Patient not found"
        });
    }
    res.json(patient);
};

export const deletePatient = (req, res) => {
    const id = parseInt(req.params.id);

    const deleted = patientService.deletePatient(id);

    if (!deleted) {
        return res.status(404).json({
            message: "Patient not found"
        });
    }

    res.status(204).send();
};