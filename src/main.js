import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from '@/router'

import 'vant/lib/index.css';
import 'primeflex/primeflex.css'
import { Tabbar, TabbarItem } from 'vant';
import { Tab, Tabs } from 'vant';
import { Cell, CellGroup } from 'vant';
import { Checkbox, CheckboxGroup } from 'vant';
import { Button } from 'vant';

const app = createApp(App);

app.use(router);

app.use(Tabbar);
app.use(TabbarItem);
app.use(Tab);
app.use(Tabs);
app.use(Cell);
app.use(CellGroup);
app.use(Checkbox);
app.use(CheckboxGroup);
app.use(Button);

app.mount('#app')
