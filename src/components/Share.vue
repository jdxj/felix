<template>
  <el-form label-width="128px" label-position="left" class="form">
    <el-form-item label="id">
      <el-input v-model="share.id" disabled />
    </el-form-item>
<!--    todo: 添加时应禁用-->
    <el-form-item label="number">
      <el-input v-model="share.number" />
    </el-form-item>
    <el-form-item label="protocol">
      <el-input v-model="share.protocol" />
    </el-form-item>
    <el-form-item label="uid">
      <el-input v-model="share.uid" />
    </el-form-item>
    <el-form-item label="address">
      <el-input v-model="share.address" />
    </el-form-item>
    <el-form-item label="port">
      <el-input v-model="share.port" />
    </el-form-item>
    <el-form-item label="security">
      <el-input v-model="share.security" />
    </el-form-item>
    <el-form-item label="encryption">
      <el-input v-model="share.encryption" />
    </el-form-item>
    <el-form-item label="publicKey">
      <el-input v-model="share.publicKey" />
    </el-form-item>
    <el-form-item label="headerType">
      <el-input v-model="share.headerType" />
    </el-form-item>
    <el-form-item label="fingerprint">
      <el-input v-model="share.fingerprint" />
    </el-form-item>
    <el-form-item label="network">
      <el-input v-model="share.network" />
    </el-form-item>
    <el-form-item label="flow">
      <el-input v-model="share.flow" />
    </el-form-item>
    <el-form-item label="sni">
      <el-input v-model="share.sni" />
    </el-form-item>
    <el-form-item label="shortIds">
      <el-input v-model="share.shortIds" />
    </el-form-item>
    <el-form-item label="remarks">
      <el-input v-model="share.remarks" />
    </el-form-item>
    <el-form-item label="updateAt">
      <el-input v-model="share.updatedAt" disabled />
    </el-form-item>

    <el-button class="btn" type="primary" @click="submitShare">提交</el-button>
    <el-button class="btn" type="primary" @click="router.back()">返回
    </el-button>
  </el-form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useMyStore } from '@/stores'
import axios from 'axios'
import { type ResponseData } from '@/types/response'
import { URLPrefix } from '@/types/shares'

const router = useRouter()
const route = useRoute()
const store = useMyStore()
const share = ref({
  id: 0,
  number: 0,
  protocol: '',
  uid: '',
  address: '',
  port: 0,
  security: '',
  encryption: '',
  publicKey: '',
  headerType: '',
  fingerprint: '',
  network: '',
  flow: '',
  sni: '',
  shortIds: '',
  remarks: '',
  updatedAt: '',
})

const findShare = store.shares?.find((item) => {
  return route.params.id === item.id.toString()
})
if (findShare != undefined) {
  share.value = findShare
}

async function submitShare() {
  let method = 'post'
  let id = ''
  if (share.value.id != 0) {
    method = 'patch'
    id = share.value.id.toString()
  }

  const res = await axios.request<ResponseData>({
    url: URLPrefix + '/api/shares/' + id,
    method,
    headers: {
      'Content-Type': 'application/json',
      token: store.token,
    },
    data: share.value,
  })
  if (res.data.code === 0) {
    router.back()
  } else {
    alert('提交失败')
  }
}
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
