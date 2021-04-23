<template>
  <div class="dashboard_main">
    dashboard
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang="less" scoped>

.dashboard_main {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .options {
    display: flex;
    justify-content: space-evenly;

    div {
      width: 400px;
      height: 200px;
      background-color: #6cf;
    }
  }
}
</style>
