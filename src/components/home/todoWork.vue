<template>
  <div class="todo-work">
    <block-title titleName="待办工作"></block-title>
    <div class="todo-work-content">
      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item title="待办工作" name="1">
          <div class="collapse-item-li">您好：张彬</div>
          <div class="collapse-item-li">待办工作：1</div>
          <div class="collapse-item-li">日程安排：3</div>
        </el-collapse-item>
        <el-collapse-item title="待办任务" name="2">
          <div class="collapse-item-li">您好：张彬</div>
          <div class="collapse-item-li">待办工作：1</div>
          <div class="collapse-item-li">日程安排：3</div>
        </el-collapse-item>
        <el-collapse-item title="个人邮箱" name="3">
         <div class="collapse-item-li">您好：张彬</div>
          <div class="collapse-item-li">待办工作：1</div>
          <div class="collapse-item-li">日程安排：3</div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script>
import BlockTitle from "@/components/home/blockTitle.vue";
export default {
  name: "todoWork",
  components: {
    BlockTitle
  },
  data() {
    return {
      activeNames: ["1"]
    };
  },
  methods: {
    handleChange(val) {
      console.log(val);
    }
  }
};
</script>

<style lang="less" scoped>
.todo-work {
  height: 40%;
  border: 1px solid;

  .todo-work-content {
    padding: 0px 5px;
    height: calc(~"100% - 30px");
    overflow-y: auto;

    .el-collapse-item__content {
      padding-bottom: 0px;
      .collapse-item-li {
        text-align: left;
      }
    }
  }
}
</style>
