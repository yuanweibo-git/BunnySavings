<template>
  <div class="navbar_main">
    <div class="navigation">
      <template v-for="(item, index) in routes">
        <router-link
          v-if="!item.hidden && item.children"
          :key="index"
          style="display: inline-block"
          :to="`${item.path}${item.children[0].path}`"
        >
          <div
            class="nav_item"
            :class="item.activa ? 'activa': ''"
            @click="onChangeActiva(index)"
          >
            <my-icon :type="'icon-' + item.children[0].meta.icon" />
            <div>{{ item.children[0].meta.title }}</div>
          </div>
        </router-link>
      </template>
    </div>

    <div class="operating" />

  </div>
</template>

<script>
import { asyncRouter as routes } from '@/router'

export default {
  data() {
    return {
      routes
    }
  },

  mounted() {
    this.routes.forEach((item) => {
      item.path === '/' ? item.activa = true : item.activa = false
    })
  },

  methods: {
    onChangeActiva(i) {
      this.routes.forEach((item, index) => {
        item.activa = (index === i)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar_main {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
  border-bottom: 1px solid #EBEEF5;
  background-color: #fff;
  color: #fff;

  .navigation {
    flex: 1;
    display: flex;

    a {
      margin: 0 20px;

      .activa {
        border: 1px solid #3fb280;
        color: #3fb280;

        ::v-deep.anticon svg {
          width: 2em !important;
          height: 2em !important;
          fill: #3fb580
        }
      }
    }

    .nav_item {
      color: #797979;
      width: 80px;
      height: 70px;
      border: 1px solid #797979;
      border-radius: 10px;
      text-align: center;
      line-height: 60px;
      transition: background-color 0.2s ease-in-out;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;

      ::v-deep.anticon svg {
        width: 2em ;
        height: 2em ;
        fill: #797979;
      }

      &:hover {
        background-color: #efefef;
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
