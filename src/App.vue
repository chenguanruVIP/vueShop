<template>
  <div id="app">
    <!-- 只有tabbar页面才显示底部导航 -->
    <div v-if="$route.meta.idTabbat">
      <van-tabbar v-model="active" route>
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="bars" to="/classify">分类</van-tabbar-item>
      <van-tabbar-item icon="cart" to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="manager" to="/member">个人中心</van-tabbar-item>
    </van-tabbar>
    </div>
    <!-- 不需要缓存 -->
    <div v-if="!$route.meta.isAlive">
      <router-view ></router-view>
    </div>
    <keep-alive>
      <!-- 需要缓存 -->
      <router-view v-if="$route.meta.isAlive"></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      active: 0,
    }
  },
  // components: {
  //   [Tabbar.name]: Tabbar,
  //   [TabbarItem.name]: TabbarItem
  // }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
*{padding:0px;margin:0px}
.hidenText{ overflow: hidden;text-overflow: ellipsis;}
.oneText{white-space: nowrap;}
.twoText{display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2}
.threeText{display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 3}
</style>
