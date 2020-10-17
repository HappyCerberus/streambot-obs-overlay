import { createApp } from 'vue'
import App from './App.vue'
import socket from "./plugins/socket"

const app = createApp(App);
app.use(socket, { hostname: "ws://localhost:3000" });
app.mount('#app');
