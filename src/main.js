import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from '@/router'

import 'vant/lib/index.css';
import 'primeflex/primeflex.css'
import { Tabbar, TabbarItem } from 'vant';

const app = createApp(App);

app.use(router);

app.use(Tabbar);
app.use(TabbarItem);

app.mount('#app')
