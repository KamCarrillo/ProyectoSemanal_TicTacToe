import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/home', component: Home },
    ],
});

const app = createApp(App);
app.use(router);
app.mount('#app');

createApp(App).mount('#app')
