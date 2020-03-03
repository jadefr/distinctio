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
                 :test="boldChar(obj, index)"
                 :bold="totalArrayToBeBold[index]"
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
      colorStyle: {
        fontWeight: '800',
        color: 'red'
      },
      paragraphs: [],
      paragraphString: '',
      paragraphsLength: '',
      boldStringLength: '',
      boldArray: [],
      boldLength: '',
      boldString: '',
      boldFirstIndex: '',
      boldLastIndex: '',
      letterToBeBold: '',
      normalParagraphString: '',
      paragraphArrayToBeBold: [],
      totalArrayToBeBold: [],
      boldIndexArray: [],
      charToBeBold: '',
      totalCharToBeBold: []
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
    color (paragraphText, index) {
      // let boldArray = []
      // boldArray = this.totalArrayToBeBold[index]
      let color = ''
      color = 'normal'
      if (paragraphText.includes('Fedão')) {
        color = 'bold'
      } else {
        color = 'normal'
      }
      // for (let i = 0; i < boldArray.length; i++) {
      //   if (paragraphText.charAt(boldArray[i]) === 'a') {
      //     color = 'bold'
      //   } else {
      //     color = 'normal'
      //   }
      // }
      return color
    },
    boldChar (obj, index) {
      const intIndex = index
      const paragraph = String(obj)
      console.log('1. index :: ' + index)
      console.log('2. boldIndex :: + ' + this.totalArrayToBeBold[index])
      if (this.totalArrayToBeBold[intIndex].length) {
        const boldIndexLength = this.totalArrayToBeBold[intIndex].length
        console.log('3. boldIndexLength :: ' + boldIndexLength)
        console.log(paragraph)
        let boldChar = ''
        const boldArray = []
        for (let i = 0; i < boldIndexLength; i++) {
          console.log(paragraph.charAt(i))
          boldChar = paragraph.charAt(i)
          boldArray.push(boldChar)
        }
        console.log('4 ::  ' + boldArray.toString())
        const boldString = boldArray.join('')
        console.log('5. boldString ::  ' + boldString)
        return boldString
      }
    }
  },
  mounted: function () {
    window.scrollTo(0, 0)
  },
  created () {
    for (let i = 0; i < this.documents.length; i++) {
      if (this.$route.params.sectionURL.includes(this.documents[i].sectionURL)) {
        this.paragraphsLength = this.documents[i].paragraphs.length
        for (let j = 0; j < this.paragraphsLength; j++) {
          this.paragraphString = this.documents[i].paragraphs[j].text
          if (this.paragraphString.length) {
            // console.log(this.paragraphString)
            // this.paragraphs.push(this.paragraphString)
            this.boldLength = this.documents[i].paragraphs[j].bold.length
            for (let k = 0; k < this.boldLength; k++) {
              this.boldFirstIndex = this.documents[i].paragraphs[j].bold[k].firstIndex
              this.boldLastIndex = this.documents[i].paragraphs[j].bold[k].lastIndex
              this.boldStringLength = this.boldLastIndex - this.boldFirstIndex + 1
              // console.log(this.boldFirstIndex)
              // console.log(this.boldLastIndex)
              // console.log(this.boldStringLength)
              this.boldIndexArray = this.getBoldIndexArray(this.boldFirstIndex, this.boldLastIndex)
              this.totalArrayToBeBold.push(this.boldIndexArray)
            }
            // console.log('5. this.boldIndexArray j ::  ' + this.boldIndexArray)
            // console.log('6. totalArrayToBeBold ::  ' + this.totalArrayToBeBold)
            this.paragraphs.push(this.paragraphString)
            // console.log('2. boldIndexArray ::  ' + this.boldIndexArray)
            //
            // this.normalParagraphString = this.documents[i].paragraphs[j].text
            // console.log('1. normalParagraphString ::  ' + this.normalParagraphString)
            // console.log('2. this.boldStringLength ::  ' + this.boldStringLength)
            // let letter = ''
            // const array = []
            // for (let m = 0; m < this.boldStringLength; m++) {
            //   letter = this.normalParagraphString.charAt(m)
            //   array.push(letter)
            //   letter = ''
            // }
            // console.log('3. array ::  ' + array.toString())
            //
            //
            // for (let m = 0; m < this.boldStringLength; m++) {
            //
            //   console.log(this.strToBeBold)
            //   // this.color(this.strToBeBold)
            //   this.arrayToBeBold.push(this.strToBeBold)
            //   console.log(this.arrayToBeBold.length)
            //   // console.log(this.arrayToBeBold[m])
            // }

            // for (let k = 0; k < this.paragraphsLength; k++) {
            //   this.boldArray = this.documents[i].paragraphs[j].bold[k]

            // console.log('boldArray :: ' + this.boldArray)
            // if (this.boldArray.length) {
            //   this.boldFirstIndex = this.documents[i].paragraphs[j].bold[k].firstIndex
            //   this.boldLastIndex = this.documents[i].paragraphs[j].bold[k].lastIndex
            //   if (this.boldFirstIndex.length && this.boldLastIndex.length) {
            //     this.boldStringLength = this.boldLastIndex - this.boldFirstIndex + 1
            //     console.log(this.boldStringLength)
            //   }
            // }
          }
        }
      }
    }
    // console.log('7. this.boldIndexArray  ::  ' + this.boldIndexArray)
    // console.log('8. totalArrayToBeBold index ::  ' + this.totalArrayToBeBold[4])
  }
}
</script>
<style lang="scss" scoped>
  @import '../assets/sass/views/document';

  .bold {
    font-weight: bold;
    color: red;
  }

  .normal {
    font-weight: normal;
    color: blue;
  }
</style>
