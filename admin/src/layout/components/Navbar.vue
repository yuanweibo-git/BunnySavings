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

    <div class="operating">
      123
    </div>

  </div>
</template>

<script>
import { Icon } from 'ant-design-vue'

const MyIcon = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2668529_pn1b476eb2.js'
})

import { asyncRouter as routes } from '@/router'

export default {
  components: {
    MyIcon
  },

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
  height: 120px;
  padding: 0 80px;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
  color: #fff;

  .navigation {
    flex: 1;
    display: flex;

    a {
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
      color: #2f2f2f;
      width: 80px;
      height: 80px;
      margin: 0 20px;
      border: 1px solid #8b8b8b;
      border-radius: 10px;
      text-align: center;
      line-height: 60px;
      transition: background-color 0.2s ease-in-out;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;

      ::v-deep.anticon svg {
        width: 2em !important;
        height: 2em !important;
        fill: #8b8b8b;
      }

      &:hover {
        background-color: #eaeaea;
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
