<template>
  <div class="document-view-container">

    <!-- Borders -->
    <div class="borders">
      <div id="left"></div>
      <div id="right"></div>
      <div id="top"></div>
      <div id="bottom"></div>
    </div>

    <!-- Progress Bar -->
    <progress value="0"></progress>

    <!-- Header Icons -->
    <div class="header-icons">
      <!-- Font Icons -->
      <div class="font-icons">
        <button v-on:click="fontSize += 0.25">A+</button>
        <button v-on:click="fontSize < 0.5? fontSize = 0.25: fontSize -= 0.25">A-</button>
      </div>
      <!-- Book Icon -->
      <a href="/galeria">
        <b-icon icon="book" id="book-icon"></b-icon>
      </a>
    </div>

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
    <article v-bind:style="{ fontSize: fontSize + 'rem' }">
          <p v-for="(obj, index) in paragraphs" :key="index"
            v-html="obj">
          </p>
    </article>

    <!-- Footnotes -->
    <div id="footnotes"
      v-if="footnotes.length" >
      <p
         v-for="(obj, index) in footnotes" :key="index"
         v-html="(index + 1) + '.  ' + obj">
      </p>
    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      fontSize: 1,
      paragraphs: [],
      paragraphsLength: '',
      boldFirstIndex: '',
      boldLastIndex: '',
      boldFirstIndexArray: [],
      boldLastIndexArray: [],
      paragraphWithBolds: '',
      boldIndexArray: [],
      footnotes: [],
      height: 0
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
        if ((this.$route.params.sectionURL === this.documents[i].sectionURL) && (this.$route.params.titleURL === this.documents[i].titleURL)) {
          return this.documents[i].title
        }
      }
    },
    section () {
      for (let i = 0; i < this.documents.length; i++) {
        if (this.$route.params.sectionURL === this.documents[i].sectionURL) {
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
    }
  },
  /* eslint-env jquery */
  mounted: function () {
    window.scrollTo(0, 0)
    //
    // window.scrollTo({
    //   top: 0,
    //   left: 0,
    //   behavior: 'smooth'
    // })
    //
    const winHeight = $(window).height()
    console.log(winHeight)
    const docHeight = $(document).height()
    console.log(docHeight)
    const progressBar = $('progress')
    var max, value

    /* Set the max scrollable area */
    max = docHeight - winHeight
    progressBar.attr('max', max)

    $(document).on('scroll', function() {
      value = $(window).scrollTop()
      progressBar.attr('value', value)
    })
  },
  created () {
    for (let i = 0; i < this.documents.length; i++) {
      if ((this.$route.params.sectionURL === this.documents[i].sectionURL) && (this.$route.params.titleURL === this.documents[i].titleURL)) {
        this.paragraphsLength = this.documents[i].paragraphs.length
        let paragraph = ''
        for (let j = 0; j < this.paragraphsLength; j++) {
          paragraph = this.documents[i].paragraphs[j].text
          this.paragraphs.push(paragraph)
          //
          if (this.documents[i].paragraphs[j].footnote.length) {
            for (let k = 0; k < this.documents[i].paragraphs[j].footnote.length; k++) {
              if (this.documents[i].paragraphs[j].footnote[k].content !== '') {
                this.footnotes.push(this.documents[i].paragraphs[j].footnote[k].content)
              }
            }
          }
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '../assets/sass/views/document';

  #footnotes {
    margin: 0 10%;
    padding-bottom: 10px;
    font-size: 1.2rem;

    @include mobile {
      margin: 0 7%
    }
  }
</style>
