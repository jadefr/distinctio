<template>
  <div id="app">
    <!-- Background -->
    <div id="bg"></div>

    <!-- Header -->
    <header>
      <a href="#">Lorem ipsum</a>
    </header>

    <main>
      <section id="card">
        <ul>
          <li>
            <span></span>
            <strong>Lorem ipsum dolor sit amet</strong>
          </li>
          <li>
            <span></span>
            <strong>Maiores reiciendis exercitationem</strong>
          </li>
          <li>
            <span></span>
            <strong>Quasi ipsum atque velit</strong>
          </li>
        </ul>
      </section>
      <section id="primary">
        <h1>Distinctio</h1>
        <p>Totam fuga quis consequuntur ex ad non numquam modi vero nulla, animi deleniti ea in id? Nulla, ex!</p>

        <a href="#">Eveniet minima</a>
      </section>
    </main>

  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
