import db from "../config/db.js";
/*
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
*/
export const findAll = () => {
    return new Promise((resolve, reject) => {
        db.all("SELECT * FROM patients", [], (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
};

export const findById = (id) => {
    return new Promise((resolve, reject) => {
        db.all("SELECT * FROM patients WHERE id = ?", [id], (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
};

export const findByName = (name) => {
    return new Promise((resolve, reject) => {
        db.all("SELECT * FROM patients WHERE first_name = ?", [name], (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
};

export const create = (patientData) => {
    const {
        first_name,
        last_name,
        birth_date,
        gender,
        email,
        phone,
        medical_note
    } = patientData;
    
    return new Promise((resolve, reject) => {
        const sql = `
            INSERT INTO patients (
            first_name, last_name, birth_date, gender, email, phone, medical_note
            ) VALUES (?, ?, ?, ?, ?, ?, ?)
        `;
        
        db.run(
            sql,
            [first_name, last_name, birth_date, gender, email, phone, medical_note],
            function (err) {
                if (err) {
                    reject(err);
                } else {
                    resolve({
                        id: this.lastID,
                        first_name,
                        last_name,
                        birth_date,
                        gender,
                        email,
                        phone,
                        medical_note
                    });
                }
            }
        );
    });
};

export const update = (id, patientData) => {
    return new Promise((resolve, reject) => {
        db.get("SELECT * FROM patients WHERE id = ?", [id], (err, existingPatient) => {
            if (err) {
                reject(err);
                return;
            }

            if (!existingPatient) {
                resolve(null);
                return;
            }

            const updatedPatient = {
                ...existingPatient,
                ...patientData
            };

            const sql = `
                UPDATE patients
                SET first_name = ?, last_name = ?, birth_date = ?, gender = ?, email = ?, phone = ?, medical_note = ?
                WHERE id = ?
            `;

            db.run(
                sql,
                [
                    updatedPatient.first_name,
                    updatedPatient.last_name,
                    updatedPatient.birth_date,
                    updatedPatient.gender,
                    updatedPatient.email,
                    updatedPatient.phone,
                    updatedPatient.medical_note,
                    id
                ],
                function (updateErr) {
                    if (updateErr) {
                        reject(updateErr);
                    } else {
                        resolve(updatedPatient);
                    }
                }
            );
        });
    });
};

export const remove = (id) => {
    return new Promise((resolve, reject) => {
        db.run("DELETE FROM patients WHERE id = ?", [id], function (err) {
            if (err) {
                reject(err);
            } else {
                resolve(this.changes > 0);
            }
        });
    });
};
