import Vue from "vue";
import Router from "vue-router";

import Dashboard from "../pages/Dashboard.vue";
import Books from "../pages/Books.vue";
import Customers from "../pages/Customers.vue";
import Orders from "../pages/Orders.vue";
import Home from "../pages/Home.vue";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: Home,
            component: Home
        },
        {
            path: "/dashboard",
            name: Dashboard,
            component: Dashboard
        },
        {
            path: "/books",
            name: Books,
            component: Books
        },
        {
            path: "/customers",
            name: Customers,
            component: Customers
        },
        {
            path: "/orders",
            name: Orders,
            component: Orders
        }
    ],

    linkActiveClass: "is-active"
        /* change to Bulma's active nav link */
});