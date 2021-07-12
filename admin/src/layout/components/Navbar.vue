<template>
  <div class="navbar_main">
    <div class="navigation">
      <template v-for="(item, index) in routes">
        <template v-if="!item.hidden && item.children">
          <router-link :key="index" style="display: inline-block" :to="`${item.path}${item.children[0].path}`">
            <div class="nav_item">
              <div>icon</div>
              <div>{{ item.children[0].meta.title }}</div>
            </div>
          </router-link>
        </template>
      </template>
    </div>

    <div class="operating">
      123
    </div>

  </div>
</template>

<script>
import { routes } from '@/router'

export default {
  name: 'Navbar',
  data() {
    return {
      routes
    }
  },

  mounted() {
    console.log(this.routes)
  }
}
</script>

<style lang="scss" scoped>
.navbar_main {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 120px;
  padding: 0 80px;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
  color: #fff;

  .navigation {
    flex: 1;
    display: flex;

    .nav_item {
      color: #000;
      width: 80px;
      height: 80px;
      margin: 0 20px;
      border: 2px solid #000;
      border-radius: 10px;
      text-align: center;
      line-height: 60px;
      transition: background-color 0.2s ease-in-out;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;

      &:hover {
        background-color: #0a0;
      }

      div {
        line-height: 1;
      }
    }
  }

  .operating {
    color: #000;
    flex: 1;
  }
}
</style>
