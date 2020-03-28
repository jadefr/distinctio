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
      <h1>{{ info[0] }}</h1>

      <!-- Subtitle -->
      <div class="subtitle">
        <h2 id="first-h2">{{ info[1] }}</h2>
        <b-icon icon="diamond-half" id="diamond-header-icon"></b-icon>
        <h2 id="second-h2">{{ info[2] }}</h2>
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
         v-if="footnotes.length">
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
      footnotes: [],
      info: []
    }
  },
  computed: {
    ...mapState([
      'documents2'
    ])
  },
  /* eslint-env jquery */
  mounted: function () {
    const y = parseInt(localStorage.getItem('value' + window.location.pathname))
    window.scrollTo(0, y)

    $(document).on('scroll', function () {
      $('progress')
        .attr('max', $(document).height() - $(window).height())
        .attr('value', $(window).scrollTop())

      localStorage.setItem('value' + window.location.pathname, $(window).scrollTop())
    })
  },
  created () {
    for (let i = 0; i < this.documents2.length; i++) {
      if ((this.$route.params.sectionURL === this.documents2[i].document.sectionURL) && (this.$route.params.titleURL === this.documents2[i].document.titleURL)) {
        /* print title */
        this.info.push(this.documents2[i].document.title)

        /* print section */
        this.info.push(this.documents2[i].document.section)

        /* print author */
        this.info.push(this.documents2[i].document.author)

        /* print paragraph */
        this.paragraphsLength = this.documents2[i].document.paragraphs.length
        let paragraph = ''
        for (let j = 0; j < this.paragraphsLength; j++) {
          paragraph = this.documents2[i].document.paragraphs[j].text
          this.paragraphs.push(paragraph)
          /* print footnote */
          if (this.documents2[i].document.paragraphs[j].footnote.length) {
            for (let k = 0; k < this.documents2[i].document.paragraphs[j].footnote.length; k++) {
              if (this.documents2[i].document.paragraphs[j].footnote[k].content !== '') {
                this.footnotes.push(this.documents2[i].document.paragraphs[j].footnote[k].content)
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
</style>
