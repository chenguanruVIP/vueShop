
<template>
  <div class="member">
    <!-- 用户头像 -->
    <div class="memberUserInfo">
      <div class="UserLogo">
        <div class="LogoLeft">
          <van-image
            fit="cover"
            class="userImage"
            src="http://g.search2.alicdn.com/img/bao/uploaded/i4/i2/2669406820/O1CN01MGInfy20FblU0ymI1_!!0-item_pic.jpg_360x360.jpg"
          />
          <div class="userName">急急急薛之谦</div>
        </div>
        <div class="LogoRight">
          <van-icon name="setting-o" color="#fff" size="26px" />
        </div>
      </div>
      <div class="UserActiveInfo">
        <div class="activeItem">
          <div class="ItemNum">20</div>
          <div class="ItemName">收藏夹</div>
        </div>
        <div class="activeItem">
          <div class="ItemNum">10</div>
          <div class="ItemName">购物车</div>
        </div>
        <div class="activeItem">
          <div class="ItemNum">60</div>
          <div class="ItemName">足迹</div>
        </div>
        <div class="activeItem">
          <div class="ItemNum">11</div>
          <div class="ItemName">优惠券</div>
        </div>
      </div>
    </div>
    <!-- 我的订单 -->
    <div class="myOrderBox">
      <div class="OrderHeader">我的订单</div>
      <div class="orderList">
        <div class="orderItem" v-for="(item,index) in orderTabList" :key="index" 
        @click="goOrderList(index)">
          <div class="ItemIcon">
            <div v-if="item.nun==0">
              <van-icon :name="item.icon" size="1rem" color="#1989fa" />
            </div>
            <div v-else>
              <van-icon :name="item.icon" size="1rem" color="#1989fa" :badge="item.nun" />
            </div>
          </div>
          <div class="orderItemNum">{{item.type}}</div>
        </div>
      </div>
    </div>
    <!-- 必备工具 -->
    <div class="toolBox">
      <div class="toolHeader">必备工具</div>
      <div class="toolListBox">
        <div class="toolItem" v-for="(item,index) in toolList" :key="index">
          <van-image
            fit="cover"
            class="toolItemImage"
            :src="item.src"
          />
          <div class="toolItemName">{{item.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
let orderTabList = [
  {
    type:'待付款',
    icon:'balance-list-o',
    nun:10,
    index:'wait'
  },
  {
    type:'待发货',
    icon:'shop-o',
    nun:10,
    index:'send'
  },
  {
    type:'待收货',
    icon:'logistics',
    nun:0,
    index:'rece'
  },
  {
    type:'待评价',
    icon:'chat-o',
    nun:0,
    index:'evaluate'
  }
]
import dataJson from "@/data/dataJson";
export default {
  name: "member",
  data() {
    return {
      toolList:dataJson.toolList,
      orderTabList,
    };
  },
  components: {},
  computed: {},
  methods: {
    goOrderList(index){
      this.$router.push({path:'orderList',query:{index:index+1}})
    }
  }
};
</script>
<style scoped>
.member {
  width: 100vw;
  min-height: 100vh;
  background: rgba(245, 245, 245);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.memberUserInfo {
  width: 100vw;
  height: 4.8rem;
  background-color: #1989fa;
  background-image: -webkit-linear-gradient(left, #097ff5b0, #1989fa);
  background-image: linear-gradient(to right, #097ff5b0, #1989fa);
}
.UserLogo {
  width: 100vw;
  height: 2.6rem;
  box-sizing: border-box;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding-left: 0.533333rem;
  padding-right: 0.533333rem;
}
.LogoLeft {
  display: flex;
  align-items: center;
}
.userName {
  font-size: 0.5rem;
  color: #fff;
  margin-left: 0.213333rem;
}
.UserActiveInfo {
  width: 100vw;
  height: 2.2rem;
  color: #fff;
  font-size: 0.373333rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 1rem;
  padding-right: 1rem;
}
.ItemNum {
  margin-bottom: 0.106667rem;
}
.userImage {
  width: 1.333333rem;
  height: 1.333333rem;
  border-radius: 100%;
  overflow: hidden;
}
.myOrderBox,
.toolBox {
  width: 94vw;
  box-sizing: border-box;
  background: #fff;
  border-radius: 0.2rem;
  overflow: hidden;
  margin-top: 0.3rem;
}
.OrderHeader,
.toolHeader {
  padding: 0.266667rem 0.266667rem;
  font-size: 0.373333rem;
  font-weight: bold;
  color: rgb(51, 51, 51);
  text-align: left;
  border-bottom: 0.026667rem solid #eeeee7;
}
.orderList {
  padding: 0.266667rem 0.266667rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.orderItem {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.orderItemNum {
  font-size: 0.373333rem;
  color: #333;
  margin-top: 0.106667rem;
}
.toolHeader {
  border-bottom: 0px;
}
.toolListBox{
  padding: 0.266667rem 0.266667rem;
  font-size: .32rem;
  color: #333;
  display: flex;
  flex-wrap: wrap;
}
.toolItem{
  width:2.2rem;
  height: 2.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.toolItemImage{
  width: .853333rem;
  height: .853333rem;
  border-radius: 100%;
  overflow: hidden;
  margin-bottom:.106667rem
}
</style>