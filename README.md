# distinctio
Galeria de textos antigos responsiva e com o fundo em sépia.

https://distinto.io/

## Atributos
* UX agradável
  * textos de boa readability
  * botões de aumentar ou diminuir o tamanho da fonte
  * botão de voltar ao topo
  * barra de progresso no topo dos textos
  * armazenamento da altura em que se parou de ler o texto

* Altamente escalável
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
* RNF5: Escalabilidade
* RNF6: Barra de progresso nos textos

### Requisitos Funcionais
* RF1: Exibir uma galeria de artigos
* RF2: Os artigos devem aparecer como cards na seção galeria
* RF3: Os cards devem direcionar ao conteúdo do artigo 
* RF4: O header do artigo deve conter o título da seção, seguido pelo nome do livro e o autor
* RF5: A página inicial deve levar à galeria
* RF6: Os textos e autores devem ser buscáveis
* RF7: Deve-se utilizar o localStorage para armazenar a altura do texto

## Rotas
* / --> Home page
* /galeria --> Exposição de todos os textos disponíveis
* /galeria/:autor --> Exposição de todos os textos de determinado autor
* /galeria/:autor/:livro --> Exposição de todos os textos de determinado livro
* /galeria/:autor/:livro/:texto --> Exposição do texto específico
* /galeria/guia-de-uso --> Guia de uso do site

## Arquitetura

![Image of architecture](https://raw.githubusercontent.com/jadefr/ontology-testing/master/distinctio.png)

