const API_URL = "http://localhost:3000/api/patients";

export const getPatients = async () => {
    const res = await fetch(API_URL);

    if (!res.ok) {
        throw new Error("Failed to fetch patients");
    }

    return await res.json();
};

export const getPatientById = async (id) => {
    const res = await fetch(`${API_URL}/${id}`);
    if (!res.ok) {
        throw new Error("Failed to fetch patient");
    }

    return await res.json();
};

export const createPatient = async (data) => {
    const res = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    if (!res.ok) {
        const errorData = await res.json().catch(() => null);
        throw new Error(errorData?.error || "Failed to create patient");
    }

    return await res.json()
};

export const updatePatient = async (id, data) => {
    const res = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    
    if (!res.ok) {
        const errorData = await res.json().catch(() => null);
        throw new Error(errorData?.error || "Failed to update patient");
    }

    return await res.json();
};

export const deletePatient = async (id) => {
    const res = await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    });

    if (!res.ok) {
        const errorData = await res.json().catch(() => null);
        throw new Error(errorData?.error || "Failed to delete patient");
    }
};