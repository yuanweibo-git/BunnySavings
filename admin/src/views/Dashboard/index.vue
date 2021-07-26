<template>
  <div class="dashboard_main">
    <div class="current_month_data">
      123
    </div>

    <div class="current_month_list">
      <div class="items">
        <my-icon type="icon-month-expense" />
        当月消费
      </div>

      <div class="items">
        <my-icon type="icon-month-revenue" />
        当月收入
      </div>

      <div class="items">
        <my-icon type="icon-surplus" />
        总结余
      </div>
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
  justify-content: space-between;
  flex-wrap: wrap;

  .current_month_data {
    width: 49%;
    height: 300px;
    border: 1px solid #EBEEF5;
  }

  .current_month_list {
    width: 49%;
    height: 150px;
    //border-radius: 10px;
    //border: 1px solid #EBEEF5;
    //background-color: #FFF;
    //color: #303133;
    //box-shadow: 0 2px 6px 0 rgb(0 0 0 / 10%);
    display: flex;
    justify-content: space-evenly;

    .items {
      position: relative;
      width: 30%;
      height: 70%;
      border-radius: 10px;
      box-shadow: 0 2px 10px rgb(0 0 0 / 15%);
      overflow: hidden;
      padding: 15px;
      background-color: #fff;

      &:nth-child(1) {
        background-color: #e1e9ff;
      }

      &:nth-child(2) {
        background-color: #c9f7f5;
      }

      &:nth-child(3) {
        background-color: #fff4de;
      }

      .anticon {
        ::v-deep svg {
          width: 50px;
          height: 50px;
        }
      }

      &:after {
        content: " ";
        width: 200%;
        height: 1000px;
        position: absolute;
        z-index: 1;
        top: 0;
        left: 30%;
        transform: rotate(20deg);
        background-color: #ffffff;
      }
    }
  }
}
</style>
