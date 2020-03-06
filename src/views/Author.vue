<template>
  <div class="author-view-container">
    <h1>Autor</h1>
    {{ getAllTitlesFromActor }}
  </div>
</template>

<script>
import mapGetters from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'getAllTitlesFromActor'
    ])
  }
}
</script>
