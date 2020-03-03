<template>
  <div>
    <p>{{ test }}</p>
    <p>{{ bold }}</p>
    <p>{{ paragraph }}</p>
  </div>
</template>

<script>
export default {
  props: {
    test: String,
    bold: Array,
    paragraph: String
  }
}
</script>

<style lang="scss" scoped>
  @import 'src/assets/sass/libraries/_mixins.scss';

  p {
    font-size: 2rem;
    text-indent: 4rem;

    @include mobile {
      font-size: 1.7em;
      text-indent: 2rem;
    }

    .bold {
      font-weight: bold;
      color: red;
    }
  }
</style>
