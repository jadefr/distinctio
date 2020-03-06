<template>
  <div class="gallery-view-container">

    <!-- NavBar Component -->
    <NavBar />

    <!-- Card Component -->
    <div class="gallery-card">
      <b-card-group columns>
        <Card v-for="(obj, key) in author" :key="key"
              :img="img()"
              :title="getTitle(key)"
              :section="getSection(key)"
              :author="getAuthor(key)"
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
  data () {
    return {
      author: [],
      title: [],
      section: [],
      images: []
    }
  },
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
  created() {
    for (let i = 0; i < this.documents.length; i++) {
      if (this.$route.params.authorURL === this.documents[i].authorURL) {
        this.author.push(this.documents[i].author)
        this.title.push(this.documents[i].title)
        this.section.push(this.documents[i].section)
        this.images.push(this.documents[i].img)
      }
    }
  },
  methods: {
    getAuthor (key) {
      return this.author[key]
    },
    getTitle (key) {
      return this.title[key]
    },
    getSection (key) {
      return this.section[key]
    },
    img() {
      let img = ''
      for (let j = 0; j < this.imgs.length; j++) {
        img = this.imgs[j]
        console.log(img)
        if (img.toString().includes(this.images[0])) {
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
