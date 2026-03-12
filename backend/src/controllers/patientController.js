const patients = [
  {
    id: 1,
    first_name: "Alice",
    last_name: "Martin",
    birth_date: "1990-04-12",
    gender: "F",
    email: "alice@example.com",
    phone: "0600000000"
  },
  {
    id: 2,
    first_name: "Bob",
    last_name: "Durand",
    birth_date: "1985-09-22",
    gender: "M",
    email: "bob@example.com",
    phone: "0611111111"
  },
  {
    id: 3,
    first_name: "Charline",
    last_name: "Durand",
    birth_date: "1986-10-02",
    gender: "F",
    email: "charline@example.com",
    phone: "0611111112"
  }
];

export const getPatients = (req, res) => {
    res.json(patients);
};

export const getPatientById = (req, res) => {
    const id = parseInt(req.params.id);

    if (isNaN(id)){
        return res.status(400).json({
            message: "Invalid patient id"
        });
    }
    
    const patient = patients.find(p => p.id === id);

    if (!patient) {
        return res.status(404).json({
            message: "Patient not found"
        });
    }
    
    res.json(patient);
};

export const getPatientByName = (req, res) => {
    const firstname = req.params.name;
    const patient = patients.find(p => p.first_name == firstname);


    if (!patient) {
        return res.status(404).json({
            message: "Patient not found"
        });
    }

    res.json(patient);
};

export const getPatientsQuantity = (req, res) => {
    res.json(patients.length);
}