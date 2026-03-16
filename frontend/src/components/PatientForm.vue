<script setup>
import { ref, reactive, watch } from "vue"
import { createPatient } from "../api/PatientApi"

const props = defineProps({
    initialValues: {
        type: Object,
        default: () => ({
            first_name: "",
            last_name: "",
            birth_date: "",
            gender: "",
            email: "",
            phone: "",
            medical_note: ""
        })
    },
    submitLabel: {
        type: String,
        default: "Save"
    },
    loading: {
        type: Boolean,
        default: false
    }
});

const emit = defineEmits(["submit"]);

const form = reactive({
    first_name: "",
    last_name: "",
    birth_date: "",
    gender: "",
    email: "",
    phone: "",
    medical_note: ""
});

watch(
    () => props.initialValues,
    (values) => {
        form.first_name = values.first_name || "";
        form.last_name = values.last_name || "";
        form.birth_date = values.birth_date || "";
        form.gender = values.gender || "";
        form.email = values.email || "";
        form.phone = values.phone || "";
        form.medical_note = values.medical_note || "";
    },
    { immediate: true }
);

const handleSubmit = () => {
    emit("submit", { ...form });
};
</script>

<template>
    <form @submit.prevent="handleSubmit">
    <div>
      <label>First name</label>
      <input v-model="form.first_name" />
    </div>

    <div>
      <label>Last name</label>
      <input v-model="form.last_name" />
    </div>

    <div>
      <label>Birth date</label>
      <input v-model="form.birth_date" type="date" />
    </div>

    <div>
      <label>Gender</label>
      <input v-model="form.gender" />
    </div>

    <div>
      <label>Email</label>
      <input v-model="form.email" type="email" />
    </div>

    <div>
      <label>Phone</label>
      <input v-model="form.phone" />
    </div>

    <div>
      <label>Medical note</label>
      <textarea v-model="form.medical_note"></textarea>
    </div>

    <button type="submit" :disabled="loading">
      {{ loading ? "Saving..." : submitLabel }}
    </button>
  </form>
</template>