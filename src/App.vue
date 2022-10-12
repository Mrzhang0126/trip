<template>
  <div class="app">
    <!-- name属性 -->
    <router-view v-slot="props">
      <keep-alive include="home">
        <component :is="props.Component"></component>
      </keep-alive>
    </router-view>
    <tab-bar v-show="!route.meta.hideTabBar"/>
    <loading/>
    <!-- <Bpp name="abc" :age="18"/> -->
  </div>
</template>

<script setup>

import TabBar from "@/components/tab-bar/tab-bar.vue"
import Loading from "@/components/loading/loading.vue"
import { useRoute } from "vue-router";
import Bpp from "./Bpp";

const route = useRoute()

</script>

<style scoped>

</style>
