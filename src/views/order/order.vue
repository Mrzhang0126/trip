<template>
  <div class="order">
    <h2>order</h2>
    <button @click="btnClick">+1</button>
  </div>
</template>

<script setup>
import useTestStore from '@/stores/modules/test';
const testStore = useTestStore()

const btnClick = () => {
  testStore.changeNumAction(2)
}

</script>

<style lang="less" scoped>

</style>
