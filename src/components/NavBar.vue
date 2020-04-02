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
            <!-- NavigationItems Component -->
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
  /* eslint-env jquery */
  mounted: function () {
    var lastScrollTop = 0
    $(window).scroll(function() {
      var st = $(this).scrollTop()
      var banner = $('#gallery-navbar')
      setTimeout(function() {
        if (st > lastScrollTop) {
          banner.addClass('hide')
        } else {
          banner.removeClass('hide')
        }
        lastScrollTop = st
      }, 100)
    })
  },
  created () {
    const authorsURL = []
    const authors = []
    for (let i = 0; i < this.documents2.length; i++) {
      authorsURL.push(this.documents2[i].document.authorURL)
      authors.push(this.documents2[i].document.author)
    }
    const unique = (value, index, self) => {
      return self.indexOf(value) === index
    }
    const uniqueAuthors = authors.filter(unique).sort()
    const uniqueAuthorsURL = authorsURL.filter(unique).sort()

    for (let i = 0; i < uniqueAuthors.length; i++) {
      const array = [uniqueAuthorsURL[i], uniqueAuthors[i]]
      this.uniqueElements.push(array)
    }
  }
}
</script>

<style lang="scss">
  @import '../assets/sass/views/gallery';

  #gallery-navbar {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    height: 6em;
    transition: transform 300ms;
    z-index: 10;
    &.hide {
      transform: translateY(-6em);
    }
  }
</style>
