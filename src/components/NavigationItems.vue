<template>
    <div class="navigation-items-view-container">
      <b-dropdown-item :href=" `/galeria/${this.authorURL}`">
          {{ author }}
      </b-dropdown-item>
    </div>
</template>

<script>
export default {
  name: 'NavigationItems',
  props: {
    authorURL: String,
    author: String
  }
}
</script>

<style scoped>

</style>
