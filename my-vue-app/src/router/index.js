import {createRouter,createWebHistory} from 'vue-router';
import dashboard from '../page/master/dashboard.vue'
import home from '../page/home.vue'
import profile from '../page/profile.vue'

const routes = [
    {
        name: 'Dashboard',
        path:'/',
        component:dashboard
    },
    {
        name: 'home',
        path:'/home',
        component:home
    },
    {
        name: 'profile',
        path:'/profile',
        component:profile
    }
];

const router = Router();
export default router;
function Router() {
    const router = new createRouter({
        history: createWebHistory(),
        routes,
    });
    return router;
}