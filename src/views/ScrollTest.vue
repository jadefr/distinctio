<template>
  <div class="scroll-test-container">

    <!-- Borders -->
    <div class="borders">
      <div id="left"></div>
      <div id="right"></div>
      <div id="top"></div>
      <div id="bottom"></div>
    </div>

    <!-- Progress Bar -->
    <progress value="0"></progress>

    <!-- Text -->
    <div class="title-container">
      <h1>Scroll Test</h1>
    </div>
    <div class="text-container">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi blanditiis debitis dolorum, eius esse
        expedita explicabo harum illum ipsam modi nam necessitatibus nesciunt obcaecati optio pariatur perspiciatis
        placeat porro quisquam recusandae repellendus tempora voluptates! Accusamus accusantium, amet architecto
        aspernatur, at culpa cum id in ipsa labore nam non obcaecati officia officiis quae quaerat, quis unde voluptatem
        voluptates voluptatibus! A ab accusamus, aperiam aspernatur atque beatae delectus dolor dolores ducimus ea eius
        enim error excepturi facere facilis hic iure magni maxime minus molestias nam natus nemo nesciunt obcaecati
        omnis, pariatur quam qui quia quibusdam quis rem saepe similique sit sunt temporibus velit, veritatis.
        Exercitationem ipsum libero molestias nulla quasi reiciendis rem, similique ut. Ab alias aliquid amet aut
        consequuntur, cumque deleniti dolor ea eius, neque non numquam odit quas veniam voluptatibus. Consequatur
        deserunt distinctio eius ex facere fuga harum impedit laboriosam maiores odit, omnis, quas, quidem sed soluta
        ullam? Ad aliquid corporis, debitis dolor dolores earum est eum excepturi exercitationem iusto maxime obcaecati
        omnis optio quaerat quasi quisquam repellendus. Exercitationem ipsam laboriosam mollitia necessitatibus neque
        sunt ut. Ab amet animi blanditiis consequatur corporis culpa cupiditate debitis dolorem et facere, impedit iure
        neque nesciunt non numquam obcaecati possimus quae quia rerum sit velit voluptas voluptates voluptatibus.
        Commodi consectetur laboriosam nisi nulla? Accusamus aliquam aspernatur consequatur deleniti deserunt
        dignissimos dolore dolorem enim esse eum exercitationem facere harum, id ipsam ipsum, iste nam neque nisi
        nostrum nulla possimus quidem ratione rem sapiente suscipit temporibus totam velit veritatis voluptate
        voluptatibus. Adipisci alias amet autem corporis enim error facilis incidunt itaque laboriosam libero minima
        nemo non officiis porro provident, quam, quia ratione rem suscipit tempore vel velit vitae. Delectus dicta eius
        et magni nemo quae quam suscipit voluptatem. Architecto assumenda commodi culpa deleniti, distinctio doloremque
        doloribus ducimus facere incidunt ipsam ipsum iure labore laboriosam magni molestiae pariatur, placeat porro,
        quas quasi quis recusandae rerum saepe sint soluta tempora veritatis voluptates voluptatum! Consequuntur dicta
        enim illo magnam minima omnis quae quo reiciendis, repudiandae soluta. Aliquam at, deserunt, exercitationem iure
        nisi nostrum nulla officiis provident quaerat, quisquam rem repudiandae temporibus unde? Accusamus, accusantium
        aliquam cupiditate dolorem facere hic laborum nam necessitatibus nisi, perferendis totam vitae? A accusamus
        aliquid aperiam autem deleniti deserunt doloribus dolorum et ipsa iusto magnam nesciunt, perferendis quam
        quibusdam reiciendis sunt suscipit. A accusantium est eum impedit iure molestiae officia qui repellendus soluta!
        Aperiam corporis dolorum esse explicabo in ipsum iusto laborum obcaecati officia quibusdam quisquam quo rem,
        repellendus sint sit ullam vel? Accusantium assumenda consequuntur culpa ipsa maxime odit porro quod reiciendis.
        Amet at autem corporis culpa dignissimos dolore dolorem doloremque ea error et hic illum in, iste magnam natus
        necessitatibus nisi officia optio pariatur, placeat reiciendis rerum sapiente soluta sunt temporibus ut vel
        voluptate. Accusantium doloribus maiores maxime molestiae? At iure sequi tempora tempore. Alias deleniti illo
        quae tempora tenetur, unde? Aliquam asperiores, cumque deleniti dolore doloribus eligendi et ex facere in
        laudantium minus neque obcaecati perspiciatis quam quasi quod ratione recusandae saepe tempore totam veniam,
        voluptatem voluptates! Accusamus adipisci dignissimos impedit?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi blanditiis debitis dolorum, eius esse
        expedita explicabo harum illum ipsam modi nam necessitatibus nesciunt obcaecati optio pariatur perspiciatis
        placeat porro quisquam recusandae repellendus tempora voluptates! Accusamus accusantium, amet architecto
        aspernatur, at culpa cum id in ipsa labore nam non obcaecati officia officiis quae quaerat, quis unde voluptatem
        voluptates voluptatibus! A ab accusamus, aperiam aspernatur atque beatae delectus dolor dolores ducimus ea eius
        enim error excepturi facere facilis hic iure magni maxime minus molestias nam natus nemo nesciunt obcaecati
        omnis, pariatur quam qui quia quibusdam quis rem saepe similique sit sunt temporibus velit, veritatis.
        Exercitationem ipsum libero molestias nulla quasi reiciendis rem, similique ut. Ab alias aliquid amet aut
        consequuntur, cumque deleniti dolor ea eius, neque non numquam odit quas veniam voluptatibus. Consequatur
        deserunt distinctio eius ex facere fuga harum impedit laboriosam maiores odit, omnis, quas, quidem sed soluta
        ullam? Ad aliquid corporis, debitis dolor dolores earum est eum excepturi exercitationem iusto maxime obcaecati
        omnis optio quaerat quasi quisquam repellendus. Exercitationem ipsam laboriosam mollitia necessitatibus neque
        sunt ut. Ab amet animi blanditiis consequatur corporis culpa cupiditate debitis dolorem et facere, impedit iure
        neque nesciunt non numquam obcaecati possimus quae quia rerum sit velit voluptas voluptates voluptatibus.
        Commodi consectetur laboriosam nisi nulla? Accusamus aliquam aspernatur consequatur deleniti deserunt
        dignissimos dolore dolorem enim esse eum exercitationem facere harum, id ipsam ipsum, iste nam neque nisi
        nostrum nulla possimus quidem ratione rem sapiente suscipit temporibus totam velit veritatis voluptate
        voluptatibus. Adipisci alias amet autem corporis enim error facilis incidunt itaque laboriosam libero minima
        nemo non officiis porro provident, quam, quia ratione rem suscipit tempore vel velit vitae. Delectus dicta eius
        et magni nemo quae quam suscipit voluptatem. Architecto assumenda commodi culpa deleniti, distinctio doloremque
        doloribus ducimus facere incidunt ipsam ipsum iure labore laboriosam magni molestiae pariatur, placeat porro,
        quas quasi quis recusandae rerum saepe sint soluta tempora veritatis voluptates voluptatum! Consequuntur dicta
        enim illo magnam minima omnis quae quo reiciendis, repudiandae soluta. Aliquam at, deserunt, exercitationem iure
        nisi nostrum nulla officiis provident quaerat, quisquam rem repudiandae temporibus unde? Accusamus, accusantium
        aliquam cupiditate dolorem facere hic laborum nam necessitatibus nisi, perferendis totam vitae? A accusamus
        aliquid aperiam autem deleniti deserunt doloribus dolorum et ipsa iusto magnam nesciunt, perferendis quam
        quibusdam reiciendis sunt suscipit. A accusantium est eum impedit iure molestiae officia qui repellendus soluta!
        Aperiam corporis dolorum esse explicabo in ipsum iusto laborum obcaecati officia quibusdam quisquam quo rem,
        repellendus sint sit ullam vel? Accusantium assumenda consequuntur culpa ipsa maxime odit porro quod reiciendis.
        Amet at autem corporis culpa dignissimos dolore dolorem doloremque ea error et hic illum in, iste magnam natus
        necessitatibus nisi officia optio pariatur, placeat reiciendis rerum sapiente soluta sunt temporibus ut vel
        voluptate. Accusantium doloribus maiores maxime molestiae? At iure sequi tempora tempore. Alias deleniti illo
        quae tempora tenetur, unde? Aliquam asperiores, cumque deleniti dolore doloribus eligendi et ex facere in
        laudantium minus neque obcaecati perspiciatis quam quasi quod ratione recusandae saepe tempore totam veniam,
        voluptatem voluptates! Accusamus adipisci dignissimos impedit?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi blanditiis debitis dolorum, eius esse
        expedita explicabo harum illum ipsam modi nam necessitatibus nesciunt obcaecati optio pariatur perspiciatis
        placeat porro quisquam recusandae repellendus tempora voluptates! Accusamus accusantium, amet architecto
        aspernatur, at culpa cum id in ipsa labore nam non obcaecati officia officiis quae quaerat, quis unde voluptatem
        voluptates voluptatibus! A ab accusamus, aperiam aspernatur atque beatae delectus dolor dolores ducimus ea eius
        enim error excepturi facere facilis hic iure magni maxime minus molestias nam natus nemo nesciunt obcaecati
        omnis, pariatur quam qui quia quibusdam quis rem saepe similique sit sunt temporibus velit, veritatis.
        Exercitationem ipsum libero molestias nulla quasi reiciendis rem, similique ut. Ab alias aliquid amet aut
        consequuntur, cumque deleniti dolor ea eius, neque non numquam odit quas veniam voluptatibus. Consequatur
        deserunt distinctio eius ex facere fuga harum impedit laboriosam maiores odit, omnis, quas, quidem sed soluta
        ullam? Ad aliquid corporis, debitis dolor dolores earum est eum excepturi exercitationem iusto maxime obcaecati
        omnis optio quaerat quasi quisquam repellendus. Exercitationem ipsam laboriosam mollitia necessitatibus neque
        sunt ut. Ab amet animi blanditiis consequatur corporis culpa cupiditate debitis dolorem et facere, impedit iure
        neque nesciunt non numquam obcaecati possimus quae quia rerum sit velit voluptas voluptates voluptatibus.
        Commodi consectetur laboriosam nisi nulla? Accusamus aliquam aspernatur consequatur deleniti deserunt
        dignissimos dolore dolorem enim esse eum exercitationem facere harum, id ipsam ipsum, iste nam neque nisi
        nostrum nulla possimus quidem ratione rem sapiente suscipit temporibus totam velit veritatis voluptate
        voluptatibus. Adipisci alias amet autem corporis enim error facilis incidunt itaque laboriosam libero minima
        nemo non officiis porro provident, quam, quia ratione rem suscipit tempore vel velit vitae. Delectus dicta eius
        et magni nemo quae quam suscipit voluptatem. Architecto assumenda commodi culpa deleniti, distinctio doloremque
        doloribus ducimus facere incidunt ipsam ipsum iure labore laboriosam magni molestiae pariatur, placeat porro,
        quas quasi quis recusandae rerum saepe sint soluta tempora veritatis voluptates voluptatum! Consequuntur dicta
        enim illo magnam minima omnis quae quo reiciendis, repudiandae soluta. Aliquam at, deserunt, exercitationem iure
        nisi nostrum nulla officiis provident quaerat, quisquam rem repudiandae temporibus unde? Accusamus, accusantium
        aliquam cupiditate dolorem facere hic laborum nam necessitatibus nisi, perferendis totam vitae? A accusamus
        aliquid aperiam autem deleniti deserunt doloribus dolorum et ipsa iusto magnam nesciunt, perferendis quam
        quibusdam reiciendis sunt suscipit. A accusantium est eum impedit iure molestiae officia qui repellendus soluta!
        Aperiam corporis dolorum esse explicabo in ipsum iusto laborum obcaecati officia quibusdam quisquam quo rem,
        repellendus sint sit ullam vel? Accusantium assumenda consequuntur culpa ipsa maxime odit porro quod reiciendis.
        Amet at autem corporis culpa dignissimos dolore dolorem doloremque ea error et hic illum in, iste magnam natus
        necessitatibus nisi officia optio pariatur, placeat reiciendis rerum sapiente soluta sunt temporibus ut vel
        voluptate. Accusantium doloribus maiores maxime molestiae? At iure sequi tempora tempore. Alias deleniti illo
        quae tempora tenetur, unde? Aliquam asperiores, cumque deleniti dolore doloribus eligendi et ex facere in
        laudantium minus neque obcaecati perspiciatis quam quasi quod ratione recusandae saepe tempore totam veniam,
        voluptatem voluptates! Accusamus adipisci dignissimos impedit?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi blanditiis debitis dolorum, eius esse
        expedita explicabo harum illum ipsam modi nam necessitatibus nesciunt obcaecati optio pariatur perspiciatis
        placeat porro quisquam recusandae repellendus tempora voluptates! Accusamus accusantium, amet architecto
        aspernatur, at culpa cum id in ipsa labore nam non obcaecati officia officiis quae quaerat, quis unde voluptatem
        voluptates voluptatibus! A ab accusamus, aperiam aspernatur atque beatae delectus dolor dolores ducimus ea eius
        enim error excepturi facere facilis hic iure magni maxime minus molestias nam natus nemo nesciunt obcaecati
        omnis, pariatur quam qui quia quibusdam quis rem saepe similique sit sunt temporibus velit, veritatis.
        Exercitationem ipsum libero molestias nulla quasi reiciendis rem, similique ut. Ab alias aliquid amet aut
        consequuntur, cumque deleniti dolor ea eius, neque non numquam odit quas veniam voluptatibus. Consequatur
        deserunt distinctio eius ex facere fuga harum impedit laboriosam maiores odit, omnis, quas, quidem sed soluta
        ullam? Ad aliquid corporis, debitis dolor dolores earum est eum excepturi exercitationem iusto maxime obcaecati
        omnis optio quaerat quasi quisquam repellendus. Exercitationem ipsam laboriosam mollitia necessitatibus neque
        sunt ut. Ab amet animi blanditiis consequatur corporis culpa cupiditate debitis dolorem et facere, impedit iure
        neque nesciunt non numquam obcaecati possimus quae quia rerum sit velit voluptas voluptates voluptatibus.
        Commodi consectetur laboriosam nisi nulla? Accusamus aliquam aspernatur consequatur deleniti deserunt
        dignissimos dolore dolorem enim esse eum exercitationem facere harum, id ipsam ipsum, iste nam neque nisi
        nostrum nulla possimus quidem ratione rem sapiente suscipit temporibus totam velit veritatis voluptate
        voluptatibus. Adipisci alias amet autem corporis enim error facilis incidunt itaque laboriosam libero minima
        nemo non officiis porro provident, quam, quia ratione rem suscipit tempore vel velit vitae. Delectus dicta eius
        et magni nemo quae quam suscipit voluptatem. Architecto assumenda commodi culpa deleniti, distinctio doloremque
        doloribus ducimus facere incidunt ipsam ipsum iure labore laboriosam magni molestiae pariatur, placeat porro,
        quas quasi quis recusandae rerum saepe sint soluta tempora veritatis voluptates voluptatum! Consequuntur dicta
        enim illo magnam minima omnis quae quo reiciendis, repudiandae soluta. Aliquam at, deserunt, exercitationem iure
        nisi nostrum nulla officiis provident quaerat, quisquam rem repudiandae temporibus unde? Accusamus, accusantium
        aliquam cupiditate dolorem facere hic laborum nam necessitatibus nisi, perferendis totam vitae? A accusamus
        aliquid aperiam autem deleniti deserunt doloribus dolorum et ipsa iusto magnam nesciunt, perferendis quam
        quibusdam reiciendis sunt suscipit. A accusantium est eum impedit iure molestiae officia qui repellendus soluta!
        Aperiam corporis dolorum esse explicabo in ipsum iusto laborum obcaecati officia quibusdam quisquam quo rem,
        repellendus sint sit ullam vel? Accusantium assumenda consequuntur culpa ipsa maxime odit porro quod reiciendis.
        Amet at autem corporis culpa dignissimos dolore dolorem doloremque ea error et hic illum in, iste magnam natus
        necessitatibus nisi officia optio pariatur, placeat reiciendis rerum sapiente soluta sunt temporibus ut vel
        voluptate. Accusantium doloribus maiores maxime molestiae? At iure sequi tempora tempore. Alias deleniti illo
        quae tempora tenetur, unde? Aliquam asperiores, cumque deleniti dolore doloribus eligendi et ex facere in
        laudantium minus neque obcaecati perspiciatis quam quasi quod ratione recusandae saepe tempore totam veniam,
        voluptatem voluptates! Accusamus adipisci dignissimos impedit?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi blanditiis debitis dolorum, eius esse
        expedita explicabo harum illum ipsam modi nam necessitatibus nesciunt obcaecati optio pariatur perspiciatis
        placeat porro quisquam recusandae repellendus tempora voluptates! Accusamus accusantium, amet architecto
        aspernatur, at culpa cum id in ipsa labore nam non obcaecati officia officiis quae quaerat, quis unde voluptatem
        voluptates voluptatibus! A ab accusamus, aperiam aspernatur atque beatae delectus dolor dolores ducimus ea eius
        enim error excepturi facere facilis hic iure magni maxime minus molestias nam natus nemo nesciunt obcaecati
        omnis, pariatur quam qui quia quibusdam quis rem saepe similique sit sunt temporibus velit, veritatis.
        Exercitationem ipsum libero molestias nulla quasi reiciendis rem, similique ut. Ab alias aliquid amet aut
        consequuntur, cumque deleniti dolor ea eius, neque non numquam odit quas veniam voluptatibus. Consequatur
        deserunt distinctio eius ex facere fuga harum impedit laboriosam maiores odit, omnis, quas, quidem sed soluta
        ullam? Ad aliquid corporis, debitis dolor dolores earum est eum excepturi exercitationem iusto maxime obcaecati
        omnis optio quaerat quasi quisquam repellendus. Exercitationem ipsam laboriosam mollitia necessitatibus neque
        sunt ut. Ab amet animi blanditiis consequatur corporis culpa cupiditate debitis dolorem et facere, impedit iure
        neque nesciunt non numquam obcaecati possimus quae quia rerum sit velit voluptas voluptates voluptatibus.
        Commodi consectetur laboriosam nisi nulla? Accusamus aliquam aspernatur consequatur deleniti deserunt
        dignissimos dolore dolorem enim esse eum exercitationem facere harum, id ipsam ipsum, iste nam neque nisi
        nostrum nulla possimus quidem ratione rem sapiente suscipit temporibus totam velit veritatis voluptate
        voluptatibus. Adipisci alias amet autem corporis enim error facilis incidunt itaque laboriosam libero minima
        nemo non officiis porro provident, quam, quia ratione rem suscipit tempore vel velit vitae. Delectus dicta eius
        et magni nemo quae quam suscipit voluptatem. Architecto assumenda commodi culpa deleniti, distinctio doloremque
        doloribus ducimus facere incidunt ipsam ipsum iure labore laboriosam magni molestiae pariatur, placeat porro,
        quas quasi quis recusandae rerum saepe sint soluta tempora veritatis voluptates voluptatum! Consequuntur dicta
        enim illo magnam minima omnis quae quo reiciendis, repudiandae soluta. Aliquam at, deserunt, exercitationem iure
        nisi nostrum nulla officiis provident quaerat, quisquam rem repudiandae temporibus unde? Accusamus, accusantium
        aliquam cupiditate dolorem facere hic laborum nam necessitatibus nisi, perferendis totam vitae? A accusamus
        aliquid aperiam autem deleniti deserunt doloribus dolorum et ipsa iusto magnam nesciunt, perferendis quam
        quibusdam reiciendis sunt suscipit. A accusantium est eum impedit iure molestiae officia qui repellendus soluta!
        Aperiam corporis dolorum esse explicabo in ipsum iusto laborum obcaecati officia quibusdam quisquam quo rem,
        repellendus sint sit ullam vel? Accusantium assumenda consequuntur culpa ipsa maxime odit porro quod reiciendis.
        Amet at autem corporis culpa dignissimos dolore dolorem doloremque ea error et hic illum in, iste magnam natus
        necessitatibus nisi officia optio pariatur, placeat reiciendis rerum sapiente soluta sunt temporibus ut vel
        voluptate. Accusantium doloribus maiores maxime molestiae? At iure sequi tempora tempore. Alias deleniti illo
        quae tempora tenetur, unde? Aliquam asperiores, cumque deleniti dolore doloribus eligendi et ex facere in
        laudantium minus neque obcaecati perspiciatis quam quasi quod ratione recusandae saepe tempore totam veniam,
        voluptatem voluptates! Accusamus adipisci dignissimos impedit?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi blanditiis debitis dolorum, eius esse
        expedita explicabo harum illum ipsam modi nam necessitatibus nesciunt obcaecati optio pariatur perspiciatis
        placeat porro quisquam recusandae repellendus tempora voluptates! Accusamus accusantium, amet architecto
        aspernatur, at culpa cum id in ipsa labore nam non obcaecati officia officiis quae quaerat, quis unde voluptatem
        voluptates voluptatibus! A ab accusamus, aperiam aspernatur atque beatae delectus dolor dolores ducimus ea eius
        enim error excepturi facere facilis hic iure magni maxime minus molestias nam natus nemo nesciunt obcaecati
        omnis, pariatur quam qui quia quibusdam quis rem saepe similique sit sunt temporibus velit, veritatis.
        Exercitationem ipsum libero molestias nulla quasi reiciendis rem, similique ut. Ab alias aliquid amet aut
        consequuntur, cumque deleniti dolor ea eius, neque non numquam odit quas veniam voluptatibus. Consequatur
        deserunt distinctio eius ex facere fuga harum impedit laboriosam maiores odit, omnis, quas, quidem sed soluta
        ullam? Ad aliquid corporis, debitis dolor dolores earum est eum excepturi exercitationem iusto maxime obcaecati
        omnis optio quaerat quasi quisquam repellendus. Exercitationem ipsam laboriosam mollitia necessitatibus neque
        sunt ut. Ab amet animi blanditiis consequatur corporis culpa cupiditate debitis dolorem et facere, impedit iure
        neque nesciunt non numquam obcaecati possimus quae quia rerum sit velit voluptas voluptates voluptatibus.
        Commodi consectetur laboriosam nisi nulla? Accusamus aliquam aspernatur consequatur deleniti deserunt
        dignissimos dolore dolorem enim esse eum exercitationem facere harum, id ipsam ipsum, iste nam neque nisi
        nostrum nulla possimus quidem ratione rem sapiente suscipit temporibus totam velit veritatis voluptate
        voluptatibus. Adipisci alias amet autem corporis enim error facilis incidunt itaque laboriosam libero minima
        nemo non officiis porro provident, quam, quia ratione rem suscipit tempore vel velit vitae. Delectus dicta eius
        et magni nemo quae quam suscipit voluptatem. Architecto assumenda commodi culpa deleniti, distinctio doloremque
        doloribus ducimus facere incidunt ipsam ipsum iure labore laboriosam magni molestiae pariatur, placeat porro,
        quas quasi quis recusandae rerum saepe sint soluta tempora veritatis voluptates voluptatum! Consequuntur dicta
        enim illo magnam minima omnis quae quo reiciendis, repudiandae soluta. Aliquam at, deserunt, exercitationem iure
        nisi nostrum nulla officiis provident quaerat, quisquam rem repudiandae temporibus unde? Accusamus, accusantium
        aliquam cupiditate dolorem facere hic laborum nam necessitatibus nisi, perferendis totam vitae? A accusamus
        aliquid aperiam autem deleniti deserunt doloribus dolorum et ipsa iusto magnam nesciunt, perferendis quam
        quibusdam reiciendis sunt suscipit. A accusantium est eum impedit iure molestiae officia qui repellendus soluta!
        Aperiam corporis dolorum esse explicabo in ipsum iusto laborum obcaecati officia quibusdam quisquam quo rem,
        repellendus sint sit ullam vel? Accusantium assumenda consequuntur culpa ipsa maxime odit porro quod reiciendis.
        Amet at autem corporis culpa dignissimos dolore dolorem doloremque ea error et hic illum in, iste magnam natus
        necessitatibus nisi officia optio pariatur, placeat reiciendis rerum sapiente soluta sunt temporibus ut vel
        voluptate. Accusantium doloribus maiores maxime molestiae? At iure sequi tempora tempore. Alias deleniti illo
        quae tempora tenetur, unde? Aliquam asperiores, cumque deleniti dolore doloribus eligendi et ex facere in
        laudantium minus neque obcaecati perspiciatis quam quasi quod ratione recusandae saepe tempore totam veniam,
        voluptatem voluptates! Accusamus adipisci dignissimos impedit?</p>
    </div>
  </div>
</template>

<script>
export default {
  /* eslint-env jquery */
  mounted: function () {
    const winHeight = $(window).height()
    console.log(winHeight)
    const docHeight = $(document).height()
    console.log(docHeight)
    const progressBar = $('progress')
    var max, value

    /* Set the max scrollable area */
    max = docHeight - winHeight
    progressBar.attr('max', max)

    $(document).on('scroll', function() {
      value = $(window).scrollTop()
      progressBar.attr('value', value)
    })
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/sass/libraries/mixins';
  @import '../assets/sass/base/variables';

  .title-container {
    padding: 10% 40%;
    color: #5b4636;
    text-align: center;
    display: flex;
  }

  .text-container {
    padding: 20px;

    p {
      font-size: 1.4rem;
    }
  }

  // Progress Bar
  progress {
    /* Positioning */
    position: fixed;
    left: 0;
    top: 0;

    /* Dimensions */
    width: 100%;
    height: 10px;

    /* Reset the appearance */
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    /* Get rid of the default border in Firefox/Opera. */
    border: none;

    /* Progress bar container for Firefox/IE10+ */
    background-color: transparent;

    /* Progress bar value for IE10+ */
    color: #853e3e;

    &::-webkit-progress-bar {
      background-color: transparent;
    }

    /* Firefox */
    &::-moz-progress-bar {
      background: #853e3e;
    }

    /* Chrome and Safari */
    &::-webkit-progress-value {
      background: #853e3e;
    }
  }

  // Borders
  .borders {
    #top, #bottom, #left, #right {
      background: #380404;
      position: fixed;
    }

    #left, #right {
      top: 0;
      bottom: 0;
      width: 10px;
    }

    #left {
      left: 0;
    }

    #right {
      right: 0;
    }

    #top, #bottom {
      left: 0;
      right: 0;
      height: 10px;
    }

    #top {
      top: 0;
    }

    #bottom {
      bottom: 0;
    }
  }

</style>
