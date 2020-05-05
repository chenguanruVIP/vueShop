<template>
  <div class="classify">
    <!-- 头部 -->
    <div class="classifyHeader">
      <van-nav-bar title="分类" left-text right-text :fixed="true" />
    </div>
    <!-- 内容 -->
    <div class="classifyMain">
      <div class="classifyLeft">
        <van-sidebar v-model="activeKey">
          <van-sidebar-item title="标签名称" />
          <van-sidebar-item title="标签名称" />
          <van-sidebar-item title="标签名称" />
          <van-sidebar-item title="标签名称" />
          <van-sidebar-item title="标签名称" />
          <van-sidebar-item title="标签名称" />
          <van-sidebar-item title="标签名称" />
        </van-sidebar>
      </div>
      <div class="classifyRight">
        <div class="RightADImg">
          <van-image fit="cover"  src="https://img.alicdn.com/tfscom/TB1tY99Drj1gK0jSZFOXXc7GpXa.jpg_q90.jpg" />
        </div>
        <div class="classListBox">
          <div class="listItem">
            <van-image fit="cover" class="itemIcon" src="http://g.search2.alicdn.com/img/bao/uploaded/i4/i2/2669406820/O1CN01e7V7a520FbeZvoiTa_!!2669406820.jpg_360x360.jpg" />
            <div class="itemTitle">帽子</div>
          </div>
          <div class="listItem">
            <van-image fit="cover" class="itemIcon" src="http://g.search.alicdn.com/img/bao/uploaded/i4/i4/TB15WhcKXXXXXazXXXXXXXXXXXX_!!0-item_pic.jpg_360x360.jpg" />
            <div class="itemTitle">玩具</div>
          </div>
          <div class="listItem">
            <van-image fit="cover" class="itemIcon" src="http://g.search1.alicdn.com/img/bao/uploaded/i4/i2/2669406820/O1CN01TUAbUR20FbeRVrXel_!!2669406820.jpg_360x360.jpg" />
            <div class="itemTitle">项链</div>
          </div>
          <div class="listItem">
            <van-image fit="cover" class="itemIcon" src="http://g.search2.alicdn.com/img/bao/uploaded/i4/i3/2669406820/O1CN01wxH9Xr20FbgaHd2KG_!!2669406820.jpg_360x360.jpg" />
            <div class="itemTitle">装饰</div>
          </div>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Lazyload, Toast } from "vant";
Vue.use(Lazyload, Toast);
export default {
  name: "classify",
  data() {
    return {
      activeKey: 0
    };
  },
  components: {},
  computed: {},
  methods: {}
};
</script>
<style scoped>
.classifyMain {
  width: 100vw;
  margin-top: 1.26rem;
  height: calc(100vh - 100px);
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
}
.classifyMain >>> .van-sidebar-item{
  padding-top:0.35rem;
  padding-bottom:0.35rem
}
.classifyMain >>> .van-sidebar-item--select{
  border-color:#1989fa;
  color:#1989fa;
  box-sizing: border-box;
}
.classifyMain >>> .van-sidebar{
  width:auto
}
.classifyLeft{
  width:2.26667rem;
  height: 100%;
  background: #f7f8fa;
  overflow-y: auto;
}
.classifyRight{
  width:calc(100vw - 2.26667rem);
  height: 100%;
  overflow-y: auto;
  margin-left:.266667rem;
  background: #f7f8fa;
}
.classListBox{
  width:100%;
  padding:.4rem;
  box-sizing: border-box;
  background: #fff;
  display: flex;
  flex-wrap: wrap;
}
.listItem{
  width:2rem;
  height: 2.4rem;
  font-size: .373333rem;
  margin-right:.2rem;
  margin-bottom:.26667rem
}
.itemIcon{
  width:1.333333rem;
  height: 1.333333rem;
}
</style>