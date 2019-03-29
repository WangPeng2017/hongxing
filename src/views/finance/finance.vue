<template>
  <div>
    <Header title="财务"></Header>
    <div class="bg"></div>
    <section class="section">
      <div class="part part1">
        <div class="title">
          <img :src="logo1" class="logo" alt="">
          <span class="left">销售总额</span>
          <span class="toDetail" @click="toZDDetail">查看账单</span>
        </div>
        <div class="box">
          <div class="line1">
            <span class="date">2018-12</span>
            <span class="money">
              <i>本月总额</i>
              ￥3213 3968 7500.00
            </span>
          </div>
          <div class="line2" v-for="n in 3" :key="n">
            <span class="date">2018-11</span>
            <span class="money">￥3960.00</span>
          </div>
        </div>
      </div>
      <div class="part part2">
        <div class="title">
          <img :src="logo2" class="logo" alt="">
          <span class="left">结算情况</span>
          <span class="toDetail" @click="toJSDetail">查看详情</span>
        </div>
        <div class="box">
          <div class="line1">
            <span class="date">2018-12-06 16:43一2018-12-11 18:23</span>
          </div>
          <div class="line2">
            <div class="left">
              <img :src="settled" alt="" />
              <p>￥1235 1268 1396.00</p>
            </div>
            <div class="right">
              <img :src="noSettle" alt="" />
              <p>￥1235 1268 1396.00</p>
            </div>
          </div>
        </div>
      </div>
      <div class="part part3">
        <div class="title">
          <img :src="logo3" class="logo" alt="">
          <span class="left">年营业额</span>
        </div>
        <div class="box">
          <van-tabs v-model="active" title-active-color="#ff0036" :line-width="0">
            <van-tab title="2019">￥1268 1396.00</van-tab>
            <van-tab title="2018">内容2</van-tab>
            <van-tab title="2017">￥1268 1396.00</van-tab>
            <van-tab title="20196">内容4</van-tab>
          </van-tabs>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Header from "Common/Header";
import { Tab, Tabs } from "vant";
export default {
  name: "order",
  components: {
    Header,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs
  },
  data() {
    return {
      logo1: require("Assets/img/logo1.png"),
      logo2: require("Assets/img/logo2.png"),
      logo3: require("Assets/img/logo3.png"),
      settled: require("Assets/img/settled.png"),
      noSettle: require("Assets/img/noSettle.png"),
      active: 0
    };
  },
  methods: {
    toZDDetail() {
      this.$router.push({ name: "zdDetail" });
    },
    toJSDetail() {
      this.$router.push({ name: "jsDetail" });
    }
  }
};
</script>

<style lang="less" scoped>
.bg {
  margin-top: 45px;
  height: 110px;
  background: #ff0036;
}
.section {
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: auto;

  .part {
    padding: 0 25px;
    .title {
      color: #000;
      font-size: 14px;
      margin-top: 20px;
      margin-bottom: 17px;
      .logo {
        width: 14px;
        margin: 0 3px 0 5px;
        vertical-align: bottom;
      }
      .toDetail {
        font-size: 12px;
        float: right;
        margin-right: 20px;
      }
    }
    .box {
      box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.2);
      .line1 {
        background: #fff;
        padding: 20px 10px;
        margin-bottom: 5px;
        text-align: center;
        .date {
          font-size: 16px;
          font-family: MicrosoftYaHei-Bold;
          color: rgba(0, 0, 0, 1);
        }
      }
    }
  }

  .part1 {
    .title {
      color: #fff;
      margin-top: 30px;
    }
    .box {
      background: #f6f6f6;
      .line1 {
        .date {
          font-weight: bold;
        }

        .money {
          float: right;
          font-size: 16px;
          font-family: MicrosoftYaHei-Bold;
          font-weight: bold;
          color: rgba(255, 0, 54, 1);
          i {
            font-size: 12px;
            font-family: MicrosoftYaHei;
            font-weight: 400;
            color: rgba(0, 0, 0, 1);
            margin-right: 5px;
          }
        }
      }
      .line2 {
        background: #fff;
        padding: 15px 10px;
        margin-bottom: 5px;
        .date {
          font-size: 14px;
          font-family: MicrosoftYaHei-Bold;
          color: rgba(0, 0, 0, 1);
        }

        .money {
          float: right;
          font-size: 14px;
          font-family: MicrosoftYaHei-Bold;
          font-weight: bold;
          color: rgba(255, 0, 54, 1);
          i {
            font-size: 12px;
            font-family: MicrosoftYaHei;
            font-weight: 400;
            color: rgba(0, 0, 0, 1);
            margin-right: 5px;
          }
        }
      }
    }
  }
  .part2 {
    .box {
      .line2 {
        height: 120px;

        display: flex;

        .left,
        .right {
          flex: 1;
          background: #fff;
          text-align: center;
          img {
            width: 47px;
            margin-top: 20px;
            margin-bottom: 20px;
          }
          p {
            font-size: 13px;
            font-family: MicrosoftYaHei-Bold;
            font-weight: bold;
            color: rgba(255, 0, 54, 1);
          }
        }
        .left {
          margin-right: 5px;
        }
      }
    }
  }
  .part3 {
    .box {
      top: 135px;
      position: relative;
      margin-bottom: 20px;
      clear: both;
      .van-tab__pane {
        height: 140px;
        line-height: 140px;
        background: #ff0036;
        color: #fff;
        font-size: 30px;
        font-family: MicrosoftYaHei-Bold;
        font-weight: bold;
        text-align: center;

        top: -140px;
        position: absolute;
      }
    }
  }
}
</style>

