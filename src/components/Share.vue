<template>
  <el-form label-width="128px" label-position="left" class="form">
    <el-form-item label="id">
      <el-input v-model="share.id" disabled />
    </el-form-item>

    <el-form-item label="别名(remarks)">
      <el-input v-model="share.remark" />
    </el-form-item>

    <el-form-item label="地址(address)">
      <el-input v-model="share.address" />
    </el-form-item>

    <el-button class="btn" type="primary" @click="router.back()">返回
    </el-button>
  </el-form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

console.log(route.params.id)

const share = ref({
  id: route.params.id,
  remark: '',
  address: '',
})
</script>

<style scoped lang="less">
.form {
  margin: auto;
  width: 35%;
}

.btn {
  float: right;
}
</style>
