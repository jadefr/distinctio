<template>
  <div class="document-view-container">
    <!-- Borders -->
    <div class="borders">
      <div id="left"></div>
      <div id="right"></div>
      <div id="top"></div>
      <div id="bottom"></div>
    </div>

    <!-- Icon -->
    <a href="/galeria"><b-icon icon="book" id="book-icon"></b-icon></a>

    <!-- Header -->
    <header>
      <!-- Title -->
      <h1>{{ title() }}</h1>

      <!-- Subtitle -->
      <div class="subtitle">
        <h2 id="first-h2">{{ section()}}</h2><b-icon icon="diamond-half" id="diamond-header-icon"></b-icon><h2 id="second-h2">{{ author() }}</h2>
      </div>
    </header>

    <!-- Back to top button -->
    <back-to-top bottom="20px" right="20px" visibleoffset="300">
      <button type="button" class="btn btn-info btn-to-top"><b-icon icon="diamond-half" id="diamond-btn-icon"></b-icon></button>
    </back-to-top>

    <!-- Article -->
    <article>
<!--      <p>{{ content() }}</p>-->
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid amet animi, blanditiis commodi consequatur deleniti dignissimos dolor dolore eaque eos esse harum impedit magnam nam natus nemo nesciunt nobis nostrum odio omnis pariatur quaerat quam qui sit soluta, tempora ullam voluptate voluptates voluptatibus. A aliquid aspernatur dicta dolore exercitationem libero molestias mollitia natus, neque perferendis placeat quam ratione similique tempore voluptatibus. Asperiores, at autem consequatur deserunt dolorem doloremque earum est eveniet explicabo facere harum inventore iusto libero molestias, natus non obcaecati pariatur porro quo quos saepe suscipit, tempora! Autem blanditiis consectetur consequatur debitis dolores eligendi est eum, exercitationem facilis fugit magnam minima necessitatibus neque nobis officiis omnis perspiciatis porro recusandae repudiandae sapiente sint totam vero voluptates? Aperiam aspernatur esse similique! Aliquam fuga iste magnam molestias nemo repellat voluptas voluptatem. Accusantium distinctio dolores iste laboriosam laudantium natus necessitatibus nihil officiis perferendis placeat praesentium, sunt tempora, tenetur ullam vitae! Adipisci assumenda delectus deserunt, ea eaque, exercitationem harum in incidunt inventore maxime molestiae nemo omnis, pariatur quidem quod sint tempore. Atque consequatur ea enim est inventore laboriosam magni non, quis vitae voluptate. Accusantium minus mollitia perferendis perspiciatis quisquam, quo recusandae reiciendis rem repellat, sequi similique voluptatum! Architecto dicta dolores est ex id illum numquam officia officiis, omnis perferendis quas quos repellat sed sunt ullam. Nemo nulla quae, quasi reiciendis saepe totam. Architecto asperiores consequatur corporis dolore doloremque id incidunt ipsam itaque iure magni neque, non, reprehenderit rerum voluptatem voluptatum? Accusantium animi architecto, aspernatur at, beatae cumque eos esse fuga magnam nostrum officiis rerum voluptates? Ab atque culpa distinctio dolorem, eos esse, hic ipsam magnam placeat quisquam quos ratione repellat soluta tempore ullam? Consequuntur culpa delectus distinctio dolorem dolores esse id incidunt, ipsam mollitia natus nesciunt optio pariatur quaerat quam quas tempore ut. Accusantium exercitationem fugit inventore ut. Aliquid aperiam architecto at cumque cupiditate dignissimos ducimus earum, eius eum ex expedita illo illum iste itaque laudantium neque nesciunt omnis perferendis provident quaerat quas qui quis ratione rem soluta voluptas voluptatum! Accusamus amet architecto aspernatur, aut enim eum exercitationem iusto laudantium, natus nobis placeat quas, voluptate voluptatem! Aspernatur culpa facere minus optio qui reiciendis voluptatum. Ab aliquam aperiam asperiores aspernatur atque, beatae consequatur corporis delectus dignissimos eius, error eum illo impedit, incidunt ipsa labore maiores maxime nobis nostrum obcaecati odit quibusdam ratione repellat sapiente sed sit tempore ut. Accusantium, cumque delectus distinctio esse, expedita facere fugit in ipsum magnam molestiae natus necessitatibus nemo nisi non obcaecati odio officia praesentium quod sed sequi sunt tempora tempore totam unde ut veniam voluptas voluptatum. Architecto corporis debitis distinctio dolorem eaque eum fugit, id impedit in ipsa laboriosam odit provident, quas quod voluptatem! Amet, architecto autem corporis dicta doloremque ducimus ea eius et facilis fugiat magnam molestiae molestias optio quam saepe similique ut veniam? Accusantium aperiam id illum perferendis sequi? Eos explicabo harum ipsa, obcaecati odio temporibus veniam. Consectetur doloribus eius eligendi, exercitationem incidunt itaque libero quaerat repudiandae! Adipisci autem eaque earum excepturi exercitationem illo inventore nulla officia officiis perferendis provident, quia quibusdam recusandae rerum ullam! Modi, repellat?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid amet animi, blanditiis commodi consequatur deleniti dignissimos dolor dolore eaque eos esse harum impedit magnam nam natus nemo nesciunt nobis nostrum odio omnis pariatur quaerat quam qui sit soluta, tempora ullam voluptate voluptates voluptatibus. A aliquid aspernatur dicta dolore exercitationem libero molestias mollitia natus, neque perferendis placeat quam ratione similique tempore voluptatibus. Asperiores, at autem consequatur deserunt dolorem doloremque earum est eveniet explicabo facere harum inventore iusto libero molestias, natus non obcaecati pariatur porro quo quos saepe suscipit, tempora! Autem blanditiis consectetur consequatur debitis dolores eligendi est eum, exercitationem facilis fugit magnam minima necessitatibus neque nobis officiis omnis perspiciatis porro recusandae repudiandae sapiente sint totam vero voluptates? Aperiam aspernatur esse similique! Aliquam fuga iste magnam molestias nemo repellat voluptas voluptatem. Accusantium distinctio dolores iste laboriosam laudantium natus necessitatibus nihil officiis perferendis placeat praesentium, sunt tempora, tenetur ullam vitae! Adipisci assumenda delectus deserunt, ea eaque, exercitationem harum in incidunt inventore maxime molestiae nemo omnis, pariatur quidem quod sint tempore. Atque consequatur ea enim est inventore laboriosam magni non, quis vitae voluptate. Accusantium minus mollitia perferendis perspiciatis quisquam, quo recusandae reiciendis rem repellat, sequi similique voluptatum! Architecto dicta dolores est ex id illum numquam officia officiis, omnis perferendis quas quos repellat sed sunt ullam. Nemo nulla quae, quasi reiciendis saepe totam. Architecto asperiores consequatur corporis dolore doloremque id incidunt ipsam itaque iure magni neque, non, reprehenderit rerum voluptatem voluptatum? Accusantium animi architecto, aspernatur at, beatae cumque eos esse fuga magnam nostrum officiis rerum voluptates? Ab atque culpa distinctio dolorem, eos esse, hic ipsam magnam placeat quisquam quos ratione repellat soluta tempore ullam? Consequuntur culpa delectus distinctio dolorem dolores esse id incidunt, ipsam mollitia natus nesciunt optio pariatur quaerat quam quas tempore ut. Accusantium exercitationem fugit inventore ut. Aliquid aperiam architecto at cumque cupiditate dignissimos ducimus earum, eius eum ex expedita illo illum iste itaque laudantium neque nesciunt omnis perferendis provident quaerat quas qui quis ratione rem soluta voluptas voluptatum! Accusamus amet architecto aspernatur, aut enim eum exercitationem iusto laudantium, natus nobis placeat quas, voluptate voluptatem! Aspernatur culpa facere minus optio qui reiciendis voluptatum. Ab aliquam aperiam asperiores aspernatur atque, beatae consequatur corporis delectus dignissimos eius, error eum illo impedit, incidunt ipsa labore maiores maxime nobis nostrum obcaecati odit quibusdam ratione repellat sapiente sed sit tempore ut. Accusantium, cumque delectus distinctio esse, expedita facere fugit in ipsum magnam molestiae natus necessitatibus nemo nisi non obcaecati odio officia praesentium quod sed sequi sunt tempora tempore totam unde ut veniam voluptas voluptatum. Architecto corporis debitis distinctio dolorem eaque eum fugit, id impedit in ipsa laboriosam odit provident, quas quod voluptatem! Amet, architecto autem corporis dicta doloremque ducimus ea eius et facilis fugiat magnam molestiae molestias optio quam saepe similique ut veniam? Accusantium aperiam id illum perferendis sequi? Eos explicabo harum ipsa, obcaecati odio temporibus veniam. Consectetur doloribus eius eligendi, exercitationem incidunt itaque libero quaerat repudiandae! Adipisci autem eaque earum excepturi exercitationem illo inventore nulla officia officiis perferendis provident, quia quibusdam recusandae rerum ullam! Modi, repellat?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid amet animi, blanditiis commodi consequatur deleniti dignissimos dolor dolore eaque eos esse harum impedit magnam nam natus nemo nesciunt nobis nostrum odio omnis pariatur quaerat quam qui sit soluta, tempora ullam voluptate voluptates voluptatibus. A aliquid aspernatur dicta dolore exercitationem libero molestias mollitia natus, neque perferendis placeat quam ratione similique tempore voluptatibus. Asperiores, at autem consequatur deserunt dolorem doloremque earum est eveniet explicabo facere harum inventore iusto libero molestias, natus non obcaecati pariatur porro quo quos saepe suscipit, tempora! Autem blanditiis consectetur consequatur debitis dolores eligendi est eum, exercitationem facilis fugit magnam minima necessitatibus neque nobis officiis omnis perspiciatis porro recusandae repudiandae sapiente sint totam vero voluptates? Aperiam aspernatur esse similique! Aliquam fuga iste magnam molestias nemo repellat voluptas voluptatem. Accusantium distinctio dolores iste laboriosam laudantium natus necessitatibus nihil officiis perferendis placeat praesentium, sunt tempora, tenetur ullam vitae! Adipisci assumenda delectus deserunt, ea eaque, exercitationem harum in incidunt inventore maxime molestiae nemo omnis, pariatur quidem quod sint tempore. Atque consequatur ea enim est inventore laboriosam magni non, quis vitae voluptate. Accusantium minus mollitia perferendis perspiciatis quisquam, quo recusandae reiciendis rem repellat, sequi similique voluptatum! Architecto dicta dolores est ex id illum numquam officia officiis, omnis perferendis quas quos repellat sed sunt ullam. Nemo nulla quae, quasi reiciendis saepe totam. Architecto asperiores consequatur corporis dolore doloremque id incidunt ipsam itaque iure magni neque, non, reprehenderit rerum voluptatem voluptatum? Accusantium animi architecto, aspernatur at, beatae cumque eos esse fuga magnam nostrum officiis rerum voluptates? Ab atque culpa distinctio dolorem, eos esse, hic ipsam magnam placeat quisquam quos ratione repellat soluta tempore ullam? Consequuntur culpa delectus distinctio dolorem dolores esse id incidunt, ipsam mollitia natus nesciunt optio pariatur quaerat quam quas tempore ut. Accusantium exercitationem fugit inventore ut. Aliquid aperiam architecto at cumque cupiditate dignissimos ducimus earum, eius eum ex expedita illo illum iste itaque laudantium neque nesciunt omnis perferendis provident quaerat quas qui quis ratione rem soluta voluptas voluptatum! Accusamus amet architecto aspernatur, aut enim eum exercitationem iusto laudantium, natus nobis placeat quas, voluptate voluptatem! Aspernatur culpa facere minus optio qui reiciendis voluptatum. Ab aliquam aperiam asperiores aspernatur atque, beatae consequatur corporis delectus dignissimos eius, error eum illo impedit, incidunt ipsa labore maiores maxime nobis nostrum obcaecati odit quibusdam ratione repellat sapiente sed sit tempore ut. Accusantium, cumque delectus distinctio esse, expedita facere fugit in ipsum magnam molestiae natus necessitatibus nemo nisi non obcaecati odio officia praesentium quod sed sequi sunt tempora tempore totam unde ut veniam voluptas voluptatum. Architecto corporis debitis distinctio dolorem eaque eum fugit, id impedit in ipsa laboriosam odit provident, quas quod voluptatem! Amet, architecto autem corporis dicta doloremque ducimus ea eius et facilis fugiat magnam molestiae molestias optio quam saepe similique ut veniam? Accusantium aperiam id illum perferendis sequi? Eos explicabo harum ipsa, obcaecati odio temporibus veniam. Consectetur doloribus eius eligendi, exercitationem incidunt itaque libero quaerat repudiandae! Adipisci autem eaque earum excepturi exercitationem illo inventore nulla officia officiis perferendis provident, quia quibusdam recusandae rerum ullam! Modi, repellat?</p>
    </article>

  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState([
      'documents'
    ])
  },
  methods: {
    // info() {
    //   const variables = []
    //   for (let i = 0; i < this.documents.length; i++) {
    //     if (this.$route.params.titleURL.includes(this.documents[i].titleURL)) {
    //       variables.push(this.documents[i].title)
    //     }
    //     if (this.$route.params.sectionURL.includes(this.documents[i].sectionURL)) {
    //       variables.push(this.documents[i].section)
    //     }
    //     if (this.$route.params.authorURL.includes(this.documents[i].authorURL)) {
    //       variables.push(this.documents[i].author)
    //     }
    //     if (this.$route.params.sectionURL.includes(this.documents[i].sectionURL)) {
    //       variables.push(this.documents[i].content)
    //     }
    //     console.log(variables)
    //     return variables
    //   }
    // },
    title() {
      for (let i = 0; i < this.documents.length; i++) {
        if (this.$route.params.titleURL.includes(this.documents[i].titleURL)) {
          return this.documents[i].title
        }
      }
    },
    section() {
      for (let i = 0; i < this.documents.length; i++) {
        if (this.$route.params.sectionURL.includes(this.documents[i].sectionURL)) {
          return this.documents[i].section
        }
      }
    },
    author() {
      for (let i = 0; i < this.documents.length; i++) {
        if (this.$route.params.authorURL.includes(this.documents[i].authorURL)) {
          return this.documents[i].author
        }
      }
    },
    content() {
      for (let i = 0; i < this.documents.length; i++) {
        if (this.$route.params.sectionURL.includes(this.documents[i].sectionURL)) {
          return this.documents[i].content
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '../assets/sass/views/document';
</style>
