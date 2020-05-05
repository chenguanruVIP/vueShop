<template>
  <div class="orderListBox">
    <!-- 头部 -->
    <div class="navHeaderBox">
      <div
        class="navItem"
        :class="{navActive:active == index}"
        v-for="(item,index) in typeList"
        @click="changeNav(index)"
        :key="index"
      >{{item}}</div>
    </div>
    <!-- 主体 -->
    <div class="mainBox">
      <van-swipe
        class="swiperBox"
        :initial-swipe="active"
        :show-indicators="false"
        :loop="false"
        @change="changeSwiper"
      >
        <van-swipe-item class="swiperItem" v-for="(item,index) in allOrderList" :key="index">
          <div class="liteItem" v-for="(_item,_index) in item" :key="_index">
            <div v-for="(order_item,order_index) in _item.goodList" :key="order_index">
              <order-item
                :imgsrc="order_item.imgsrc"
                :goodtitle="order_item.goodtitle"
                :goodSpec="order_item.goodSpec"
                :price="order_item.price"
                :pricenum="order_item.pricenum"
              ></order-item>
            </div>
            <!-- 订单价格 -->
            <div class="orderTotal">
              <div class="discounts">总价￥{{_item.total.total}},优惠￥{{_item.total.discounts}}</div>
              <div class="reality">实付款￥{{_item.total.reality}}</div>
            </div>
            <!-- 订单功能区 -->
            <div class="functionBox">
              <div class="functionLeft">
                <div class="functionMore">更多</div>
              </div>
             <div class="functionRight">
               <div class="functionItem">申请开票</div>
              <div class="functionItem">查看物流</div>
              <div class="functionItem Evaluate" v-if="_item.state>=4">评价</div>
             </div>
              
            </div>
          </div>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
let typeList = ["全部", "待付款", "待发货", "待收货", "待评价"];
import orderItem from "@/components/common/orderItem";
import dataJson from "@/data/dataJson";
export default {
  name: "orderlist",
  data() {
    return {
      typeList,
      active: 0,
      allOrderList: dataJson.allOrderList //存放所有类型的订单
    };
  },
  components: {
    orderItem
  },
  computed: {},
  created() {
    console.log("参数", this.$route.query.index);
    this.active = this.$route.query.index;
  },

  methods: {
    // 切换菜单
    changeNav(index) {
      this.active = index;
    },
    // 切换轮播图
    changeSwiper(index) {
      this.active = index;
    }
  }
};
</script>
<style scoped>
.orderListBox >>> .van-swipe{
  overflow-y: auto;
}
.orderListBox {
  background: rgba(245, 245, 245);
  min-height: 100vh;
}
.navHeaderBox {
  width: 100vw;
  height: 1.066667rem;
  line-height: 1.066667rem;
  background: #fff;
  font-size: 0.373333rem;
  display: flex;
}
.navItem {
  flex: 1;
  display: flex;
  justify-content: center;
}
.navActive {
  color: #1989fa;
}
.mainBox {
  width: 100vw;
  height: calc(100vh - 1.066667rem);
  overflow-y: auto;
  padding-top: 0.266667rem;
  padding-bottom: 0.266667rem;
  box-sizing: border-box;
}
.swiperBox {
  width: 100vw;
  height: 100%;
}
.swiperItem {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.liteItem {
  width: 88vw;
  padding: 0.3rem 0.3rem 0rem 0.3rem;
  background: #fff;
  border-radius: 0.1rem;
  margin-bottom:.266667rem
}
.orderTotal {
  margin-top: 0.213333rem;
  font-size: 0.32rem;
  color: rgb(153, 153, 153);
  display: flex;
  border-bottom: 0.026667rem solid rgba(245, 245, 245, 1);
  justify-content: flex-end;
  padding-bottom: 0.213333rem;
}
.reality {
  color: rgb(51, 51, 51);
  margin-left: 0.4rem;
}
.functionBox {
  width: 100%;
  padding: 0.24rem 0px;
  display: flex;
  align-items: center;
  font-size: 0.346667rem;
  color: #333;
  justify-content: space-between;
}
.functionMore {
  width: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 0.746667rem;
}
.functionItem {
  color: rgb(102, 102, 102);
  display: flex;
  width: 2.133333rem;
  height: 0.746667rem;
  border: 0.026667rem solid rgba(245, 245, 245, 1);
  border-radius: 0.373333rem;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  margin-left: 0.16rem;
}
.Evaluate {
  border-color: rgb(255, 80, 0);
  color: rgb(255, 80, 0);
}
.functionRight{
  display: flex;
}
</style>