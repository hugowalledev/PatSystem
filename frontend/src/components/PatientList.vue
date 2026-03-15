<script setup>
import { ref, onMounted } from "vue"
import { getPatients } from "../api/patientApi"

const patients = ref([])
const loading = ref(true)

onMounted(async () => {
    try {
        patients.value = await getPatients()
    } catch (error) {
        console.error(error)
    } finally {
        loading.value = false
    }
})
</script>

<template>
    <div>
        <h2>Patients</h2>

        <p v-if="loading">Loading...</p>

        <ul v-else>
            <li v-for="patient in patients" :key="patient.id">
                {{ patient.first_name }} {{ patient.last_name }}
            </li>
        </ul>
    </div>
</template>
