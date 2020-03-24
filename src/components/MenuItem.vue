<template>
  <div class="gallery-view-container">

    <!-- NavBar Component -->
    <NavBar
      :go-to="goTo"
    />

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
      author: [],
      title: [],
      section: [],
      images: [],
      authorURL: [],
      titleURL: [],
      sectionURL: []
    }
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
        this.authorURL.push(this.documents[i].authorURL)
        this.titleURL.push(this.documents[i].titleURL)
        this.sectionURL.push(this.documents[i].sectionURL)
      }
    }
    //
    if (this.input === 'titleURL') {
      this.author.length = 0
      this.title.length = 0
      this.section.length = 0
      this.authorURL.length = 0
      this.titleURL.length = 0
      this.sectionURL.length = 0
      for (let j = 0; j < this.documents.length; j++) {
        if (this.$route.params.titleURL === this.documents[j].titleURL) {
          // console.log('input: ' + this.input + ' // ' + 'j ::  ' + j + ' // author :: ' + this.documents[j].author + ' // title :: ' + this.documents[j].title + ' // section :: ' + this.documents[j].section)
          this.author.push(this.documents[j].author)
          this.title.push(this.documents[j].title)
          this.section.push(this.documents[j].section)
          this.authorURL.push(this.documents[j].authorURL)
          this.titleURL.push(this.documents[j].titleURL)
          this.sectionURL.push(this.documents[j].sectionURL)
        }
      }
    }
    // this.author.forEach(author => console.log('author: ' + author))
    // this.title.forEach(title => console.log('title: ' + title))
    // this.section.forEach(section => console.log('author: ' + section))

    if (this.input === 'allAuthors') {
      console.log(this.input)
      this.author.length = 0
      this.title.length = 0
      this.section.length = 0
      this.titleURL.length = 0
      this.sectionURL.length = 0
      let authorName = ''
      for (let m = 0; m < this.documents.length; m++) {
        authorName = this.documents[m].author
        if (!this.author.includes(authorName)) {
          this.author.push(authorName)
        }
        console.log(this.images.toString())
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
