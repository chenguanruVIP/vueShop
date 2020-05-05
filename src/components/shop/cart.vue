<template>
  <div class="cart">
    <!-- 头部 -->
    <div class="cartHeader">
      <van-nav-bar title="购物车" left-text right-text :fixed="true" />
    </div>
    <div v-if="list.length==0">
      <van-empty description="购物车为空~" />
    </div>
    <div v-else>
      <div class="cartListBox">
        <van-swipe-cell class="listItem" :before-close="beforeClose" data-id="0">
          <template #default>
            <div class="listBox">
              <div class="listCheckbox ">
                <van-checkbox v-model="checked"></van-checkbox>
              </div>
              <div class="listLeft">
                <van-image
                  fit="cover"
                  class="goodImage"
                  src="http://g.search2.alicdn.com/img/bao/uploaded/i4/i2/2669406820/O1CN01MGInfy20FblU0ymI1_!!0-item_pic.jpg_360x360.jpg"
                />
              </div>
              <div class="listRight">
                <div class="goodTitle hidenText twoText">DangerouspeoplDangerouspeople 薛之谦dsp时尚潮流字母logo提花保暖毛衣e 薛之谦dsp时尚潮流字母logo提花保暖毛衣</div>
                <div class="goodType">洗发水500ml</div>
                <div class="goodPrice">
                  <div class="priceLeft">￥299.4</div>
                  <div class="priceRight">
                    <van-stepper v-model="value" :button-size="20"/>
                  </div>
                </div>
              </div>
            </div>
          </template>
          <template #right>
            <van-button
              square
              text="删除"
              type="danger"
              class="delete-button"
            />
          </template>
        </van-swipe-cell>
        <van-swipe-cell class="listItem" :before-close="beforeClose" data-id="1">
          <template #default>
            <div class="listBox">
              <div class="listCheckbox ">
                <van-checkbox v-model="checked"></van-checkbox>
              </div>
              <div class="listLeft">
                <van-image
                  fit="cover"
                  class="goodImage"
                  src="http://g.search2.alicdn.com/img/bao/uploaded/i4/i2/2669406820/O1CN01MGInfy20FblU0ymI1_!!0-item_pic.jpg_360x360.jpg"
                />
              </div>
              <div class="listRight">
                <div class="goodTitle hidenText twoText">DangerouspeoplDangerouspeople 薛之谦dsp时尚潮流字母logo提花保暖毛衣e 薛之谦dsp时尚潮流字母logo提花保暖毛衣</div>
                <div class="goodType">洗发水500ml</div>
                <div class="goodPrice">
                  <div class="priceLeft">￥299.4</div>
                  <div class="priceRight">
                    <van-stepper v-model="value" :button-size="20"/>
                  </div>
                </div>
              </div>
            </div>
          </template>
          <template #right>
            <van-button
              square
              text="删除"
              type="danger"
              class="delete-button"
            />
          </template>
        </van-swipe-cell>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Dialog } from 'vant';
Vue.use(Dialog);
export default {
  name: "cart",
  components: {
    [Dialog.Component.name]: Dialog.Component,
  },
  data() {
    return {
      list: [0],
      checked: true,
      value: 1,
    };
  },
  methods: {
     // position 为关闭时点击的位置
    // instance 为对应的 SwipeCell 实例
    beforeClose({ position, instance }) {
      console.log("position",position)
      console.log("instance",instance.$attrs)
      switch (position) {
        case 'left':
        case 'cell':
        case 'outside':
          instance.close();
          break;
        case 'right':
          Dialog.confirm({
            message: '确定删除吗？',
          }).then(() => {
            instance.close();
          });
          break;
      }
    },
  }
};
</script>
<style scoped>
.cart{
  background: rgba(245,245,245);
  min-height: 100vh;
}
.cart >>> .van-empty {
  height: 100vh;
}
.cart >>> .van-swipe-cell__right{
  transform:translate3d(101%,0,0)
}
.goods-card {
  margin: 0;
  background-color: #fff;
}
.delete-button {
  height: 100%;
}
.cartListBox {
  padding-top: 1.466667rem;
}
.cartListBox{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.listBox{
  width:94vw;
  box-sizing: border-box;
  display: flex;
  background: #fff;
  border-radius: .113333rem;
  overflow: hidden;
  align-items: center;
  padding:.266667rem
}
.listRight{
  font-size:.373333rem;
  text-align: left;
}
.goodType{
  background: rgba(236, 236, 236, 0.298);
  border-radius: .08rem;
  display: inline-flex;
  margin-top:.106667rem;
  margin-bottom:.106667rem;
  padding:.106667rem 0.16rem;
  font-size: .32rem;
}
.goodPrice{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.goodImage{
  width:2rem;
  height: 2rem;
  border-radius: .106667rem;
  overflow: hidden;
  margin-left:.213333rem;
  margin-right:.213333rem
}
.priceLeft{
  font-size: .373333rem;
  color: rgb(255, 85, 0);
}
.listItem{
  margin-bottom:.266667rem
}
</style>
