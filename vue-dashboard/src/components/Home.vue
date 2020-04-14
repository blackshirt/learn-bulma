<template>
    <div class="container">
        <nav class="navbar is-light" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <img src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/036/square_256/vue.png">
                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" @click="isOpen = !isOpen"
                    v-bind:class="{'is-active': isOpen}">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div class="navbar-menu" v-bind:class="{'is-active': isOpen}">
                <div class="navbar-end">
                    <router-link to="/" class="navbar-item is-tab">Home</router-link>
                    <router-link to="/about" class="navbar-item is-tab">About</router-link>
                    <router-link to="/else" class="navbar-item is-tab">Something Else</router-link>
                </div>
            </div>
        </nav>
        <section class="hero is-info is-large">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">
                        Large title
                    </h1>
                    <h2 class="subtitle">
                        Large subtitle
                    </h2>
                </div>
            </div>
        </section>
        <footer class="footer">
            <div class="container">
                <div class="content has-text-centered">
                    <p> {{msg}}
                        <a class="icon" href="https://github.com/jgthms/bulma">
                            <i class="fa fa-github"></i>
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
    export default {
        name: "Home",
        props: {
            msg: String
        },
        data() {
            return {
                isOpen: false
            }
        },
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>