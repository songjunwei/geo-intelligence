<template>
  <div class="geo-class-chart">
    <block-title titleName="地理数据分类"></block-title>
    <div id="class-chart-content"></div>
  </div>
</template>

<script>
import BlockTitle from "@/components/home/blockTitle.vue";
import echarts from "echarts";
//import echartsTheme from "cps/echarts/theme/westeros.json";

export default {
  name: "geoClassChart",
  components: {
    BlockTitle
  },
  data() {
    return {
      myChart: null
    };
  },

  mounted() {
    this.loadChart();
  },
  beforeDestroy() {
    if (!this.myChart) {
      return;
    }
    this.myChart.dispose();
    this.myChart = null;
  },
  methods: {
    loadChart() {
      this.$nextTick(() => {
        //echarts.registerTheme("westeros", echartsTheme);
        this.myChart = echarts.init(
          document.getElementById("class-chart-content"),
          "westeros"
        );
        this.myChart.setOption(this.initOption(this.type));
      });
    },
    initOption() {
      const option = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          left: "center",
          top: "bottom",
          data: [
            "数据1",
            "数据2",
            "数据3",
            "数据4",
            "数据5",
            "数据6"
          ]
        },
        // toolbox: {
        //   show: true,
        //   feature: {
        //     mark: { show: true },
        //     dataView: { show: true, readOnly: false },
        //     magicType: {
        //       show: true,
        //       type: ["pie", "funnel"]
        //     },
        //     restore: { show: true },
        //     saveAsImage: { show: true }
        //   }
        // },
        series: [
          {
            name: "数据占比",
            type: "pie",
            radius: [20, 80],
            bottom: 50,
            center: ["50%", "50%"],
            roseType: "radius",
            label: {
              show: false
            },
            emphasis: {
              label: {
                show: true
              }
            },
            data: [
              { value: 15, name: "数据1" },
              { value: 25, name: "数据2" },
              { value: 20, name: "数据3" },
              { value: 10, name: "数据4" },
              { value: 20, name: "数据5" },
              { value: 10, name: "数据6" }
            ]
          }
        ]
      };
      return option;
    }
  }
};
</script>

<style lang="less" scoped>
.geo-class-chart {
  height: 40%;
  border: 1px solid;
  #class-chart-content {
    height: calc(~"100% - 30px");
  }
}
</style>
