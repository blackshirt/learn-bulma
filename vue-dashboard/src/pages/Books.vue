<template>
    <section class="section">
        <div class="columns">
            <DashboardMenu></DashboardMenu>
            <BookContent></BookContent>
        </div>
    </section>
</template>

<script>
    import DashboardMenu from "../components/DashboardMenu";
    import BookContent from "../components/BookContent";

    export default {
        name: "Books",
        components: {
            DashboardMenu,
            BookContent
        }
    }
</script>

<style>

</style>