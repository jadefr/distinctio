# distinctio
Galeria de textos antigos responsiva e com o fundo em sépia.

## Atributos
* UX agradável
  * textos de boa readability
  * Botões de aumentar ou diminuir o tamanho da fonte
  * Botão de voltar ao topo

* Altamente escalonável
  * a adição ou remoção de textos é feita de forma extremamente fácil
  
* Responsivo
  * design adaptável para qualquer tamanho de viewport
  
## Tech Stack
* Vue.js/Vue Router/Vuex
* Sass
* BootstrapVue

## Requisitos

### Requisitos Não Funcionais
* RNF1: O site deve apresentar um UX agradável
* RNF2: Os texto devem estar em português
* RNF3: Os texto devem ser de domínio público
* RNF4: Deve haver botões para aumentar e reduzir o tamanho da fonte
* RFN5: Escalabilidade

### Requisitos Funcionais
* RF1: Exibir uma galeria de artigos
* RF2: Os artigos devem aparecer como cards na seção galeria
* RF3: Os cards devem direcionar ao conteúdo do artigo 
* RF4: O header do artigo deve conter o título da seção, seguido pelo nome do livro e o autor
* RF5: A página inicial deve levar à galeria
* RF6: Os textos e autores devem ser buscáveis

## Rotas
* / --> Home page (landing page)
* /galeria --> Exposição de todos os textos disponíveis
* /galeria/:autor --> Exposição de todos os textos de determinado autor
* /galeria/:autor/:livro --> Exposição de todos os textos de determinado livro
* /galeria/:autor/:livro/:texto --> Exposição do texto específico

## Arquitetura

![Image of architecture](https://raw.githubusercontent.com/jadefr/distinctio/master/src/assets/img/distinctio.png)

