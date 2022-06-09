import { defineStore } from 'pinia'

const useCounterStore = defineStore('counter', () => {
  // states
  const count = ref<number>(0)

  // actions
  function inc() {
    count.value++
  }

  function dec() {
    count.value--
  }

  return { count, inc, dec }
})

// const useCounterStore = defineStore({
//   id: 'counter',
//   state: () => ({
//     count: 0,
//   }),
//   actions: {
//     inc() {
//       this.count++
//     },
//     dec() {
//       this.count--
//     },
//   },
// })

export default useCounterStore
