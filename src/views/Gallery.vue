<template>
  <div class="gallery-view-container">

    <!-- NavBar -->
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item href="#">Home</b-nav-item>
        <b-nav-item>Lang</b-nav-item>
        <b-nav-item>User</b-nav-item>
      </b-navbar-nav>
    </b-navbar>

    <!-- Card -->
    <Card />
  </div>
</template>

<script>
import Card from '@/components/Card'

export default {
  components: {
    Card
  }
}
</script>
