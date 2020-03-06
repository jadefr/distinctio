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

      <b-navbar type="dark">
        <b-navbar-nav>
          <!-- Navbar dropdowns -->
          <b-nav-item-dropdown text="Autores" right>
            <b-dropdown-item href="/galeria/machado-de-assis/">Machado de Assis</b-dropdown-item>
            <b-dropdown-item href="/galeria/platao/">Platão</b-dropdown-item>
            <b-dropdown-item href="/galeria/marco-tulio-cicero">Marco Túlio Cícero</b-dropdown-item>
            <b-dropdown-item href="/galeria/thomas-mann">Thomas Mann</b-dropdown-item>
            <b-dropdown-item href="/galeria/seneca">Sêneca</b-dropdown-item>
            <b-dropdown-item href="/galeria/fernando-pessoa">Fernando Pessoa</b-dropdown-item>
            <b-dropdown-item href="/galeria/eca-de-queiroz">Eça de Queiroz</b-dropdown-item>
            <b-dropdown-item href="/galeria/marco-aurelio">Marco Aurélio</b-dropdown-item>
            <b-dropdown-item href="/galeria/mircea-eliade">Mircea Eliade</b-dropdown-item>
          </b-nav-item-dropdown>

<!--          <b-nav-item href="#">Títulos</b-nav-item>-->
        </b-navbar-nav>
      </b-navbar>
    </div>

  </div>
</template>

<style lang="scss">
  @import '../assets/sass/views/gallery';
</style>
