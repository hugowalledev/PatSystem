import sqlite3 from "sqlite3";

sqlite3.verbose();

const db = new sqlite3.Database("./patients.db", (err) => {
    if (err) {
        console.error("Error opeining database:", err.message);
    } else {
        console.log("Connected to SQLite database.");
    }
});

db.run(`
    CREATE TABLE IF NOT EXISTS patients(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    birth_date TEXT NOT NULL,
    gender TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    medical_note TEXT
    )
`);

export default db;