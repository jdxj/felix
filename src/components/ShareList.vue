<template>
  <div>
    <el-row v-for="(item, index) in list" :key="item.id" class="row">
      <el-col :span="4">{{ index + 1 }}</el-col>

      <el-col :span="5">
        <el-text type="primary">{{ item.remarks }}</el-text>
      </el-col>

      <el-col :span="5">
        <el-text>{{ item.address }}</el-text>
      </el-col>

      <el-col :span="5">
        <el-icon>
          <Edit @click="goToShare(item.id)" />
        </el-icon>
      </el-col>

      <el-col :span="5">
        <el-icon>
          <Delete />
        </el-icon>
      </el-col>
    </el-row>
    <div class="row">
      <el-button type="primary" class="btn" @click="goToShare(0)">添加
      </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Delete, Edit } from '@element-plus/icons-vue'
import { onMounted, ref } from 'vue'
import { useMyStore } from '@/stores'
import axios from 'axios'
import { useRouter } from 'vue-router'
import { type ResponseData } from '@/types/response'
import { type Share, type Shares } from '@/types/shares'
import { URLPrefix } from '@/types/shares'

const list = ref<Share[]>()

onMounted(async () => {
  const store = useMyStore()
  const res = await axios.get<ResponseData<Shares>>(
    URLPrefix + '/api/shares',
    {
      headers: {
        token: store.token,
      },
    },
  )
  list.value = res.data.data.shares
  store.shares = res.data.data.shares
})

const router = useRouter()

function goToShare(id: number) {
  router.push({
    name: 'shares',
    params: {
      id: id,
    },
  })
}
</script>

<style scoped lang="less">
.row {
  margin: auto;
  width: 35%;
}

.btn {
  float: right;
}
</style>
