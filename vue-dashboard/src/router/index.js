import Vue from "vue";
import Router from "vue-router";

import Dashboard from "../pages/Dashboard.vue";
import Books from "../pages/Books.vue";
import Customers from "../pages/Customers.vue";
import Orders from "../pages/Orders.vue";
import Home from "../pages/Home.vue";
import Login from "../pages/Login.vue";

Vue.use(Router);

export default new Router({

    routes: [{
            path: "/",
            name: "Home",
            component: Home,
            meta: {
                layout: 'public-layout'
            },
        },
        {
            path: "/login",
            name: "Login",
            component: Login,
            meta: {
                layout: 'public-layout'
            },
        },
        {
            path: "/dashboard",
            name: "Dashboard",
            component: Dashboard,
            meta: {
                layout: 'default-layout'
            },
        },
        {
            path: "/books",
            name: "Books",
            component: Books,
            meta: {
                layout: 'default-layout'
            },
        },
        {
            path: "/customers",
            name: "Customers",
            component: Customers,
            meta: {
                layout: 'default-layout'
            },
        },
        {
            path: "/orders",
            name: "Orders",
            component: Orders,
            meta: {
                layout: 'default-layout'
            },
        }
    ],

    linkActiveClass: "is-active"
        /* change to Bulma's active nav link */
});