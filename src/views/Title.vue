<template>
  <div>
<!--    <MenuItem-->
<!--      :input="input"-->
<!--    />-->
    <GalleryItem
      :input="input"
    />
  </div>
</template>

<script>
// import MenuItem from '@/components/MenuItem'
import GalleryItem from '@/components/GalleryItem'

export default {
  components: {
    // MenuItem
    GalleryItem
  },
  data () {
    return {
      input: 'titleURL'
    }
  }
}
</script>
