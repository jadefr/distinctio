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
              :title-u-r-l="getTitleURL(key)"
              :section-u-r-l="getSectionURL(key)"
              :author-u-r-l="getAuthorURL(key)"
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
  props: [
    'input'
  ],
  data () {
    return {
      author: [],
      title: [],
      section: [],
      images: [],
      authorURL: [],
      titleURL: [],
      sectionURL: []
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
    console.log(this.input)
    for (let i = 0; i < this.documents.length; i++) {
      if (this.$route.params.authorURL === this.documents[i].authorURL) {
        this.author.push(this.documents[i].author)
        this.title.push(this.documents[i].title)
        this.section.push(this.documents[i].section)
        this.images.push(this.documents[i].img)
        this.authorURL.push(this.documents[i].authorURL)
        this.titleURL.push(this.documents[i].titleURL)
        this.sectionURL.push(this.documents[i].sectionURL)
      }
    }
    if (this.input === 'titleURL') {
      console.log('entrou')
      this.author.length = 0
      this.title.length = 0
      this.section.length = 0
      for (let j = 0; j < this.documents.length; j++) {
        if (this.$route.params.titleURL === this.documents[j].titleURL) {
          console.log('oi ::  ' + j)
          this.author.push(this.documents[j].author)
          this.title.push(this.documents[j].title)
          this.section.push(this.documents[j].section)
        }
        // if ((this.$route.params.authorURL === this.documents[j].authorURL) && (this.$route.params.titleURL === this.documents[j].titleURL)) {
        //   console.log(this.documents[j].titleURL)
        //   console.log(j)
        //   this.author.push(this.documents[j].author)
        // }
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
    getAuthorURL (key) {
      return this.authorURL[key]
    },
    getTitleURL (key) {
      return this.titleURL[key]
    },
    getSectionURL (key) {
      return this.sectionURL[key]
    },
    img() {
      let img = ''
      for (let j = 0; j < this.imgs.length; j++) {
        img = this.imgs[j]
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
