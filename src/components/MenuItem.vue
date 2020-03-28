<template>
  <div class="gallery-view-container">

    <!-- NavBar Component -->
    <NavBar
      :go-to="goTo"
    />

    <!-- Card Component -->
    <div class="gallery-card">
      <b-card-group columns>
        <Card v-for="(obj, key) in document" :key="key"
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
  props: [
    'input'
  ],
  data () {
    return {
      goTo: 'galeria',
      document: []
    }
  },
  computed: {
    ...mapState([
      'documents2',
      'imgs'
    ])
  },
  created() {
    for (let i = 0; i < this.documents2.length; i++) {
      if (this.$route.params.authorURL === this.documents2[i].document.authorURL) {
        this.document.push(this.documents2[i].document)
      }
    }
    //
    if (this.input === 'titleURL') {
      this.document.length = 0
      for (let i = 0; i < this.documents2.length; i++) {
        if (this.$route.params.titleURL === this.documents2[i].document.titleURL) {
          this.document.push(this.documents2[i].document)
        }
      }
    }
  },
  methods: {
    img(obj) {
      let img = ''
      for (let j = 0; j < this.imgs.length; j++) {
        img = this.imgs[j]
        if (img.toString().includes(obj.img)) {
          return img
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/sass/views/gallery';
</style>
