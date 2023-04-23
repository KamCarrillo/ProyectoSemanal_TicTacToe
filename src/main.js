import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { 
            path: '/home', 
            name:'home',
            component: Home 
        },
        {
            path: '/',
            name: 'game',
            component: App
        }
    ],
});

const app = createApp(App);
app.use(router);
app.mount('#app');