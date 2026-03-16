<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import PatientForm from "../components/PatientForm.vue";
import { getPatientById, updatePatient } from "../api/patientApi";

const route = useRoute();
const router = useRouter();

const patient = ref(null);
const pageLoading = ref(true);
const submitLoading = ref(false);
const errorMessage = ref("");

const loadPatient = async () => {
  try {
    pageLoading.value = true;
    errorMessage.value = "";
    patient.value = await getPatientById(route.params.id);
  } catch (error) {
    errorMessage.value = error.message;
  } finally {
    pageLoading.value = false;
  }
};

const handleUpdate = async (formData) => {
  try {
    submitLoading.value = true;
    errorMessage.value = "";

    await updatePatient(route.params.id, formData);

    router.push("/");
  } catch (error) {
    errorMessage.value = error.message;
  } finally {
    submitLoading.value = false;
  }
};

onMounted(loadPatient);
</script>

<template>
  <div>
    <h2>Edit Patient</h2>

    <p v-if="pageLoading">Loading patient...</p>
    <p v-else-if="errorMessage">{{ errorMessage }}</p>

    <PatientForm
      v-else
      :initial-values="patient"
      :loading="submitLoading"
      submit-label="Update patient"
      @submit="handleUpdate"
    />
  </div>
</template>