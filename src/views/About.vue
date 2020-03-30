<template>
  <div class="document-view-container">

    <!-- Borders -->
    <div class="borders">
      <div id="left"></div>
      <div id="right"></div>
      <div id="top"></div>
      <div id="bottom"></div>
    </div>

    <!-- Header Icons -->
    <div class="header-icons">
      <!-- Book Icon -->
      <a href="/galeria">
        <b-icon icon="book" id="book-icon"></b-icon>
      </a>
    </div>

    <!-- Header -->
    <header>
      <!-- Title -->
      <h1>Guia de Uso</h1>
      <!-- Subtitle -->
      <h2><i>Distinctio</i> é uma galeria de textos antigos</h2>
    </header>

    <!-- Text -->
    <div class="text">
      <!-- Paragraph -->
      <p>A página de exibição do texto possui as seguintes funcionalidades:</p>
      <div class="text-box">
        <span class="line"><span class="bullet">1.</span> Botão <span class="green-text">livro</span> (<i>canto superior esquerdo</i>): <span
          class="answer">volta à galeria</span></span>
        <span class="line"><span class="bullet">2.</span> Botões <span class="green-text">A-</span> e <span
          class="green-text">A+</span><sup><a href="#footnote">*</a></sup> (<i>canto superior direito</i>): <span
          class="answer">diminui e aumenta o tamanho da fonte, respectivamente</span></span>
        <span class="line"><span class="bullet">3.</span> Botão <span class="green-text">volta ao topo</span> (<i>canto inferior direito</i>): <span
          class="answer">volta ao início do texto</span></span>
        <span class="line"><span class="bullet">4.</span> Barra de <span class="green-text">progresso</span> (<i>na borda do topo</i>): <span
          class="answer">indica a porcentagem já lida</span></span>
      </div>
      <!-- Footnotes -->
      <div id="footnote">
        <p><span id="asterisk">*</span> Botões visíveis somente em tablet ou celular</p>
      </div>
      <br>
      <!-- Paragraph -->
      <p>O <i>Distinctio</i> permite que se <span class="highlight-paragraph">guarde a posição</span> em que se parou de
        ler o texto:</p>
      <div class="text-box">
        <span class="line"><span class="bullet">1.</span> Para isto, é só voltar à galeria (<span class="green-text">com o botão de voltar do seu celular ou navegador</span>), sem clicar no botão <i>volta ao topo</i> ou no <i>livro</i>.</span>
        <span class="line"><span class="bullet">2.</span> Pode-se fechar o site e abri-lo novamente, que a posição guardada continua ― desde que não se limpe o cache.</span>
      </div>
      <br>
      <!-- Paragraph -->
      <p>A função <span class="highlight-second-paragraph">dicionário</span> pode ser usada da seguinte forma:</p>
      <div class="text-box">
        <span class="line">Estando no tablet ou celular, <span class="green-text">pressione</span> a palavra desejada.</span>
        <span class="line"><span class="bullet-second">Chrome: </span> levante a <span class="green-text">aba</span> que surge na parte inferior da página.</span>
        <span class="line"><span class="bullet-second">Firefox: </span> na caixa que surge acima da palavra, clique nos <span class="green-text">três pontinho</span> e, em seguida, em <span class="green-text">Pesquisa Google</span></span>
      </div>
      <br>
      <!-- Paragraph -->
      <p id="last-paragraph">Caso tenha <span class="green-text">sugestões</span>, envie-as <a
        href="https://jadeferreira.com.br/#contato">aqui</a></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  mounted: function () {
    window.scrollTo(0, 0)
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/sass/views/about';

</style>
