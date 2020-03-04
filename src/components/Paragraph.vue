<template>
  <div>
    <p>{{ paragraph }}</p>
  </div>
</template>

<script>
export default {
  props: {
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
  }
</style>
