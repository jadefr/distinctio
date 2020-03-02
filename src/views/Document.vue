<template>
  <div class="document-view-container">
    <!-- Borders -->
    <div class="borders">
      <div id="left"></div>
      <div id="right"></div>
      <div id="top"></div>
      <div id="bottom"></div>
    </div>

    <!-- Icon -->
    <a href="/galeria">
      <b-icon icon="book" id="book-icon"></b-icon>
    </a>

    <!-- Header -->
    <header>
      <!-- Title -->
      <h1>{{ title() }}</h1>

      <!-- Subtitle -->
      <div class="subtitle">
        <h2 id="first-h2">{{ section()}}</h2>
        <b-icon icon="diamond-half" id="diamond-header-icon"></b-icon>
        <h2 id="second-h2">{{ author() }}</h2>
      </div>
    </header>

    <!-- Back to top button -->
    <back-to-top bottom="20px" right="20px" visibleoffset="300">
      <button type="button" class="btn btn-info btn-to-top">
        <b-icon icon="diamond-half" id="diamond-btn-icon"></b-icon>
      </button>
    </back-to-top>

    <!-- Article -->
    <article>
      <Paragraph v-for="(obj, index) in paragraphs" :key="index"
                 :paragraph="obj"
      />
    </article>

  </div>
</template>

<script>
import { mapState } from 'vuex'
import Paragraph from '@/components/Paragraph'

export default {
  components: {
    Paragraph
  },
  data () {
    return {
      paragraphs: [],
      paragraphString: ''
    }
  },
  computed: {
    ...mapState([
      'documents',
      'cards'
    ])
  },
  methods: {
    // info() {
    //   const variables = []
    //   for (let i = 0; i < this.documents.length; i++) {
    //     if (this.$route.params.titleURL.includes(this.documents[i].titleURL)) {
    //       variables.push(this.documents[i].title)
    //     }
    //     if (this.$route.params.sectionURL.includes(this.documents[i].sectionURL)) {
    //       variables.push(this.documents[i].section)
    //     }
    //     if (this.$route.params.authorURL.includes(this.documents[i].authorURL)) {
    //       variables.push(this.documents[i].author)
    //     }
    //     if (this.$route.params.sectionURL.includes(this.documents[i].sectionURL)) {
    //       variables.push(this.documents[i].content)
    //     }
    //     console.log(variables)
    //     return variables
    //   }
    // },
    title () {
      for (let i = 0; i < this.documents.length; i++) {
        if (this.$route.params.titleURL.includes(this.documents[i].titleURL)) {
          return this.documents[i].title
        }
      }
    },
    section () {
      for (let i = 0; i < this.documents.length; i++) {
        if (this.$route.params.sectionURL.includes(this.documents[i].sectionURL)) {
          return this.documents[i].section
        }
      }
    },
    author () {
      for (let i = 0; i < this.documents.length; i++) {
        if (this.$route.params.authorURL.includes(this.documents[i].authorURL)) {
          return this.documents[i].author
        }
      }
    },
    content () {
      for (let i = 0; i < this.documents.length; i++) {
        if (this.$route.params.sectionURL.includes(this.documents[i].sectionURL)) {
          return this.documents[i].content
        }
      }
    },
    // paragraphTesting () {
    //   // const paragraphs = []
    //   for (let i = 0; i < this.documents.length; i++) {
    //     if (this.$route.params.sectionURL.includes(this.documents[i].sectionURL)) {
    //       for (let j = 0; j < this.documents[i].paragraphs.length; j++) {
    //         this.paragraphString = this.documents[i].paragraphs[j].text
    //         if (this.paragraphString.length) {
    //           console.log(this.paragraphString)
    //           this.paragraphs.push(this.paragraphString)
    //           // console.log(this.paragraphs[j])
    //           // return this.paragraphs
    //         }
    //       }
    //     }
    //   }
    // },
    test () {
      console.log(this.paragraphs)
    }
  },
  mounted: function () {
    window.scrollTo(0, 0)
  },
  created () {
    for (let i = 0; i < this.documents.length; i++) {
      if (this.$route.params.sectionURL.includes(this.documents[i].sectionURL)) {
        for (let j = 0; j < this.documents[i].paragraphs.length; j++) {
          this.paragraphString = this.documents[i].paragraphs[j].text
          if (this.paragraphString.length) {
            console.log(this.paragraphString)
            this.paragraphs.push(this.paragraphString)
          }
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '../assets/sass/views/document';
</style>
