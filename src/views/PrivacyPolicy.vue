<template>
  <div class="privacy-policy-view-container">

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
    </div>

    <!-- Content -->
    <div class="content">
      <h1>Política de privacidade</h1>

      <p>A plataforma <em>Distinctio</em> respeita o direito à privacidade e zela pela segurança dos dados pessoais de
        seus usuários.
        A nossa Política de Privacidade esclarece como coletamos, armazenamos e utilizamos as informações pessoais dos
        usuários. A fim de proporcionar maior segurança e transparência, poderemos alterar periodicamente a Política de
        Privacidade.</p>
      <p>Ao acessar, usar ou navegar por nossa plataforma, você concorda expressa e voluntariamente, com todas
        as cláusulas desta Política de Privacidade, conforme abaixo detalhadas. Se você não concordar com a Política de
        Privacidade, não utilize os serviços desta plataforma.</p>
      <p>A Política de Privacidade é válida para todos os usuários de nossa plataforma.</p>
      <h4>1. Informações coletadas:</h4>
      <p><strong>1.1.</strong> Nosso servidor não coleta automaticamente nenhuma informação sobre o domínio ou endereço
        de
        e-mail de nossos
        visitantes.</p>
      <p><strong>1.2.</strong> Utilizamos o armazenamento local, fornecido pelo navegador, para permitir que se armazene
        a
        altura em que se
        parou de ler algum texto.</p>
      <p><strong>1.3.</strong> Ao fornecer informações através da nossa plataforma, você consente com a coleta, uso,
        armazenamento de
        acordo com esta Política de Privacidade.</p>

      <h4>2. Links para outros sites</h4>
      <p><strong>2.1.</strong> Nossa plataforma poderá conter links para outros aplicativos, sites externos, parceiros
        e/ou patrocinadores,
        que podem ter políticas de privacidade diferentes das nossas, estando assim sujeitas às suas próprias práticas
        de
        obtenção e uso de dados. Lembre-se de que, se você fornecer informações pessoais em outros aplicativos, sites,
        fóruns, em nosso serviço de troca de mensagens, ou chats, tais informações poderão ser recolhidas e utilizadas
        indevidamente por terceiros.</p>
      <p><strong>2.2.</strong> O <em>Distinctio</em> não se responsabiliza pelo conteúdo de tais aplicativos nem pelo
        manuseio das
        informações por terceiros. Por isso, recomendamos que nossos usuários sempre leiam as normas de relacionamento e
        política de privacidade específicas dentro do próprio aplicativo ou site do parceiro ou patrocinador que colete
        suas informações.</p>

      <p class="last-paragraph">A plataforma <em>Distinctio</em> reserva-se o direito de alterar esta Política de
        Privacidade. A última atualização ocorreu em 03 de abril de 2020. Ao utilizar a nossa
        plataforma a partir desta data, você concorda com os termos e políticas de dados atualizados.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PrivacyPolicy',
  mounted: function () {
    window.scrollTo(0, 0)
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/sass/views/privacyPolicy';
</style>
