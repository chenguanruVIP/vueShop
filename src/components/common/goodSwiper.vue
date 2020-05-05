<template>
  <div>
    <van-swipe class="scoll-wrapper"  indicator-color="#1989fa">
      <van-swipe-item class="swiper_item_list">
        <div class="floor-item" @click="navToDetailPage">
          <div class="item_img_box">
            <van-image
              fit="cover"
              class="floor-item-image"
              lazy-load
              src="http://g.search.alicdn.com/img/bao/uploaded/i4/i2/2669406820/O1CN01Q2Yg2Z20FblN0TOob_!!0-item_pic.jpg_360x360.jpg"
            />
            <div class="item_price">
              <div class="item_price_left">推荐</div>
              <div class="item_price_right">¥20</div>
            </div>
          </div>
          <div class="title clamp hidenText twoText">商品标题撒酒疯倒垃圾时两地分居爱上了发动机加了的房间爱上了</div>
        </div>
        <div class="floor-item" @click="navToDetailPage">
          <div class="item_img_box">
            <van-image
              fit="cover"
              class="floor-item-image"
              lazy-load
              src="http://g.search.alicdn.com/img/bao/uploaded/i4/i2/2669406820/O1CN01Q2Yg2Z20FblN0TOob_!!0-item_pic.jpg_360x360.jpg"
            />
            <div class="item_price">
              <div class="item_price_left">推荐</div>
              <div class="item_price_right">¥20</div>
            </div>
          </div>
          <div class="title clamp hidenText twoText">商品标题撒酒疯倒垃圾时两地分居爱上了发动机加了的房间爱上了</div>
        </div>
        <div class="floor-item" @click="navToDetailPage">
          <div class="item_img_box">
            <van-image
              fit="cover"
              lazy-load
              class="floor-item-image"
              src="http://g.search.alicdn.com/img/bao/uploaded/i4/i2/2669406820/O1CN01Q2Yg2Z20FblN0TOob_!!0-item_pic.jpg_360x360.jpg"
            />
            <div class="item_price">
              <div class="item_price_left">推荐</div>
              <div class="item_price_right">¥20</div>
            </div>
          </div>
          <div class="title clamp hidenText twoText">商品标题撒酒疯倒垃圾时两地分居爱上了发动机加了的房间爱上了</div>
        </div>
      </van-swipe-item>
      <van-swipe-item class="swiper_item_list">
        <div class="floor-item" @click="navToDetailPage">
          <div class="item_img_box">
            <van-image
              fit="cover"
              class="floor-item-image"
              lazy-load
              src="http://g.search.alicdn.com/img/bao/uploaded/i4/i2/2669406820/O1CN01Q2Yg2Z20FblN0TOob_!!0-item_pic.jpg_360x360.jpg"
            />
            <div class="item_price">
              <div class="item_price_left">推荐</div>
              <div class="item_price_right">¥20</div>
            </div>
          </div>
          <div class="title clamp hidenText twoText">商品标题撒酒疯倒垃圾时两地分居爱上了发动机加了的房间爱上了</div>
        </div>
        <div class="floor-item" @click="navToDetailPage">
          <div class="item_img_box">
            <van-image
              fit="cover"
              class="floor-item-image"
              lazy-load
              src="http://g.search.alicdn.com/img/bao/uploaded/i4/i2/2669406820/O1CN01Q2Yg2Z20FblN0TOob_!!0-item_pic.jpg_360x360.jpg"
            />
            <div class="item_price">
              <div class="item_price_left">推荐</div>
              <div class="item_price_right">¥20</div>
            </div>
          </div>
          <div class="title clamp hidenText twoText">商品标题撒酒疯倒垃圾时两地分居爱上了发动机加了的房间爱上了</div>
        </div>
        <div class="floor-item" @click="navToDetailPage">
          <div class="item_img_box">
            <van-image
              fit="cover"
              lazy-load
              class="floor-item-image"
              src="http://g.search.alicdn.com/img/bao/uploaded/i4/i2/2669406820/O1CN01Q2Yg2Z20FblN0TOob_!!0-item_pic.jpg_360x360.jpg"
            />
            <div class="item_price">
              <div class="item_price_left">推荐</div>
              <div class="item_price_right">¥20</div>
            </div>
          </div>
          <div class="title clamp hidenText twoText">商品标题撒酒疯倒垃圾时两地分居爱上了发动机加了的房间爱上了</div>
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  computed: {},
  // mounted: {},
  methods: {
    navToDetailPage: function(e) {
      console.log("子组件的id", e.currentTarget.dataset.id);
      this.$emit("showclick", {
        id: e.currentTarget.dataset.id
      });
    }
  }
};
</script>
<style  scoped>
.scoll-wrapper >>> .van-swipe__indicators {
  bottom: 0px;
}
.scoll-wrapper >>> .van-swipe__indicator {
  background-color: #fff;
  opacity: 1;
}
.scoll-wrapper {
  height: 6.333333rem;
  display: flex;
  align-items: flex-start;
}
.swiper_item_list {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0.373333rem;
}
.floor-item {
  flex: 1;
  font-size: 0.426667rem;
  color: #333;
  line-height: 1.8;
  border-radius: 0.106667rem;
  overflow: hidden;
  background: #fff;
}
.item_img_box,
.floor-item-image {
  width: 100%;
  height: 4.2rem;
  position: relative;
}
.floor-item:nth-child(2) {
  margin: 0px 0.266667rem;
}
.floor-item .price {
  color: rgba(204, 45, 30, 1);
  font-weight: bold;
  font-size: 0.32rem;
  position: absolute;
}
.item_price {
  width: 100%;
  height: 0.586667rem;
  background: rgba(255, 255, 255, 1);
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: 0.32rem;
  display: flex;
  align-items: left;
  border-bottom: 0.026667rem solid rgba(245, 245, 245);
}
.item_price_left {
  display: inline-block;
  width: 1.333333rem;
  text-align: center;
  height: 0.533333rem;
  line-height: 0.586667rem;
  color: #fff;
  background: #cc2d1e;
}
.item_price_right {
  display: flex;
  align-items: center;
  color: #cc2d1e;
  background: #fff;
  padding: 0 0.16rem;
  width: 100%;
  line-height: 0.506667rem;
}
.buy_type {
  height: auto;
  color: rgba(153, 153, 153, 1);
  font-size: 0.32rem;
  display: block;
}
.clamp {
  font-size: 0.373333rem;
  text-align: left;
  padding-left: 0.106667rem;
  padding-right: 0.106667rem;
  line-height: 0.48rem;
  margin-top: 0.18rem;
}
</style>