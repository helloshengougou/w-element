import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { WlButton } from 'w-element';
// console.log(WlButton);

createApp(App).use(WlButton).mount('#app');
