<template>
  <div class="navbar_main">
    <div class="logo">123</div>

    <div class="right_features">
      <a-dropdown>
        <a class="ant-dropdown-link" @click="e => e.preventDefault()">
          <img src="@/assets/images/1.jpg" alt="">
          管理员 <a-icon type="caret-down" />
        </a>
        <a-menu slot="overlay">
          <a-menu-item key="0">
            <router-link :to="{path:'/test/'}">123</router-link>
          </a-menu-item>
          <a-menu-item key="1">
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
          </a-menu-item>
          <a-menu-divider />
          <a-menu-item key="3">
            退出登录
          </a-menu-item>
        </a-menu>
      </a-dropdown>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style lang="scss" scoped>
.navbar_main {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #ccc;
  background-color: #3F3F3F;
  color: #fff;

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
  }

  .right_features {
    padding-right: 30px;
    flex: 1;
    display: flex;
    flex-direction: row-reverse;

    .ant-dropdown-link {
      color: #fff;

      img {
        width: 30px;
        height: 30px;
        object-fit: cover;
        border-radius: 50%;
        margin-right: 5px;
        background-color: #fff;
      }
    }
  }
}
</style>
