<template>
  <div id="app">
    <transition :name="transitionName" mode="out-in">
      <router-view class="child-view" />
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      transitionName: ""
    };
  },
  watch: {
    $route(to, from) {
      const toDepth = to.path.split("/").length;
      const fromDepth = from.path.split("/").length;
      this.transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
    }
  }
};
</script>

<style lang="less">
@import "./assets/style/reset.css";
@import "./assets/style/resetVux.less";
@import "./assets/style/resetVant.less";
.child-view {
  position: absolute;
  width: 100%;
  height: 100%;
  transition: all 0.3s linear;
}
.slide-left-enter {
  opacity: 0;
  -webkit-transform: translate(0%, 0);
  transform: translate(0%, 0);
}
.slide-left-leave-active {
  opacity: 0;
  -webkit-transform: translate(-100%, 0);
  transform: translate(-100%, 0);
}
.slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(0%, 0);
  transform: translate(0%, 0);
}

.slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(100%, 0);
  transform: translate(100%, 0);
}
</style>

