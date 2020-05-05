<!--  -->
<template>
  <div class="goodInfo" @click="goGoodInfoCompon">
    <van-image class="good-img" fit="cover" lazy-load :src="imgsrc" />
    <div class="infoBox">
      <div class="infoTitle">{{goodtitle}}</div>
      <div class="infoPrice">
        <div class="price">￥{{price}}</div>
        <div class="price_penren">{{pricenum}}人付款</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'good',
  props:{
    imgsrc:{
      type:String,
      default:'/static/default.jpg'
    },
    goodtitle:{
      type:String,
      default:'...'
    },
    price:{
      type:String,
      default:'100'
    },
    pricenum:{
      type:String,
      default:'0'
    }
  },
  data () {
    return {
    };
  },
  components: {},
  computed: {},
  methods: {
    goGoodInfoCompon(){
      this.$emit('goodInfoPage')
    }
  }
}
</script>
<style  scoped>
.goodInfo{
  margin-bottom:.24rem
}
.good-img{
  border-top-left-radius: .16rem;
  border-top-right-radius: 0.16rem;
  overflow: hidden;
}
.infoBox{
  width:100%;
  padding:0.2rem .16rem;
  box-sizing: border-box;
  background: #fff;
}
.infoTitle{
  margin-bottom:.2rem;
  color: rgb(51, 51, 51);
  font-size: .346667rem;
  height: .88rem;
  overflow: hidden;
  line-height: .453333rem;
  white-space: pre-wrap;
  align-content:flex-start;
  text-align: left;
}
.infoPrice{
  display: flex;
  align-items: center;
}
.price{
  color: rgb(255, 80, 0);
  font-size: 17px;
}
.price_penren{
  color: rgb(153, 153, 153);
  font-size: .293333rem;
  margin-left:.16rem
}
</style>