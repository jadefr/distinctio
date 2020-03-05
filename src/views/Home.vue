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
            <li>
              <b-icon icon="circle-fill" class="circle-icon"></b-icon>
              <strong><a href=""><a href="">e mais</a></a></strong>
            </li>
            </div>
            <div id="right-list">
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
              <li>
                <b-icon icon="circle-fill" class="circle-icon"></b-icon>
                <strong><a href=""><a href="">e mais</a></a></strong>
              </li>
            </div>
          </ul>
        </section>

        <!-- Side Text -->
        <section id="side-text">
          <p>Textos de grandes autores apresentados de forma agradável com a coloração sépia</p>
          <p>Textos retirados </p>
          <!--        <p>Totam fuga quis consequuntur ex ad non numquam modi vero nulla, animi deleniti ea in id? Nulla, ex!</p>-->
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
