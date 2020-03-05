<template>
  <div id="home-view-container">

    <!-- Background -->
    <div id="bg"></div>

    <!-- Content -->
    <div class="content">

      <!-- Icon -->
      <b-icon icon="book" id="book-icon"></b-icon>

      <!-- Header -->
      <header>
        <h1>Distinctio</h1>
      </header>

      <main>

        <!-- List card -->
        <section id="card">
          <ul>
            <div id="left-list">
            <li>
              <b-icon icon="circle-fill" class="circle-icon"></b-icon>
              <strong><a href="">Platão</a></strong>
            </li>
            <li>
              <b-icon icon="circle-fill" class="circle-icon"></b-icon>
              <strong><a href="">Thomas Mann</a></strong>
            </li>
            <li>
              <b-icon icon="circle-fill" class="circle-icon"></b-icon>
              <strong><a href="">Machado de Assis</a></strong>
            </li>
            <li id="e-mais">
              <b-icon icon="circle-fill" class="circle-icon"></b-icon>
              <strong><a href="/galeria">e mais</a></strong>
            </li>
            </div>
            <div id="right-list">
              <li>
                <b-icon icon="circle-fill" class="circle-icon"></b-icon>
                <strong><a href="">Sêneca</a></strong>
              </li>
              <li>
                <b-icon icon="circle-fill" class="circle-icon"></b-icon>
                <strong><a href="">Cícero</a></strong>
              </li>
              <li>
                <b-icon icon="circle-fill" class="circle-icon"></b-icon>
                <strong><a href="">Marco Aurélio</a></strong>
              </li>
            </div>
          </ul>
        </section>

        <!-- Side Text -->
        <section id="side-text">
          <p>Textos de grandes autores apresentados de forma agradável com a coloração sépia</p>
          <p id="disclaimer">Textos retirados do <a href="http://www.dominiopublico.gov.br/">Domínio Público</a> e <a href="https://www.netmundi.org/">NetMundi</a> </p>
        </section>
      </main>

      <!-- Button -->
      <a href="/galeria" class="btn">Galeria</a>

    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '../assets/sass/views/_home.scss';
</style>
