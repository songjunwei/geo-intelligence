<template>
  <div>
    <!-- <head-nav></head-nav> -->
    <div class="left-menu">
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="vertical"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <router-link to="/index/home" :key="1">
          <el-menu-item index="1">首页</el-menu-item>
        </router-link>
        <router-link to="/index/map" :key="2">
          <el-menu-item index="2">地图</el-menu-item>
        </router-link>
         <router-link to="/index/about" :key="3">
          <el-menu-item index="3">关于</el-menu-item>
        </router-link>
      </el-menu>
    </div>

    <router-view class="right-content"></router-view
    ><!--页面渲染入口-->
  </div>
</template>

<script>
// import HeadNav from "./headNav.vue";

export default {
  name: "layout",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  // components: {
  //   HeadNav
  // },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="less" scoped>
.el-menu-demo {
  height: 100%;
}
.left-menu {
  position: absolute;
  top: 0px;
  left: 0px;
  bottom: 0px;
  width: 180px;
}
.right-content {
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 180px;
  right: 0px;
}
</style>
