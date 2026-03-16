<script setup>
import { ref, onMounted } from "vue"
import { RouterLink } from "vue-router";
import { getPatients, deletePatient } from "../api/patientApi"

const patients = ref([])
const loading = ref(true)
const errorMessage = ref("");

const loadPatients = async () => {
    try {
        loading.value = true;
        errorMessage.value = "";
        patients.value = await getPatients()
    } catch (error) {
        errorMessage.value = error.message;
    } finally {
        loading.value = false;
    }
}

const removePatient = async (id) => {
    const confirmed = window.confirm("Delete this patient?");
    
    if (!confirmed) return;

    try {
        await deletePatient(id);
        patients.value = patients.value.filter(p => p.id !== id);
    } catch (error) {
        errorMessage.value = error.message;
    }
};

onMounted(loadPatients)
</script>

<template>
    <div>
        <h2>Patients</h2>

        <p v-if="loading">Loading...</p>
        <p v-else-if="errorMessage">{{ errorMessage }}</p>

        <ul v-else>
            <li v-for="patient in patients" :key="patient.id">
                {{ patient.first_name }} {{ patient.last_name }}

                <RouterLink :to="`/edit/${patient.id}`">Edit</RouterLink>
                
                <button @click="removePatient(patient.id)">
                    Delete
                </button>
            </li>
        </ul>

    </div>
</template>
