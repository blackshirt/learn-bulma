<template>
  <div>
    <Navbar></Navbar>

    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default {
  name: "Home",
  components: { Navbar, Footer }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>