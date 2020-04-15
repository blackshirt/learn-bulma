<template>
    <div class="column">

        <div class="level ">
            <!-- header kontent dashboard-->
            <div class="level-left ">
                <h1 class="subtitle is-3 "><span class="has-text-grey-light ">Hello </span>
                    <strong>greenshirt</strong>
                </h1>
            </div>
            <div class="level-right">
                <div class="select">
                    <select @change="changeStats">
                        <option value="today" selected>Today</option>
                        <option value="yesterday">Yesterday</option>
                        <option value="week">Last week</option>
                        <option value="month">This Month</option>
                        <option value="year">This Year</option>
                        <option value="allTime">All time</option>
                    </select>
                </div>
            </div>
        </div> <!-- header kontent dashboard-->

        <div class="columns is-multiline">
            <!-- kontent dashboard -->

            <div class="column is-12-tablet is-6-desktop is-3-widescreen">
                <div class="notification is-link has-text">
                    <p class="title is-1">{{selectedStats.orders}}</p>
                    <p class="subtitle is-4">Orders</p>
                </div>
            </div>
            <div class="column is-12-tablet is-6-desktop is-3-widescreen">
                <div class="notification is-info has-text">
                    <p class="title is-1">{{selectedStats.revenue}}</p>
                    <p class="subtitle is-4">Revenue</p>
                </div>
            </div>
            <div class="column is-12-tablet is-6-desktop is-3-widescreen">
                <div class="notification is-primary has-text">
                    <p class="title is-1">{{selectedStats.visitors}}</p>
                    <p class="subtitle is-4">Visitors</p>
                </div>
            </div>
            <div class="column is-12-tablet is-6-desktop is-3-widescreen">
                <div class="notification is-success has-text">
                    <p class="title is-1">{{selectedStats.pageviews}}</p>
                    <p class="subtitle is-4">Pageviews</p>
                </div>
            </div>

            <div class="column is-12-tablet is-6-desktop is-4-widescreen">
                <div class="card">
                    <div class="card-content">
                        <h2 class="title is-4">Latest orders</h2>
                        <div v-for="order in orders" :key="order.id">
                            <div class="level">
                                <div class="level-left">
                                    <div>
                                        <p class="title is-5 is-marginless">
                                            <router-link to="/edit-order">{{order.id}}</router-link>
                                        </p>
                                        <small>
                                            {{order.date}} by <router-link to="/edit-customer">{{order.purchasedBy}}
                                            </router-link>
                                        </small>
                                    </div>
                                </div>
                                <div class="level-right">
                                    <div class="has-text-right">
                                        <p class="title is-5 is-marginless">
                                            ${{order.price}}
                                        </p>
                                        <span class="tag" :class='order.status.class'>{{order.status.label}}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <router-link to="/orders" class="button is-link is-outlined">View all orders</router-link>
                    </div>
                </div>
            </div>

        </div>
        <!-- end kontent dashboard -->

    </div>
    <!--top column-->


</template>

<script>
    export default {
        name: "DashboardContent",

        data() {
            return {
                selectedStats: "", // places it here to make reactive on change 
                stats: {
                    today: {
                        orders: "100",
                        revenue: "7,648",
                        visitors: "1,678",
                        pageviews: "20,756"
                    },
                    yesterday: {
                        orders: "200",
                        revenue: "5,465",
                        visitors: "1,400",
                        pageviews: "17,556"
                    },
                    week: {
                        orders: "300",
                        revenue: "5,333",
                        visitors: "1,222",
                        pageviews: "20,556"
                    },
                    month: {
                        orders: "400",
                        revenue: "5,465",
                        visitors: "1,400",
                        pageviews: "18,556"
                    },
                    year: {
                        orders: "500",
                        revenue: "5,4650",
                        visitors: "1,6600",
                        pageviews: "180,556"
                    },
                    allTime: {
                        orders: "50,000",
                        revenue: "545,465",
                        visitors: "144,400",
                        pageviews: "250,556"
                    },
                },
                orders: [{
                    id: 87352,
                    date: "Nov 18, 10:38",
                    purchasedBy: "John Miller",
                    price: "56.98",
                    status: {
                        label: "In Progress",
                        class: "is-warning"
                    }
                }, {
                    id: 34555,
                    date: "Dec 18, 17:38",
                    purchasedBy: "John Black",
                    price: "500.98",
                    status: {
                        label: "Finished",
                        class: "is-info"
                    }
                }]
            };
        },
        mounted: function() {
            this.selectedStats = this.stats.today;
        },
        methods: {
            changeStats(event) {
                this.selectedStats = this.stats[event.target.value];
            }
        }
    }
</script>