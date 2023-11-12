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

    <el-button class="btn" type="primary" round @click="login">登录</el-button>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useMyStore } from '@/stores'

const router = useRouter()
const store = useMyStore()

const name = ref('')
const pass = ref('')


async function login() {
  const res = await axios.get('http://localhost:8080/token', {
    params: {
      name: name.value,
      pass: pass.value,
    },
  })
  if (res.data.code != 0) {
    alert('登陆失败')
    return
  }

  store.token = res.data.data.token
  await router.push({
    name: 'myHome',
  })
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
