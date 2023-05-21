import {
    createRouter,
    createWebHistory
} from 'vue-router';
import About from "../view/Abou.vue"
import New from "../view/New.vue"
import Home from "../view/Home.vue"
const router = createRouter({

    history: createWebHistory(),
    routes: [{
            path: '/About',
            name: 'About',
            component: About,

        },
        {
            path: '/New',
            name: 'New',
            component: New,
        },
        {
            path: '/Home',
            name: 'Home',
            component: Home,
        },


    ]
})
export default router;