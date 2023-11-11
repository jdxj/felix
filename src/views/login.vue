<template>
  <div class="input">
    <h1>login</h1>
    <el-input v-model="name" placeholder="name" clearable size="large" />
    <el-input
      v-model="pass"
      type="password"
      placeholder="pass"
      clearable
      show-password
      size="large"
    />

    <el-button class="btn" type="primary" round @click="pc">登录</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const name = ref('')
const pass = ref('')
const router = useRouter()


function pc() {
  if (name.value === 'abc' && pass.value === 'def') {
    router.push({
      name: 'myHome',
    })
  } else {
    alert('invalid')
  }
}

</script>

<style scoped lang="less">
.input {
  margin: auto;
  width: 512px;
}

.btn {
  float: right;
}
</style>
