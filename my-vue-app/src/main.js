import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import  './assets/css/App.css'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faHome, faChartBar, faShoppingCart, faUsers, faEnvelope, faComments, faList, faCalendarAlt, faFileAlt, faAddressBook, faThList, faTh, faTasks, faFolder, faFile } from '@fortawesome/free-solid-svg-icons';

library.add(faHome, faChartBar, faShoppingCart, faUsers, faEnvelope, faComments, faList, faCalendarAlt, faFileAlt, faAddressBook, faThList, faTh, faTasks, faFolder, faFile);
const app = createApp(App)
        app.component('font-awesome-icon', FontAwesomeIcon)
        app.use(router)
        app.mount('#app')
