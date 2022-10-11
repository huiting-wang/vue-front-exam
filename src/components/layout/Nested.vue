<template>
  <div class="layout-sidebar__items">
    <!-- 單一選單項目 -->
    <el-menu-item
      v-if="!routeChildrenExist(item)"
      :index="item.name"
      :route="{ path: item.path }"
      class="layout-sidebar__items--link"
    >
      <ExamIcon :title="item.meta && item.meta.icon" />
      <span v-show="sidebarOpened" class="layout-sidebar__items--title">{{
        item.meta.title
      }}</span>
    </el-menu-item>

    <el-submenu v-else :index="item.path" popper-append-to-body>
      <!-- 主選單項目 -->
      <template slot="title">
        <ExamIcon :title="item && item.meta.icon" />
        <span v-show="!$parent.collapse" class="layout-sidebar__items--title"
          >{{ item.meta.title }}
        </span>
      </template>

      <!-- 次選單項目 -->
      <el-menu-item
        v-for="child in item.children"
        :key="child.name"
        class="layout-sidebar__items--link"
        :index="child.name"
        :route="resolvePath(item.path, child.path)"
        :disabled="child.meta.hidden"
        >{{ child.meta.title }}
      </el-menu-item>
    </el-submenu>
  </div>
</template>

<script>
import path from 'path';
import { mapState } from 'vuex';

export default {
  name: 'LayoutNested',
  props: {
    // 選單項目
    item: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapState({
      sidebarOpened: (state) => state.layout.sidebarOpened,
    }),
  },
  methods: {
    /**
     * 路由解析
     *
     * @param {string} basePath - 根路由
     * @param {string} routePath - 子路由
     * @returns {string} 回傳重組後的完整路由
     */
    resolvePath(basePath, routePath) {
      return path.resolve(basePath, routePath);
    },
    /**
     * 是否存在子路由
     *
     * - 利用於選單層級判斷
     *
     * @param {string} route - 單一路由
     * @returns {boolean}
     */
    routeChildrenExist(route) {
      return !!route.children && route.children.length > 0;
    },
  },
};
</script>

<style lang="scss" scoped>
@include component(layout, sidebar) {
  @include element(items) {
    .el-menu-item {
      display: flex;
      align-items: center;
      padding: 0px 20px !important;
      margin-bottom: 5px;
      line-height: 48px;
      height: 48px;
      transition: all ease-in-out 0.25s;
      -webkit-transition: all ease-in-out 0.25s;
    }

    // 選單項目連結
    @include modifier(link) {
      display: block;
      padding: 0px 20px !important;
      margin-bottom: 5px;
    }

    // 選單文字
    @include modifier(title) {
      margin-left: 20px;
    }

    .el-menu {
      .layout-sidebar__items--link {
        padding-left: 52px !important;
      }
    }

    :deep() .el-submenu__title {
      display: flex;
      align-items: center;
      height: 40px;
      padding: 0px 10px !important;
    }

    // 箭頭樣式
    :deep() .el-icon-arrow-down {
      margin-top: -11px;
    }
  }
}
</style>
