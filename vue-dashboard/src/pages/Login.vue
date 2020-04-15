<template>
    <div class="columns">
        <div class="column">
            <Banner />
        </div>

        <div class=" column is-3-desktop">
            <form class="box">
                <div class="field">
                    <label class="label">Email</label>
                    <div class="control has-icons-left">
                        <input v-model="form.email" class="input" :class="{'is-danger': error.email}" type="email"
                            placeholder="0302@gmail.com" required>
                        <span class="icon is-small is-left">
                            <i class="fa fa-envelope"></i>
                        </span>
                    </div>
                    <p class="help is-danger" v-if="error.email">Oops! Can't find user.</p>
                </div>
                <div class="field">
                    <label class="label">Password</label>
                    <div class="control has-icons-left">
                        <input class="input" v-model="form.password" :class="{'is-danger': error.password}"
                            type="password" placeholder="********" required>
                        <span class="icon is-small is-left">
                            <i class="fa fa-lock"></i>
                        </span>
                    </div>
                    <p class="help is-danger" v-if="error.password">Oops! wrong password.</p>
                </div>
                <div class="field">
                    <label class="checkbox">
                        <input type="checkbox">
                        Remember me
                    </label>
                </div>
                <div class="field">
                    <button class="button is-primary" @click.prevent="tryLogin">Login</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import Banner from "../components/Banner";
    export default {
        name: "Login",
        components: {
            Banner
        },
        data() {
            return {
                form: {
                    email: "",
                    password: ""
                },
                error: {
                    email: "",
                    password: ""
                }
            }
        },
        methods: {
            tryLogin() {
                this.resetErrors();
                if (this.form.email !== 'user@bulma.com') {
                    return this.error.email = true;
                }
                if (this.form.password !== 'password') {
                    return this.error.password = true;
                }
                this.resetErrors();
                this.$router.push('dashboard');
            },
            resetErrors() {
                this.error.email = false;
                this.error.password = false;
            }
        },
    };
</script>