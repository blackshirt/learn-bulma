<template>
  <section class="section">
    <div class="columns">
      <DashboardMenu></DashboardMenu>
      <DashboardContent></DashboardContent>
    </div>
  </section>
</template>

<script>
import DashboardMenu from "../components/DashboardMenu";
import DashboardContent from "../components/DashboardContent";

export default {
  name: "Dashboard",
  components: { DashboardMenu, DashboardContent }
};
</script>
