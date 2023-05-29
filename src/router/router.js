import {
    createRouter,
    createWebHistory
} from 'vue-router';
import About from "../view/Abou.vue"
import New from "../view/New.vue"
import Home from "../view/Home.vue"
import Catalog from "../view/Catalog.vue"
import InfoCard from "../components/InfoCard.vue"
import Reg from "../components/reg.vue"
import Login from "../components/Login.vue"
import Bracket from '../view/Bracket.vue'
import Like from "../view/Like.vue"
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
        {
            path: '/Catalog',
            name: 'Catalog',
            component: Catalog,
        },
        {
            path: '/InfoCard/:id/:id2',
            name: 'InfoCard',
            component: InfoCard,
            props: true
        },
        {
            path: "/Reg",
            name: 'Reg',
            component: Reg,
        },
        {
            path: "/Login",
            name: 'Login',
            component: Login,
        },
        {
            path: "/Bracket",
            name: 'Bracket',
            component: Bracket,
        },
        {
            path: "/Like",
            name: 'Like',
            component: Like,
        }

    ]
})
export default router;