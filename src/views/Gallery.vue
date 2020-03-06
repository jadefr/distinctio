<template>
  <div class="gallery-view-container">

    <!-- NavBar -->
    <div id="gallery-navbar">
      <!-- Icon -->
      <div id="icon">
        <a href="/">
          <b-icon icon="book" id="book-icon"></b-icon>
        </a>
      </div>
      <b-nav class="nav justify-content-end" id="nav">
        <b-nav-item>Autor</b-nav-item>
        <b-nav-item>Título</b-nav-item>
      </b-nav>
    </div>

    <!-- Cards -->
    <div class="gallery-card">
      <b-card-group columns>
        <Card v-for="(obj, key) in documents" :key="key"
              :author-u-r-l="obj.authorURL"
              :title-u-r-l="obj.titleURL"
              :section-u-r-l="obj.sectionURL"
              :img="img(obj)"
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
      'documents',
      'imgs'
    ])
  },
  methods: {
    img(obj) {
      let img = ''
      for (let j = 0; j < this.imgs.length; j++) {
        img = this.imgs[j]
        if (img.toString().includes(obj.img)) {
          // console.log('img.toString: ' + img.toString() + ' || obj.img: ' + obj.img)
          return img
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/sass/views/_gallery.scss';
</style>
