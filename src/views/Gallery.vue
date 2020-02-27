<template>
  <div class="gallery-view-container">
<!--    <b-navbar id="gallery-navbar">-->
<!--      <b-navbar-nav>-->
<!--        <b-nav-item href="#" class="nav-bar-item">-->
<!--        </b-nav-item>-->
<!--        <b-nav-item class="nav-bar-item">Lang</b-nav-item>-->
<!--        <b-nav-item class="nav-bar-item">User</b-nav-item>-->
<!--        <b-nav-item class="nav-bar-item">User</b-nav-item>-->
<!--      </b-navbar-nav>-->
<!--    </b-navbar>-->

    <!-- NavBar -->
    <div id="gallery-navbar">
      <!-- Icon -->
      <div id="icon">
        <a href="/">
          <b-icon icon="book" id="book-icon"></b-icon>
        </a>
      </div>
      <b-nav class="nav justify-content-end" id="nav">
        <b-nav-item active>Active</b-nav-item>
        <b-nav-item>Link</b-nav-item>
        <b-nav-item>Another Link</b-nav-item>
        <b-nav-item disabled>Disabled</b-nav-item>
      </b-nav>
    </div>

    <!-- Cards -->
    <div class="gallery-card">
      <b-card-group columns>
        <Card v-for="(obj, key) in cards" :key="key"
              :title="obj.title"
              :section="obj.section"
              :author="obj.author"
        />
      </b-card-group>
    </div>
  </div>

</template>

<script>
import { mapState } from 'vuex'
import Card from '@/components/Card'

export default {
  components: {
    Card
  },
  computed: {
    ...mapState([
      'cards'
    ])
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/sass/views/_gallery.scss';
</style>
