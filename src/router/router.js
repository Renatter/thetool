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
import Discount from "../view/Discount.vue"
import Hit from "../view/Hit.vue"
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
            path: '/',
            name: '/',
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
            path: "/Hit",
            name: 'Hit',
            component: Hit,
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
        },
        {
            path: "/Discount",
            name: 'Discount',
            component: Discount,
        }

    ]
})
export default router;