<template>
    <nav class="navbar has-shadow" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <router-link class="navbar-item" to="/">
                <img src="../assets/logo.png" height="128">
            </router-link>
            <div class="navbar-burger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <div class="navbar-menu">
            <div class="navbar-start">
                <div class="navbar-item">
                    <router-link to="/">Home</router-link>
                </div>
                <div class="navbar-item">
                    <router-link to="/dashboard">Dashboard</router-link>
                </div>
                <div class="navbar-item">
                    <router-link to="/login">Login</router-link>
                </div>
            </div>
            <div class="navbar-end">
                <div class="navbar-item has-dropdown is-hoverable">
                    <div class="navbar-link">Juna</div>
                    <div class="navbar-dropdown">
                        <a class="navbar-item">
                            <div> <span class="icon is-small">
                                    <i class="fa fa-user"></i>
                                </span> Profile
                            </div>
                        </a>
                        <a class="navbar-item" @click="openBugReport = true">
                            <div>
                                <span class="icon is-small">
                                    <i class="fa fa-bug"></i>
                                </span> Report
                            </div>
                        </a>
                        <a class="navbar-item">
                            <div>
                                <span class="icon is-small">
                                    <i class="fa fa-sign-out"></i>
                                </span> Sign Out
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <BugReport :showModal="openBugReport" v-on:close="openBugReport = false"></BugReport>
    </nav>

</template>

<script>
    import BugReport from "../components/BugReport.vue";

    export default {
        name: "Navbar",
        components: {
            BugReport
        },
        data() {
            return {
                openBugReport: false
            }
        },
    };
</script>