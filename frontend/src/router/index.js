import { createRouter, createWebHistory } from "vue-router"

import PatientListView from "../views/PatientListView.vue"
import PatientCreateView from "../views/PatientCreateView.vue"
import PatientEditView from "../views/PatientEditView.vue"

const routes = [
    {
        path: "/",
        component: PatientListView
    },
    {
        path: "/create",
        component: PatientCreateView
    },
    {
        path: "/edit/:id",
        component: PatientEditView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router