import Vue from 'vue';
import VueRouter from 'vue-router';
import { routes } from '@/router/routes';

Vue.use(VueRouter);

/**
 * === [Patch] Vue Router Methods push/replace 升級問題 ===
 * Vue router v3.1.0 以上新增非同步(promise)捕獲異常(catch)機制
 * 雖不影響功能，但為解決 console.error 顯示的不美觀
 * 增加全域捕獲異常方法，以解決每次調用需加寫捕獲異常方法
 */
const orgPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return orgPush.call(this, location, onResolve, onReject);
  try {
    return orgPush.call(this, location).catch((error) => error);
  } catch (error) {
    console.log(error);
  }
};

const orgReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location, onResolve, onReject) {
  if (onResolve || onReject)
    return orgReplace.call(this, location, onResolve, onReject);
  try {
    return orgReplace.call(this, location).catch((error) => error);
  } catch (error) {
    console.log(error);
  }
};

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: routes,
  /**
   * 視窗捲動行為 - 回傳錨點，點擊上/下一頁按鈕，模擬瀏覽器的原生表現
   *
   * @see https://router.vuejs.org/zh/guide/advanced/scroll-behavior.html
   * @inheritdoc
   */
  scrollBehavior(to, from, savedPosition) {
    return savedPosition ? savedPosition : { x: 0, y: 0 };
  },
});

export default router;
