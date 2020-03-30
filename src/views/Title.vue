<template>
  <div>
    <GalleryItem
      :input="input"
    />
  </div>
</template>

<script>
import GalleryItem from '@/components/GalleryItem'

export default {
  components: {
    GalleryItem
  },
  data () {
    return {
      input: 'titleURL'
    }
  }
}
</script>
