<template>
  <div>
    <MenuItem
      :input="input"
    />
  </div>
</template>

<script>
import MenuItem from '@/components/MenuItem'

export default {
  components: {
    MenuItem
  },
  data () {
    return {
      input: 'titleURL'
    }
  }
}
</script>
