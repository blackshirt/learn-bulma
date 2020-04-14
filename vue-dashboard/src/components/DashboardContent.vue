<template>
  <div class="column">
    <!--dashboard-->
    <div class="level ">
      <!-- header kontent dashboard-->
      <div class="level-left ">
        <h1 class="subtitle is-3 ">
          <span class="has-text-grey-light ">Hello</span>
          <strong>greenshirt</strong>
        </h1>
      </div>
      <div class="level-right">
        <div class="select">
          <select>
            <option>Today</option>
            <option>Yesterday</option>
            <option>Last week</option>
            <option selected>This Month</option>
            <option>This Year</option>
            <option>All time</option>
          </select>
        </div>
      </div>
    </div>
    <!-- header kontent dashboard-->

    <div class="columns is-multiline">
      <!-- kontent dashboard -->
      <div class="column is-12-tablet is-6-desktop is-3-widescreen">
        <div class="notification is-link has-text">
          <p class="title is-1">232</p>
          <p class="subtitle is-4">Orders</p>
        </div>
      </div>
      <div class="column is-12-tablet is-6-desktop is-3-widescreen">
        <div class="notification is-info has-text">
          <p class="title is-1">$7,648</p>
          <p class="subtitle is-4">Revenue</p>
        </div>
      </div>
      <div class="column is-12-tablet is-6-desktop is-3-widescreen">
        <div class="notification is-primary has-text">
          <p class="title is-1">1,678</p>
          <p class="subtitle is-4">Visitors</p>
        </div>
      </div>
      <div class="column is-12-tablet is-6-desktop is-3-widescreen">
        <div class="notification is-success has-text">
          <p class="title is-1">20,756</p>
          <p class="subtitle is-4">Pageviews</p>
        </div>
      </div>
      <div class="column is-12-tablet is-6-desktop is-4-widescreen">
        <div class="card">
          <div class="card-content">
            <h2 class="title is-4">Latest orders</h2>
            <div class="level">
              <div class="level-left">
                <div>
                  <p class="title is-5 is-marginless">
                    <a href="edit-order.html">787352</a>
                  </p>
                  <small>
                    Nov 18, 17:38 by
                    <a href="edit-customer.html">John Miller</a>
                  </small>
                </div>
              </div>
              <div class="level-right">
                <div class="has-text-right">
                  <p class="title is-5 is-marginless">
                    $56.98
                  </p>
                  <span class="tag is-warning">In progress</span>
                </div>
              </div>
            </div>
            <div class="level">
              <div class="level-left">
                <div>
                  <p class="title is-5 is-marginless">
                    <a href="edit-order.html">15444</a>
                  </p>
                  <small>
                    Jan 18, 10:38 by <a href="edit-customer.html">John Black</a>
                  </small>
                </div>
              </div>
              <div class="level-right">
                <div class="has-text-right">
                  <p class="title is-5 is-marginless">
                    $50.00
                  </p>
                  <span class="tag is-success">Succesfull</span>
                </div>
              </div>
            </div>
            <a class="button is-link is-outlined" href="orders.html"
              >View all orders</a
            >
          </div>
        </div>
      </div>
      <div class="column is-12-tablet is-6-desktop is-4-widescreen">
        <div class="card">
          <div class="card-content">
            <h2 class="title is-4">Most popular books</h2>
            <div class="media">
              <div class="media-left is-marginless">
                <p class="number">1</p>
              </div>
              <div class="media-left">
                <img src="logo.png" width="40" />
              </div>
              <div class="media-content">
                <p class="title is-5 is-spaced is-marginless">
                  <a href="edit-book.html">Learning Swift</a>
                </p>
              </div>
              <div class="media-right">
                146 sold
              </div>
            </div>
            <div class="media">
              <div class="media-left is-marginless">
                <p class="number">2</p>
              </div>
              <div class="media-left">
                <img src="instansi-logo.png" width="40" />
              </div>
              <div class="media-content">
                <p class="title is-5 is-spaced is-marginless">
                  <a href="edit-book.html">Learning Go</a>
                </p>
              </div>
              <div class="media-right">
                150 sold
              </div>
            </div>
            <a class="button is-link is-outlined" href="books.html"
              >View all books</a
            >
          </div>
        </div>
      </div>
      <div class="column is-12-tablet is-6-desktop is-4-widescreen">
        <div class="card">
          <div class="card-content">
            <h2 class="title is-4">
              Most loyal customers
            </h2>
            <div class="media">
              <div class="media-left is-marginless">
                <p class="number">1</p>
              </div>
              <div class="media-content">
                <p class="title is-5 is-spaced is-marginless">
                  <a href="edit-customer.html">John Miller</a>
                </p>
                <p class="subtitle is-6">
                  United States
                </p>
              </div>
              <div class="media-right">
                7 orders
              </div>
            </div>
            <div class="media">
              <div class="media-left is-marginless">
                <p class="number">2</p>
              </div>
              <div class="media-content">
                <p class="title is-5 is-spaced is-marginless">
                  <a href="edit-customer.html">Black Miller</a>
                </p>
                <p class="subtitle is-6">
                  United States
                </p>
              </div>
              <div class="media-right">
                6 orders
              </div>
            </div>
            <a class="button is-link is-outlined" href="customers.html"
              >View all customers</a
            >
          </div>
        </div>
      </div>
    </div>
    <!-- kontent dashboard -->
  </div>
  <!--dashboard-->
</template>

<script>
export default {
  name: "DashboardContent"
};
</script>

<style></style>
