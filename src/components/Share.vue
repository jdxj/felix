<template>
  <el-form class="form">
    <el-form-item label="别名(remarks)">
      <el-input v-model="share.remark" />
    </el-form-item>

    <el-form-item label="地址(address)">
      <el-input v-model="share.address" />
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const share = ref({
  remark: '',
  address: '',
})
</script>

<style scoped lang="less">
.form {
  margin: auto;
  width: 35%;
}
</style>
