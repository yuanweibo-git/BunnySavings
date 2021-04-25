<template>
  <div class="main"> 123</div>
</template>

<script>
import { login } from '@/api/user'
export default {
  data() {
    return {}
  },

  async created() {
    const a = await login()
    console.log(a)
  }
}

</script>

<style lang="less" scoped>

</style>
