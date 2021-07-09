<template>
  <div class="dashboard_main">
    <div class="icons-list">
      <a-icon type="home" />
      <a-icon type="setting" theme="filled" />
      <a-icon type="smile" theme="outlined" />
      <a-icon type="sync" spin />
      <a-icon type="smile" :rotate="180" />
      <a-icon type="loading" />
    </div>
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
