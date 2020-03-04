<template>
  <div class="document-view-container">
    <!-- Borders -->
    <div class="borders">
      <div id="left"></div>
      <div id="right"></div>
      <div id="top"></div>
      <div id="bottom"></div>
    </div>

<!--    <div>-->
<!--      <h1 slot="test" v-html="paragraphWithBolds">-->
<!--      </h1>-->
<!--    </div>-->

<!--    <div>-->
<!--      <h1 slot="test2" v-for="(obj, index) in paragraphs" :key="index"-->
<!--          v-html="obj">-->
<!--      </h1>-->
<!--    </div>-->

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
<!--      <Paragraph v-for="(obj, index) in paragraphs" :key="index"-->
<!--                 :paragraph="obj"-->
<!--      />-->
      <p v-html="paragraphWithBolds">
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
    breakParagraph (paragraphString) {
      // const flags = []
      // let i = 0
      // while (i < paragraphString.length) {
      //   flags.push(i)
      //   i++
      // }
      // for (let i = 0; i < paragraphString.length; i++) {
      //   if (paragraphString.charAt(i) === '.' && paragraphString.charAt(i + 1) !== ' ') {
      //     flags.push(i)
      //   }
      // }
      // console.log(flags.length)
      // for (const flag of flags) {
      //   console.log(flag)
      //   console.log('paragraphString ::  ' + paragraphString.charAt(flag))
      //   console.log(paragraphString.charAt(flag + 2))
      //   console.log(paragraphString)
      // }
      return paragraphString
    },
    leonardo () {
      const rawParagraph = 'Fedão - Não, eu mesmo, Equécrates.'
      const bolds = [
        {
          start: '',
          end: ''
        },
        {
          start: 23,
          end: 33
        }
      ]

      // console.log(rawParagraph)

      let processedParagraph = ''
      const boldStarts = []
      const boldEnds = []

      for (const bold of bolds) {
        boldStarts.push(bold.start)
        boldEnds.push(bold.end)
      }

      // console.log(boldStarts)
      // console.log(boldEnds)

      for (let i = 0; i < rawParagraph.length; i++) {
        if (boldStarts.includes(i)) {
          // console.log('posicao ' + i + ' inicia um bold')
          processedParagraph += '<b>'
        }

        if (boldEnds.includes(i)) {
          // console.log('posicao ' + i + ' fecha um bold')
          processedParagraph += '</b>'
        }

        processedParagraph += rawParagraph.charAt(i)
      }

      return processedParagraph
    },
    // setBold (index) {
    //   let str = ''
    //   str = this.totalArrayToBeBold[index].join('')
    //   console.log(str)
    //   return str
    // }
    turnBold (paragraphString) {
      for (let i = 0; i < paragraphString.length; i++) {
        if (this.boldIndexArray[0] === i) {
          this.paragraphWithBolds += '<b>'
        }
        if (this.boldIndexArray[this.boldIndexArray.length - 1] === i) {
          this.paragraphWithBolds += '</b>'
        }
        this.paragraphWithBolds += paragraphString.charAt(i)
      }
      this.paragraphWithBolds += '<br>'
      this.paragraphs.push(this.paragraphWithBolds)
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
          // this.paragraphs.push(this.paragraphString)
          this.turnBold(paragraph)
          // this.paragraphs.push(paragraph)
          //
          // if (this.boldIndexArray[0]) {
          //   this.paragraphWithBolds += '<b>'
          // }
          // if (this.boldIndexArray[this.boldIndexArray.length - 1]) {
          //   this.paragraphWithBolds += '</b>'
          // }
          // for (let a = 0; a < this.boldIndexArray; a++) {
          //   if (this.boldFirstIndexArray.includes(j)) {
          //     // this.paragraphString += '<hr>'
          //     this.paragraphWithBolds += '<b>'
          //   }
          //   if (this.boldLastIndexArray.includes(j)) {
          //     // this.paragraphString += '<hr>'
          //     this.paragraphWithBolds += '</b>'
          //   }
          // }
          // this.paragraphWithBolds += this.paragraphString.charAt(j)
          // this.paragraphString += '<br><br>'
          // this.paragraphs.push(this.paragraphString)
          // this.paragraphs.push(this.paragraphWithBolds)
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
