<template>
  <div class="author-view-container">

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
    Card
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
