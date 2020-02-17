<template>
  <div class="layer-control">
    <block-title titleName="图层控制"></block-title>
    <div class="layer-tree">
      <el-tree 
        :data="data" 
        :props="defaultProps" 
        icon-class="el-icon-folder-opened"
         :default-expanded-keys="[1, 2]"
        @node-click="handleNodeClick"
      >
      </el-tree>

    </div>
  </div>
</template>

<script>
  import BlockTitle from '@/components/home/blockTitle.vue'
  export default {
    name: "layerControl",
    components: {
      BlockTitle
    },
      data() {
      return {
        data: [{
          label: '基础地理数据',
          id: 1,
          children: [{
            label: '遥感影像',
            id:2,
            children: [{
              label: '南京市'
            }]
          }, {
            label: '矢量数据'
          }, {
            label: '高程影像'
          },
          {
            label: '倾斜摄影模型'
          }]
        }, {
          label: '导航轨迹数据',
          children: [{
            label: '导航轨迹数据 2-1',
            children: [{
              label: '导航轨迹数据 2-1-1'
            }]
          }, {
            label: '导航轨迹数据 2-2',
            children: [{
              label: '导航轨迹数据 2-2-1'
            }]
          }]
        }, {
          label: '多媒体数据 3',
          children: [{
            label: '多媒体数据 3-1',
            children: [{
              label: '多媒体数据 3-1-1'
            }]
          }, {
            label: '多媒体数据 3-2',
            children: [{
              label: '多媒体数据 3-2-1'
            }]
          }]
        }],
        
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },
    methods: {
      handleNodeClick(data) {
        console.log(data);
      }
    }
  }
</script>

<style lang="less" scoped>
  .layer-control {
    height: calc(~"60% - 10px");
    position: relative;
    margin-bottom: 10px;
    border: 1px solid;

    .layer-tree {
      height: calc(~"100% - 30px");
      overflow-y: auto;
    }
  }
</style>