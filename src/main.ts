import { createApp } from "vue";
import App from "./App.vue";
import { createWebHistory, createRouter } from "vue-router";
import "./style.css";

import HomeView from "./components/Home/HomeView.vue";
import AboutView from "./components/About/AboutView.vue";
import ProjectView from "./components/Projects/ProjectView.vue";

const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/about", name: "about", component: AboutView },
  { path: "/projects", name: "projects", component: ProjectView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");
