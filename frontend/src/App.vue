<script setup>
import PatientList from './components/PatientList.vue'
</script>

<template>
  <div style="max-width: 800px; margin: 0 auto; padding: 2rem;">
    <h1>Patient Management</h1>

    <nav  style="margin-bottom: 1rem;">
      <router-link to="/">Patients</router-link>
      |
      <router-link to="/create">Add Patient</router-link>
    </nav>

    <router-view />
  </div>
</template>
