const API_URL = "http://localhost:3000/api/patients";

export const getPatients = async () => {
    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error("Failed to fetch patients");
    }

    return await response.json();
}