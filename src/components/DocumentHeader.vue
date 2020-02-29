<template>
  <header>
    <h1>{{ title }}</h1>
    <h1>title</h1>
    <h2>{{ section }}</h2><b-icon icon="dot" id="dot-icon"></b-icon><h2>{{ author }}</h2>
  </header>
</template>

<script>
export default {
  props: {
    title: String,
    author: String,
    section: String
  }
}
</script>
