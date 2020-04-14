<template>
  <div class="column is-4-tablet is-3-desktop is-2-widescreen">
    <!--menu side dashboard-->
    <nav class="menu">
      <p class="menu-label">Menu</p>
      <ul class="menu-list">
        <li>
          <a class="is-active" href="dashboard.html ">
            <span class=" icon ">
              <i class=" fa fa-tachometer "></i> </span
            >Dashboard
          </a>
        </li>
        <li>
          <a href=" books.html ">
            <span class=" icon "><i class=" fa fa-book "></i></span>Books
          </a>
        </li>
        <li>
          <a href=" orders.html "
            ><span class=" icon "><i class=" fa fa-file-text-o "></i></span
            >Orders</a
          >
        </li>
        <li>
          <a href=" customers.html ">
            <span class=" icon ">
              <i class=" fa fa-dashboard "></i> </span
            >Customers
          </a>
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
