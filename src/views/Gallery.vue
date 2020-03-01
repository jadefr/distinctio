<template>
  <div class="gallery-view-container">

    <!-- NavBar -->
    <div id="gallery-navbar">
      <!-- Icon -->
      <div id="icon">
        <a href="/">
          <b-icon icon="book" id="book-icon"></b-icon>
        </a>
      </div>
      <b-nav class="nav justify-content-end" id="nav">
        <b-nav-item>Autor</b-nav-item>
        <b-nav-item>Título</b-nav-item>
      </b-nav>
    </div>

<!--    <div>-->
<!--      <br>-->
<!--      <h1>Testing Method</h1>-->
<!--      <br>-->
<!--      <div v-for="(card, key) in cards" :key="key">-->
<!--        <br>-->
<!--        <br>-->
<!--        <h2>Item Novo</h2>-->
<!--        <h3>card.author: {{ card.author }}; card.img: {{ card.img }}</h3>-->
<!--        <div v-for="(img, index) in imgs" :key="index">-->
<!--          <h2>card.img: {{ card.img }} | img.toString()): {{ img.toString() }} | {{img.toString().includes(card.img) }}</h2>-->
<!--          <div v-if="img.toString().includes(card.img)">-->
<!--            <img :src="img" style="max-width: 540px; max-height: 360px;"/>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->

    <!-- Cards -->
    <div class="gallery-card">
      <b-card-group columns>
        <Card v-for="(obj, key) in documents" :key="key"
              :author-u-r-l="obj.authorURL"
              :title-u-r-l="obj.titleURL"
              :section-u-r-l="obj.sectionURL"
              :img="img(obj)"
              :title="obj.title"
              :section="obj.section"
              :author="obj.author"
        />
      </b-card-group>
    </div>
  </div>

</template>

<script>
import { mapState } from 'vuex'
import Card from '@/components/Card'

export default {
  components: {
    Card
  },
  computed: {
    ...mapState([
      'documents',
      'imgs'
    ])
  },
  methods: {
    img(obj) {
      let img = ''
      for (let j = 0; j < this.imgs.length; j++) {
        img = this.imgs[j]
        if (img.toString().includes(obj.img)) {
          // console.log('img.toString: ' + img.toString() + ' || obj.img: ' + obj.img)
          return img
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/sass/views/_gallery.scss';
</style>
