<template>
  <!-- 外部图标 -->
  <div v-if="isExternal" :style="styleExternalIcon" class="svg-external-icon svg-icon" :class="className"></div>
  <!-- 内部图标 -->
  <!-- <svg v-else class="svg-icon" :class="className" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg> -->
  <svg aria-hidden="true" class="svg-icon" :class="className">
    <use :xlink:href="symbolId" :fill="color" />
  </svg>
</template>

<script setup lang="ts">
import { isExternal as external } from '@/utils/validate'

type Props = {
  icon: string
  className?: string
  prefix?: string
  color?: string
}

const props = withDefaults(defineProps<Props>(), { className: '', prefix: 'icon', color: '#fff' })

// 是否是外部图标
const isExternal = computed(() => external(props.icon))
// 外部图标样式
const styleExternalIcon = computed(() => ({
  mask: `url(${props.icon}) no-repeat 50% 50%`,
  '-webkit-mask': `url(${props.icon}) no-repeat 50% 50%`,
}))

// 内部图标
// const iconName = computed(() => `#icon-${props.icon}`)
const symbolId = computed(() => `#${props.prefix}-${props.icon}`)
</script>

<style lang="scss" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.svg-external-icon {
  background-color: currentColor;
  mask-size: cover !important;
  -webkit-mask-size: cover !important;
  display: inline-block;
}
</style>
