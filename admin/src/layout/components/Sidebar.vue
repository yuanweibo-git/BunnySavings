<template>
  <div class="sidebar_main">
    <a-menu style="width: 200px" :selected-keys="currentSelectMenu" :open-keys="openKeys" mode="inline" class="menu_main" @click="menuClick" @openChange="onOpenChange">

      <template v-for="item in routes">
        <template v-if="!item.hidden && item.children">
          <!-- 只有一个子菜单: 一级菜单 -->
          <a-menu-item v-if="item.children.length === 1" :key="`${item.path}${item.children[0].path}`">
            <a-icon :type="item.children[0] && item.children[0].meta && item.children[0].meta.icon" />
            <router-link style="display: inline-block" :to="`${item.path}${item.children[0].path}`">
              {{ item.children[0].meta.title }}
            </router-link>
          </a-menu-item>
          <!-- submenu -->
          <a-sub-menu v-else :key="item.path">
            <span slot="title">
              <a-icon :type="item.meta && item.meta.icon" />
              <span v-if="item.meta">{{ item.meta.title }}</span>
            </span>
            <template v-for="subItem in item.children">
              <a-menu-item v-if="!subItem.children" :key="item.path + '/' + subItem.path">
                <a-icon v-if="subItem.meta.icon" :type="subItem.meta && subItem.meta.icon" />
                <router-link style="display: inline-block" :to="item.path + '/' + subItem.path">
                  {{ subItem.meta.title }}
                </router-link>
              </a-menu-item>
            </template>
          </a-sub-menu>
        </template>
      </template>

    </a-menu></div>
</template>

<script>
import { routes } from '@/router'

export default {
  data() {
    return {
      routes,
      isCollapsed: false,
      onlyOneChild: null,
      openKeys: [''],
      rootSubmenuKeys: ['/form', '/about'] // submenu数组
    }
  },

  computed: {
    // 当前选中的菜单项
    currentSelectMenu() {
      return [this.$route.path]
    },
    router() {
      return this.$route.path
    }
  },

  watch: {
    collapsed: {
      handler: function(val) {
        this.isCollapsed = val
      }
    }
  },

  created() {
    // 获取当前副路由(需要展开)
    const openKeys = window.sessionStorage.getItem('open-menu-key')
    if (openKeys) this.openKeys = [openKeys]
  },

  methods: {
    // 点击菜单触发事件
    menuClick({ item, key, keyPath }) {
      // length为1则说明没有子菜单
      if (keyPath.length === 1) {
        this.openKeys = []
        window.sessionStorage.clear()
      } else window.sessionStorage.setItem('open-menu-key', keyPath.pop()) // 将副路由存入sessionStorage，展开激活submenu菜单
    },

    // 子菜单展开/关闭的回调
    onOpenChange(openKeys) {
      const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1)
      this.openKeys = this.rootSubmenuKeys.indexOf(latestOpenKey) === -1 ? openKeys : latestOpenKey ? [latestOpenKey] : []
    }
  }

}
</script>

<style lang="scss" scoped>

.menu_main {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.ant-menu-item {
  margin: 0;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
}
.sidebar_main {
  //width: 200px;
  height: calc(100vh - 50px);
  display: flex;
  align-items: center;
  flex-direction: column;
}

</style>
