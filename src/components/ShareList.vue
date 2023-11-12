<template>
  <div>
    <el-row v-for="(item, index) in list" :key="item.id" class="row">
      <el-col :span="4">{{ index + 1 }}</el-col>

      <el-col :span="5">
        <el-text type="primary">{{ item.remark }}</el-text>
      </el-col>

      <el-col :span="5">
        <el-text>{{ item.address }}</el-text>
      </el-col>

      <el-col :span="5">
        <el-icon>
          <Edit />
        </el-icon>
      </el-col>

      <el-col :span="5">
        <el-icon>
          <Delete />
        </el-icon>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { Delete, Edit } from '@element-plus/icons-vue'
import { ref } from 'vue'

const list = ref([
  {
    id: 1,
    remark: 'zoe',
    address: 'https://e.com'
  },
  {
    id: 2,
    remark: 'tina',
    address: 'https://a.com'
  }
])
</script>

<style scoped lang="less">
.row {
  margin: auto;
  width: 35%;
}
</style>
