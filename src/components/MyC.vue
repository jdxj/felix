<template>
  <p class="msg">{{ msg }}</p>
  <button @click="updateMsg">修改msg</button>
</template>

<script setup lang="ts">
import { watch } from 'vue'
import { useMyStore } from '@/stores'
import { useAttrs } from 'vue'

const msg = ref('Hello World!')
defineExpose({
  msg,
})

const attrs = useAttrs()

defineProps(['haha'])
const emit = defineEmits(['update-name'])

emit('update-name', 'Tom')

const res = await fetch(`https://example.com/api/foo`)
const json = await res.json()
console.log(json)

const userInfo = reactive({
  name: 'Petter',
  age: 18,
})
setTimeout(() => {
  userInfo.name = 'Tom'
}, 2000)

watch(userInfo, () => {
  console.log('userInfo', userInfo.name)
})
watch(
  // 数据源，getter 形式
  () => userInfo.name,
  // 回调函数 callback
  (newValue, oldValue) => {
    console.log('只侦听 name 的变化 ', userInfo.name)
    console.log('打印变化前后的值', { oldValue, newValue })
  },
)

// 这一次在这里可以会触发 watch 的回调了
const message = ref<string>('')

// 2s后改变数据
setTimeout(() => {
  // 这一次，这里是第二次触发 watch 的回调，不再是第一次
  message.value = 'Hello World!'
}, 2000)

watch(
  message,
  () => {
    console.log('触发侦听', message.value)
  },
  // 设置 immediate 选项
  {
    immediate: true,
  },
)

function updateMsg() {
  msg.value = 'Hi World!'
}

console.log(1)

onBeforeMount(() => {
  console.log(2)
})

onMounted(() => {
  console.log(3)
})

console.log(4)

const store = useMyStore()
console.log(store.message)
</script>

<style scoped lang="less">
.msg {
  font-size: 100px;
}
</style>
