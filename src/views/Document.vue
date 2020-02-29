<template>
  <div class="document-view-container">
    <!-- Borders -->
    <div class="borders">
      <div id="left"></div>
      <div id="right"></div>
      <div id="top"></div>
      <div id="bottom"></div>
    </div>

    <!-- Header -->
    <header>
      <h1>{{ info()[0] }}</h1>
      <h2>{{ info()[1] }}</h2><b-icon icon="dot" id="dot-icon"></b-icon><h2>{{ info()[2] }}</h2>
    </header>

    <!-- Back to top -->
    <back-to-top bottom="20px" right="20px" visibleoffset="300">
      <button type="button" class="btn btn-info btn-to-top"><b-icon icon="diamond-half" id="diamond-half-icon"></b-icon></button>
    </back-to-top>

    <article>
      <p>{{ info()[3] }}</p>
    </article>

  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState([
      'documents'
    ])
  },
  methods: {
    info() {
      const variables = []
      for (let i = 0; i < this.documents.length; i++) {
        if (this.$route.params.titleURL.includes(this.documents[i].titleURL)) {
          variables.push(this.documents[i].title)
        }
        if (this.$route.params.sectionURL.includes(this.documents[i].sectionURL)) {
          variables.push(this.documents[i].section)
        }
        if (this.$route.params.authorURL.includes(this.documents[i].authorURL)) {
          variables.push(this.documents[i].author)
        }
        if (this.$route.params.sectionURL.includes(this.documents[i].sectionURL)) {
          variables.push(this.documents[i].content)
        }
        return variables
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '../assets/sass/views/document';
</style>
