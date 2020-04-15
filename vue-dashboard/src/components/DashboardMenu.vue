<template>
  <div class="column is-4-tablet is-3-desktop is-2-widescreen">
    <!--menu side dashboard-->
    <nav class="menu">
      <p class="menu-label">Menu</p>
      <ul class="menu-list">
        <li>
          <router-link to="/dashboard" class="is-active">
            <span class="icon"><i class="fa fa-tachometer-alt "></i></span> Dashboard
          </router-link>
        </li>
        <li>
          <router-link to="/books">
            <span class="icon"><i class=" fa fa-book "></i></span>Books
          </router-link>
        </li>
        <li>
          <router-link to="/orders"><span class=" icon "><i class=" fa fa-shopping-cart"></i></span>Orders</router-link>
        </li>
        <li>
          <router-link to="/customers">
            <span class=" icon ">
              <i class=" fa fa-user "></i> </span>Customers
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
  <!--menu side dashboard-->
</template>

<script>
    export default {
        name: "DashboardMenu"
    };
</script>