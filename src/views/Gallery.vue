<template>
  <div class="gallery-view-container">

    <!-- NavBar Component -->
    <NavBar />

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
import NavBar from '@/components/NavBar'

export default {
  components: {
    Card,
    NavBar
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
