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
            <div id="right-list">
              <li>
                <a href="/galeria/seneca/"><b-icon icon="circle-fill" class="circle-icon"></b-icon></a>
                <strong><a href="/galeria/seneca/">Sêneca</a></strong>
              </li>
              <li>
                <a href="/galeria/marco-tulio-cicero/"><b-icon icon="circle-fill" class="circle-icon"></b-icon></a>
                <strong><a href="/galeria/marco-tulio-cicero/">Cícero</a></strong>
              </li>
              <li>
                <a href="/galeria/marco-aurelio/"><b-icon icon="circle-fill" class="circle-icon"></b-icon></a>
                <strong><a href="/galeria/marco-aurelio/">Marco Aurélio</a></strong>
              </li>
              <li>
                <a href="/galeria/franz-kafka"><b-icon icon="circle-fill" class="circle-icon"></b-icon></a>
                <strong><a href="/galeria/franz-kafka">Franz Kafka</a></strong>
              </li>
            </div>
            <div id="left-list">
            <li>
              <a href="/galeria/platao/"><b-icon icon="circle-fill" class="circle-icon"></b-icon></a>
              <strong><a href="/galeria/platao/">Platão</a></strong>
            </li>
            <li>
              <a href="/galeria/william-shakespeare/"><b-icon icon="circle-fill" class="circle-icon"></b-icon></a>
              <strong><a href="/galeria/william-shakespeare/">Shakespeare</a></strong>
            </li>
            <li>
              <a href="/galeria/machado-de-assis/"><b-icon icon="circle-fill" class="circle-icon"></b-icon></a>
              <strong><a href="/galeria/machado-de-assis/">Machado de Assis</a></strong>
            </li>
              <li id="e-mais">
                <a href="/galeria"><b-icon icon="circle-fill" class="circle-icon"></b-icon></a>
                <strong><a href="/galeria">e mais</a></strong>
              </li>
            </div>
          </ul>
        </section>

        <!-- Side Text -->
        <section id="side-text">
          <p>Seleção de textos de grandes autores apresentados em coloração sépia</p>
          <p id="disclaimer">Textos retirados do <a href="http://www.dominiopublico.gov.br/">Domínio Público</a> e <a href="https://www.netmundi.org/">NetMundi</a> </p>
        </section>
      </main>

      <!-- Bottom -->
      <div class="bottom">
        <!-- Button -->
        <a href="/galeria" class="btn" id="btn">Galeria</a>
        <!-- Credits -->
        <div id="credits">
          <p>Desenvolvido por <span><a href="https://jadeferreira.com.br/">Jade Ferreira</a></span></p>
        </div>
      </div>

    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '../assets/sass/views/_home.scss';
</style>
