<template>
  <div class="index">
    <div class="indexHeader" @click="searchFun">
      <form action="/">
        <van-search disabled placeholder="请输入搜索关键词" />
      </form>
    </div>
    <van-pull-refresh v-model="isLoading" success-text="刷新成功" @refresh="onRefresh">
      <div class="indexSwiper">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#1989fa">
          <van-swipe-item v-for="(image, index) in images" :key="index">
            <van-image fit="cover" lazy-load :src="image" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="indexGird">
        <van-grid :border="false" :icon-size="60" :square="true">
          <van-grid-item
            v-for="(item,index) in girdTab"
            @click="clickFun"
            :key="index"
            :icon="item.icon"
            :text="item.title"
          />
        </van-grid>
      </div>
      <div class="goodSwiper">
        <van-notice-bar
          color="#1989fa"
          background="#ecf9ff"
          left-icon="info-o"
        >欢迎来到，陈二哈啥都有商城，，全场打骨折。不哈不要钱。</van-notice-bar>
        <div class="swiperBox" style="padding-bottom:10px">
          <div class="swiperheader">
            <div class="swiperLeft">薛之谦</div>
            <div class="swiperRight">
              <label>更多</label>
              <van-icon name="arrow" size="0.5rem" />
            </div>
          </div>
          <van-image
            lazy-load
            src="//gw.alicdn.com/imgextra/i4/2669406820/O1CN01Oe8A5h20FblPRJ8UE_!!2669406820.jpg_790x10000Q75.jpg"
          ></van-image>
          <good-swiper></good-swiper>
        </div>
      </div>
      <!-- 推荐 -->
      <div class="recommendBox">
        <div class="re_header">
          <img
            src="https://img.alicdn.com/tfs/TB1V2eQrKSSBuNjy0FlXXbBpVXa-966-114.png"
            class="re_bg"
          />
        </div>
        <div class="re_good_list">
          <div class="re_list_left">
            <good-info
              imgsrc="http://g.search.alicdn.com/img/bao/uploaded/i4/i1/2669406820/O1CN01c3R7wP20FbjmXOijD_!!2669406820.jpg_360x360.jpg"
              goodtitle="Dangerouspeople 薛之谦dsp潮流涂鸦印花纸袋人双肩包"
              @goodInfoPage="goodInfoPage"
            ></good-info>
            <good-info
              imgsrc="http://g.search1.alicdn.com/img/bao/uploaded/i4/i2/2669406820/O1CN01KVbyY320FblOkbR9w_!!0-item_pic.jpg_360x360.jpg"
              goodtitle="Dangerouspeople 薛之谦DSP 纸袋人系列超薄落肩立领双色连帽防晒"
            ></good-info>
            <good-info
              imgsrc="http://g.search2.alicdn.com/img/bao/uploaded/i4/i2/2669406820/O1CN01nMCGTr20FbeYrW3sL_!!2669406820.jpg_360x360.jpg"
              goodtitle="Dangerouspeople 薛之谦dsp胡萝卜纸袋人系列保暖潮流围巾"
            ></good-info>
            <good-info
              imgsrc="http://g.search2.alicdn.com/img/bao/uploaded/i4/i1/2669406820/O1CN01AdJema20FbjpSethn_!!2669406820.jpg_360x360.jpg"
              goodtitle="Dangerouspeople 薛之谦dsp潮流涂鸦印花纸袋人双肩包"
            ></good-info>
            <good-info
              imgsrc="http://g.search1.alicdn.com/img/bao/uploaded/i4/i1/2669406820/O1CN01hMpO3E20FblPhAbOG_!!0-item_pic.jpg_360x360.jpg"
              goodtitle="Dangerouspeople 薛之谦dsp潮流涂鸦印花纸袋人双肩包"
            ></good-info>
          </div>
          <div class="re_list_right">
            <good-info
              imgsrc="http://g.search2.alicdn.com/img/bao/uploaded/i4/i4/2669406820/O1CN01RsPUdr20FblSNtEeC_!!0-item_pic.jpg_360x360.jpg"
              goodtitle="Dangerouspeople 薛之谦dsp潮流涂鸦印花纸袋人双肩包"
            ></good-info>
            <good-info
              imgsrc="http://g.search2.alicdn.com/img/bao/uploaded/i4/i3/2669406820/O1CN01GpDHxb20FblOkiPv9_!!0-item_pic.jpg_360x360.jpg"
              goodtitle="Dangerouspeople 薛之谦dsp潮流涂鸦印花纸袋人双肩包"
            ></good-info>
            <good-info
              imgsrc="http://g.search2.alicdn.com/img/bao/uploaded/i4/i1/2669406820/O1CN01FpdlI720FblRfAYjP_!!0-item_pic.jpg_360x360.jpg"
              goodtitle="Dangerouspeople 薛之谦dsp潮流涂鸦印花纸袋人双肩包"
            ></good-info>
            <good-info
              imgsrc="http://g.search2.alicdn.com/img/bao/uploaded/i4/i2/2669406820/O1CN01mmYvXT20FblWqxEWP_!!0-item_pic.jpg_360x360.jpg"
              goodtitle="Dangerouspeople 薛之谦dsp潮流涂鸦印花纸袋人双肩包"
            ></good-info>
            <good-info
              imgsrc="http://g.search2.alicdn.com/img/bao/uploaded/i4/i2/2669406820/O1CN01nMCGTr20FbeYrW3sL_!!2669406820.jpg_360x360.jpg"
              goodtitle="Dangerouspeople 薛之谦dsp胡萝卜纸袋人系列保暖潮流围巾"
            ></good-info>
          </div>
        </div>
      </div>
    </van-pull-refresh>
  </div>
</template>

<script>
import Vue from "vue";
import { Lazyload, Toast } from "vant";
import goodSwiper from "@/components/common/goodSwiper";
import dataJson from "@/data/dataJson";
import goodInfo from "@/components/common/good";
Vue.use(Lazyload, Toast);
export default {
  name: "index",
  data() {
    return {
      images: dataJson.images,
      girdTab: dataJson.girdTab,
      isLoading: false
    };
  },
  components: {
    goodSwiper,
    goodInfo
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        Toast("刷新成功");
        this.isLoading = false;
      }, 1000);
    },
    searchFun() {
      console.log("searchPage");
    },
    clickFun() {
      Toast("请打开淘宝...");
    },
    goodInfoPage(){
      console.log("打开详情页")
      this.$router.push({path:'goodInfo'})
    }
  }
};
</script>
<style scoped>
.index {
  background: rgb(244, 244, 244, 0.6);
  margin-bottom: 1.3rem;
}
.indexHeader {
  width: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 10000;
}
.my-swipe {
  height: 5.6rem;
}
.indexSwiper {
  width: 100%;
  margin-top: 1.4rem;
}
.indexSwiper img {
  width: 100vw;
  height: 5.6rem;
}
.van-image {
  height: 100%;
}
.indexGird {
  padding-bottom: 0.266667rem;
  background: #fff;
}
.goodSwiper {
  width: 100%;
  background: #fff;
}
.swiperheader {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.25rem;
  font-size: 0.4rem;
}
.swiperRight {
  display: flex;
  align-items: center;
}
.recommendBox {
  padding: 0.373333rem;
  background: rgba(245, 245, 245);
  box-sizing: border-box;
}
.re_bg {
  width: 4.533333rem;
  height: 0.533333rem;
}
.re_good_list {
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  margin-top: 0.266667rem;
}
.re_list_left,
.re_list_right {
  flex: 1;
}
.re_list_left {
  margin-right: 0.1rem;
}
.re_list_right {
  margin-left: 0.1rem;
}
</style>
