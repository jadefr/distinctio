<template>
  <div class="gallery-view-container">

    <!-- NavBar -->
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item href="#">Home</b-nav-item>
        <b-nav-item>Lang</b-nav-item>
        <b-nav-item>User</b-nav-item>
      </b-navbar-nav>
    </b-navbar>

    <!-- Card -->
    <Card v-for="(obj, key) in dataAPI" :key="key"
      title="cards.title"
      section="Section"
      author="Autor"
    />
  </div>
</template>

<script>
import Card from '@/components/Card'

export default {
  data: () => ({
    dataAPI: [
      {
        title: 'fedon',
        author: 'platao',
        section: 'conto-1'
      },
      {
        title: 'sobre-a-alma',
        author: 'aristoteles',
        section: 'livro-1'
      },
      {
        title: 'imagens-e-simbolos',
        author: 'mircea-eliade',
        section: 'psicologia-e-historia-das-religioes'
      },
      {
        title: 'imagens-e-simbolos',
        author: 'mircea-eliade',
        section: 'historia-e-arquetipos'
      },
      {
        title: 'imagens-e-simbolos',
        author: 'mircea-eliade',
        section: 'a-imagem-do-mundo'
      },
      {
        title: 'imagens-e-simbolos',
        author: 'mircea-eliade',
        section: 'simbolismo-de-centro'
      },
      {
        title: 'imagens-e-simbolos',
        author: 'mircea-eliade',
        section: 'simbolismo-da-ascencao'
      }
    ]
  }),
  components: {
    Card
  }
}
</script>
