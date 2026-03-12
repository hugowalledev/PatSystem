let patients = [
    {
    id: 1,
    first_name: "Alice",
    last_name: "Martin",
    birth_date: "1990-04-12",
    gender: "F",
    email: "alice@example.com",
    phone: "0600000000",
    medical_note: "Suivi annuel"
  },
  {
    id: 2,
    first_name: "Bob",
    last_name: "Durand",
    birth_date: "1985-09-22",
    gender: "M",
    email: "bob@example.com",
    phone: "0611111111",
    medical_note: "Allergie déclarée à la pénicilline"
  },
  {
    id: 3,
    first_name: "Charline",
    last_name: "Durand",
    birth_date: "1986-10-02",
    gender: "F",
    email: "charline@example.com",
    phone: "0611111112",
    medical_note: "hypocondriaque"
  }
]

export const findAll = () => {
    return patients;
};

export const findById = (id) => {
    return patients.find(p => p.id === id);
};

export const findByName = (name) => {
    return patients.find(p => p.first_name === name);
};

export const create = (patientData) => {
    const newPatient = {
        id: patients.length + 1,
        ...patientData
    };

    patients.push(newPatient);
    return newPatient;
};

export const update = (id, patientData) => {
    const index = patients.findIndex(p => p.id === id);

    if (index === -1) {
        return null;
    }

    patients[index] = {
        ...patients[index],
        ...patientData
    };

    return patients[index];
};

export const remove = (id) => {
    const index= patients.findIndex(p => p.id === id);

    if (index === -1) {
        return false;
    }

    patients.splice(index, 1);
    return true;
};
