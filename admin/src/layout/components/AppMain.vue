<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <router-view :key="key" />
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>

<style scoped>

/* fade-transform */
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all .3s;
}

.fade-transform-enter {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.app-main {
  /*50 = navbar  */
  min-height: calc(100vh - 100px);
  width: 100vw;
  position: relative;
  overflow: hidden;
}
.fixed-header+.app-main {
  padding-top: 50px;
}
</style>

<style lang="less">
// fix css styles bug in open el-dialog
.app-main {
  padding: 20px;
  min-width: 1300px;

}
.ant-card {
  border-radius: 10px;
  border: 1px solid #EBEEF5;
  background-color: #FFF;
  color: #303133;
  box-shadow: 0 2px 6px 0 rgb(0 0 0 / 10%);
}
</style>
