<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import PatientForm from "../components/PatientForm.vue";
import { createPatient } from "../api/patientApi";

const router = useRouter();
const loading = ref(false);
const errorMessage = ref("");

const handleCreate = async (formData) => {
  try {
    loading.value = true;
    errorMessage.value = "";

    await createPatient(formData);

    router.push("/");
  } catch (error) {
    errorMessage.value = error.message;
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <div>
    <h2>Create Patient</h2>

    <p v-if="errorMessage">{{ errorMessage }}</p>

    <PatientForm
      :loading="loading"
      submit-label="Create patient"
      @submit="handleCreate"
    />
  </div>
</template>