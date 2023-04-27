import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Game from './App.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/:catchAll(.*)",
            redirect: { name: "home" },
          },
        { 
            path: '/', 
            name:'home',
            component: Home 
        },
        {
            path: '/game',
            name: 'game',
            component: () => import('../src/views/Game.vue'),
        },
    ],
});

const app = createApp(App).use(router).mount('#app');