<template>
  <div class="gallery-view-container">

    <!-- NavBar -->
    <div id="gallery-navbar">
      <!-- Icon -->
      <div id="icon">
        <router-link :to="`/${goTo}`">
          <b-icon icon="book" id="book-icon"></b-icon>
        </router-link>
      </div>

      <b-navbar type="dark">
        <b-navbar-nav>
          <b-nav-item href="/guia-de-uso">Guia de Uso</b-nav-item>
          <!-- Navbar dropdowns -->
          <b-nav-item-dropdown text="Autores" right>
            <NavigationItems
              v-for="(obj, key) in uniqueElements" :key="key"
                :author-u-r-l="obj[0]"
                :author="obj[1]"
              />
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-navbar>
    </div>

  </div>
</template>

<script>
import NavigationItems from '@/components/NavigationItems'
import { mapState } from 'vuex'

export default {
  components: {
    NavigationItems
  },
  props: {
    goTo: String
  },
  data () {
    return {
      uniqueElements: []
    }
  },
  computed: {
    ...mapState([
      'documents2'
    ])
  },
  created () {
    const authorsURL = []
    const authors = []
    for (let i = 0; i < this.documents2.length; i++) {
      authorsURL.push(this.documents2[i].document.authorURL)
      authors.push(this.documents2[i].document.author)
      // console.log(i + ' :: ' + this.documents2[i].document.authorURL + ' :: ' + this.documents2[i].document.author)
    }
    const unique = (value, index, self) => {
      return self.indexOf(value) === index
    }
    const uniqueAuthors = authors.filter(unique).sort()
    // console.log(uniqueAuthors.length)
    uniqueAuthors.forEach(value => console.log('author: ' + value))

    const uniqueAuthorsURL = authorsURL.filter(unique).sort()
    // console.log(uniqueAuthorsURL.length)
    uniqueAuthorsURL.forEach(value => console.log('authorURL: ' + value))

    //
    for (let i = 0; i < uniqueAuthors.length; i++) {
      const array = [uniqueAuthorsURL[i], uniqueAuthors[i]]
      // console.log(array)
      this.uniqueElements.push(array)
    }
  }
}
</script>

<style lang="scss">
  @import '../assets/sass/views/gallery';
</style>
