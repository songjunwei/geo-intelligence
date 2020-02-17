<template>
  <div class="system-notcie">
    <block-title titleName="系统公告"></block-title>
    <div class="system-notcie-content">
      <div
        v-for="(item, index) in noticeContent"
        :key="index"
        class="notcie-content-item"
      >
        <div class="content-item-title" :title="item.title">{{ item.title }}</div>
        <div class="content-item-data">{{ item.date }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import BlockTitle from "@/components/home/blockTitle.vue";
export default {
  name: "systemNotice",
  components: {
    BlockTitle
  },
  data() {
    return {
      noticeContent: [
        {
          title: "南京市xxxx数据服务上线通知",
          date: "01-01"
        },
        {
          title: "杭州市xxxx数据服务上线通知",
          date: "01-08"
        },
        {
          title: "南京市xxxx数据服务上线通知",
          date: "01-01"
        },
        {
          title: "杭州市xxxx数据服务上线通知",
          date: "01-08"
        },
        {
          title: "南京市xxxx数据服务上线通知",
          date: "01-01"
        },
        {
          title: "杭州市xxxx数据服务上线通知",
          date: "01-08"
        },
         {
          title: "杭州市xxxx数据服务上线通知",
          date: "01-08"
        },
         {
          title: "杭州市xxxx数据服务上线通知",
          date: "01-08"
        },
         {
          title: "杭州市xxxx数据服务上线通知",
          date: "01-08"
        },
         {
          title: "杭州市xxxx数据服务上线通知",
          date: "01-08"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.system-notcie {
  height: calc(~"60% - 10px");
  margin-top: 10px;
  border: 1px solid;
  .system-notcie-content {
    height: calc(~"100% - 30px");
    overflow-y: auto;
    .notcie-content-item {
      display: flex;
      padding: 10px;
      .content-item-title {
        width: 70%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .content-item-data {
        width: 30%;
      }
    }
  }
}
</style>
