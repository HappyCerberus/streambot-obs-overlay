import { createApp } from 'vue'
import App from './App.vue'
import socket from "./plugins/socket"
/*
const app = createApp({})

app.component('todo-list', {
    data() {
        return {
            todos: ['Feed a cat', 'Buy tickets']
        }
    },
    provide: {
        user: 'John Doe'
    },
    template: `
    <div>
      {{ todos.length }}
      <!-- rest of the template -->
    </div>
  `
})

app.component('todo-list-statistics', {
    inject: ['user'],
    created() {
        console.log(`Injected property: ${this.user}`) // > Injected property: John Doe
    }
})*/

const app = createApp(App);
app.use(socket, { hostname: "ws://localhost:3000" });
app.mount('#app');
