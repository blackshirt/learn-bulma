<template>
    <div>
        <Navbar />
        <slot />
        <Footer />
    </div>
</template>

<script>
    import Navbar from '../components/Navbar.vue';
    import Footer from '../components/Footer.vue';

    export default {
        name: "PublicLayout",
        components: {
            Navbar,
            Footer
        }
    };
</script>