<template>
  <div>
    <div class="head-nav">
      <el-menu
        :default-active="activeIndex"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="/home">首页</el-menu-item>
        <el-menu-item index="/map">地图</el-menu-item>
        <el-menu-item index="/about">关于</el-menu-item>
      </el-menu>
    </div>
    <div class="main-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: "layout",
  data() {
    return {
      activeIndex: "/home"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      this.$router.push(key);
    }
  }
};
</script>

<style lang="less" scoped>
.head-nav {
  position: absolute;
  left: 5px;
  right: 5px;
  top: 0px;
}
.main-content {
  position: absolute;
  top: 65px;
  bottom: 0px;
  right: 5px;
  left: 5px;
}
</style>
