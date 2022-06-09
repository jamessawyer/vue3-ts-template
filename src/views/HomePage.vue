<template>
  <h1>Home Page {{ count }}</h1>
  <el-button type="primary" @click="inc">+1</el-button>
  <el-button type="primary" @click="dec">-1</el-button>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import useCounterStore from '@/stores/counter'

const counterStore = useCounterStore()
// storeToRefs 只能解构出 state, getters, 插件添加的state属性
// 方法(actions)和非响应式数据完全忽略， 因此下面写法是错误的
// const { count, inc, dec } = storeToRefs(counterStore)
const { count } = storeToRefs(counterStore)
const { inc, dec } = counterStore
</script>

<style></style>
