<!--  -->
<template>
  <div class="goodInfo">
    <div>
      <van-image class="good-img" fit="cover" lazy-load :src="imgsrc" />
    </div>
    <div class="infoBox">
      <div class="infoLeft">
        <div class="goodTitle hidenText twoText">{{goodtitle}}</div>
        <div class="goodSpec">{{goodSpec}}</div>
        <div class="goodService">
          <van-tag round color="rgb(255, 241, 235)" text-color="rgb(255, 80, 0)">七天无理由退换</van-tag>
        </div>
      </div>
      <div class="infoRight">
        <div class="goodPrice">￥{{price}}</div>
        <div class="goodQuantity">x{{pricenum}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "good",
  props: {
    imgsrc: {
      type: String,
      default: "/static/default.jpg"
    },
    goodtitle: {
      type: String,
      default: "薛之谦店铺"
    },
    goodSpec: {
      type: String,
      default: "默认规格"
    },
    price: {
      type: String|Number,
      default: "100.01"
    },
    pricenum: {
      type: String|Number,
      default: "1"
    }
  },
  data() {
    return {};
  },
  components: {},
  computed: {},
  methods: {}
};
</script>
<style  scoped>
.goodInfo {
  display: flex;
  margin-bottom: 0.16rem;
}
.good-img {
  border-radius: 0.16rem;
  overflow: hidden;
  width: 2.4rem;
  height: 2.4rem;
}
.infoBox {
  flex: 1;
  padding: 0rem 0.16rem;
  box-sizing: border-box;
  background: #fff;
  margin-left: 0.15rem;
  display: flex;
}
.liteItem {
  display: flex;
  justify-content: space-between;
}
.infoLeft {
  text-align: left;
  width: 4.8rem;
}
.goodTitle {
  font-size: 0.32rem;
  line-height: 0.373333rem;
  color: rgb(51, 51, 51);
  width: 4.533333rem;
}
.goodSpec {
  font-size: 0.32rem;
  color: rgb(153, 153, 153);
  margin: 0.106667rem 0px;
}
.infoRight {
  flex: 1;
  text-align: right;
}
.goodPrice {
  font-size: 0.32rem;
  color: rgb(51, 51, 51);
}
.goodQuantity {
  margin-top: 0.106667rem;
  font-size: 0.32rem;
  color: rgb(153, 153, 153);
}
</style>