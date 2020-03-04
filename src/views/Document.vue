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
          <p v-for="(obj, index) in paragraphs" :key="index"
            v-html="obj">
          </p>
    </article>

  </div>
</template>

<script>
import { mapState } from 'vuex'
// import Paragraph from '@/components/Paragraph'

export default {
  // components: {
  //   Paragraph
  // },
  data () {
    return {
      test: 'socrates <br> platao',
      paragraphs: [],
      // paragraphString: '',
      paragraphsLength: '',
      boldFirstIndex: '',
      boldLastIndex: '',
      boldFirstIndexArray: [],
      boldLastIndexArray: [],
      paragraphWithBolds: '',
      boldIndexArray: []
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
    getBoldIndexArray (boldFirstIndex, boldLastIndex) {
      const beginning = parseInt(boldFirstIndex)
      const end = parseInt(boldLastIndex) + 1
      const array = []
      let index = ''
      for (let i = beginning; i < end; i++) {
        index = i
        array.push(index)
      }
      return array
    },
    color (str) {
      let color = ''
      if (str.includes('Fedão')) {
        color = 'red'
      } else {
        color = 'blue'
      }
      return color
    },
    // setBold (index) {
    //   let str = ''
    //   str = this.totalArrayToBeBold[index].join('')
    //   console.log(str)
    //   return str
    // }
    turnBold () {
      // let paragraph = ''
      for (let i = 0; i < this.paragraphs.length; i++) {
        // paragraph = this.paragraphs[i]
        if (this.boldIndexArray[0] === i) {
          this.paragraphWithBolds += '<b>'
        }
        if (this.boldIndexArray[this.boldIndexArray.length - 1] === i) {
          this.paragraphWithBolds += '</b>'
        }
        // this.paragraphWithBolds += paragraphs.charAt(i)
      }
      this.paragraphWithBolds += '<br><br>'
    }
  },
  mounted: function () {
    window.scrollTo(0, 0)
  },
  created () {
    for (let i = 0; i < this.documents.length; i++) {
      if (this.$route.params.sectionURL.includes(this.documents[i].sectionURL)) {
        this.paragraphsLength = this.documents[i].paragraphs.length
        let paragraph = ''
        for (let j = 0; j < this.paragraphsLength; j++) {
          paragraph = this.documents[i].paragraphs[j].text
          // this.paragraphString = this.documents[i].paragraphs[j].text
          // this.paragraphs.push(this.paragraphString)
          this.boldLength = this.documents[i].paragraphs[j].bold.length
          if (this.boldLength) {
            for (let k = 0; k < this.boldLength; k++) {
              this.boldFirstIndex = this.documents[i].paragraphs[j].bold[k].firstIndex
              this.boldLastIndex = this.documents[i].paragraphs[j].bold[k].lastIndex
              this.boldFirstIndexArray.push(this.boldFirstIndex)
              this.boldLastIndexArray.push(this.boldLastIndex)
              this.boldIndexArray = this.getBoldIndexArray(this.boldFirstIndex, this.boldLastIndex)
            }
          }
          this.paragraphs.push(paragraph)
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '../assets/sass/views/document';

  .red {
    font-weight: bold;
    color: red;
  }

  .blue {
    font-weight: normal;
    color: blue;
  }
</style>
