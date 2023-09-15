<template>
  <el-container
    :class="['layout-container', { 'sidebar-opend': sidebarOpened }]"
  >
    <el-aside width="210px" style="background-color: #2c3e50">
      <layout-sidebar>
        <!-- 巢狀選單項目 -->
        <LayoutNested
          v-for="route in menuRoutes"
          :key="route.path"
          :item="route"
        />
      </layout-sidebar>
    </el-aside>

    <el-container class="layout-container__main">
      <el-header class="layout-container__navbar" height="48px">
        <!-- 漢堡選單 -->
        <div class="layout-container__hamburger" @click="toggleSideBar">
          <ExamIcon title="menu" color="#2c3e50" />
        </div>
      </el-header>

      <!-- 主要內容 -->
      <el-main id="layout-main">
        <ul
          style="
            text-align: left;
            padding: 20px;
            margin-left: 20px;
            border: 1px solid #efae00;
            background-color: #fcf7e0;
            border-radius: 10px;
            line-height: 36px;
          "
        >
          <li>
            HTML 歷史沿革：<a
              href="https://zh.wikipedia.org/zh-tw/HTML"
              target="_blank"
              >HTML 維基百科</a
            >
          </li>
          <li>
            HTML 標籤大全：<a
              href="https://www.w3schools.com/html/default.asp"
              target="_blank"
              >w3schools</a
            >
          </li>
          <li>
            線上即時 HTML 編輯器，修改原始碼立即查看效果變化：<a
              href="https://html.cafe/"
              target="_blank"
              >html.cafe</a
            >
          </li>
          <li>
            練習成果：<a
              href="https://jedchang.github.io/Taiwan-Tourism-Attraction"
              target="_blank"
              >旅遊風格網頁</a
            >
          </li>
        </ul>

        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { mapState } from 'vuex';
import { routes } from '@/router/routes';
import LayoutSidebar from '@/components/layout/Sidebar.vue';
import LayoutNested from '@/components/layout/Nested.vue';

export default {
  name: 'LayoutIndex',
  components: { LayoutSidebar, LayoutNested },
  computed: {
    ...mapState({
      sidebarOpened: (state) => state.layout.sidebarOpened,
    }),
    menuRoutes() {
      return routes[0].children;
    },
  },
  methods: {
    /**
     * 左側選單收合事件
     */
    toggleSideBar() {
      this.$store.dispatch('layout/toggleSideBar');
    },
  },
};
</script>

<style lang="scss" scoped>
.layout-container {
  .el-aside {
    width: 64px !important;
    transition: width 0.25s;
    -webkit-transition: width 0.25s;
  }

  &__main {
    margin: 0;
    transition: margin-left 0.25s;
    -webkit-transition: margin-left 0.25s;

    #layout-main {
      position: relative;
      margin: 0;
      height: calc(100vh - 48px);
    }
  }

  &__navbar {
    padding: 0px 20px;
    background-color: $white;
    z-index: 2000;
    @include setFlex($jc: flex-start);
    @include shadow(0px 1px 3px rgba(0, 0, 0, 0.16));
  }

  &__hamburger {
    cursor: pointer;
  }

  &.sidebar-opend {
    .el-aside {
      width: 210px !important;
    }
  }
}
</style>
