<template>
  <div>
    <Header title="结算详情"></Header>
    <div class="bg"></div>
    <section class="section section2"></section>
    <section class="section">
      <div class="box">
        <x-table :cell-bordered="false" class="table">
          <thead>
            <tr>
              <th>
                <div class="tool">
                  <span style="padding-left: 5px;">结算日期</span>
                  <span class="date" @click="chooseDate(format)">{{ date }}年</span>
                </div>
              </th>
              <th>应结算</th>
              <th>未结算</th>
              <th>补加结算</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="n in 10" :key="n">
              <td>8-27 -- 6-12</td>
              <td>￥89 235.00</td>
              <td>￥89 235.00</td>
              <td>￥89 235.00</td>
            </tr>
          </tbody>
        </x-table>
      </div>
    </section>
  </div>
</template>

<script>
import Header from "Common/Header";
import { XTable } from "vux";
import { formatDate } from "@/libs/formatDate";
export default {
  name: "zdDetail",
  components: {
    Header,
    XTable
  },
  data() {
    return {
      date: formatDate(new Date(), this.format || "YYYY"),
      format: "YYYY",
      value: ""
    };
  },
  methods: {
    chooseDate(format) {
      const vm = this;
      this.$vux.datetime.show({
        cancelText: "取消",
        confirmText: "确定",
        format: format,
        value: "",
        onConfirm(val) {
          vm.date = val;
        },
        onShow() {
          // console.log("plugin show");
        },
        onHide() {
          // console.log("plugin hide");
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.bg {
  width: 100%;
  height: 110px;
  background: #ff0036;
  position: absolute;
  top: 45px;
}
.section {
  position: absolute;
  top: 45px;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: auto;
  text-align: center;
  padding: 0 8px;

  .box {
    background: #fff;
    border-radius: 10px;
    box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.2);
    .table {
      margin-top: 20px;

      .tool {
        background: #fff;
        line-height: 18px;
        border-radius: 5px;
        text-align: left;

        .date {
          background: rgba(247, 247, 247, 1);
          border-radius: 2px;
          padding: 2px 15px 2px 5px;
          vertical-align: top;
          font-size: 12px;
          position: relative;
        }
        .date:after {
          content: " ";
          display: inline-block;
          height: 6px;
          width: 6px;
          border-width: 1px 1px 0 0;
          border-color: #000;
          border-style: solid;
          -webkit-transform: rotate(135deg);
          transform: rotate(135deg);
          position: relative;
          top: -2px;
          position: absolute;
          top: 50%;
          margin-top: -4px;
          right: 4px;
        }
        .total {
          float: right;
          padding-right: 5px;
          font-size: 12px;
        }
      }
    }
  }
}
.section2 {
  background: #fff;
  top: 155px;
}
</style>

