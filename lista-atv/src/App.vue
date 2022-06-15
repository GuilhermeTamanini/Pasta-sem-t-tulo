<script setup lang="ts">
import { RouterView } from "vue-router";
import HeaderView from "./components/HeaderView.vue";
</script>
<template>
  <HeaderView></HeaderView>
  <main>
    <RouterView />
  </main>
</template>
<style>
span {
  padding-left: 30px;
  font-size: 25px;
}
a {
  text-decoration: none;
  color:black;
}
header {
  text-align: center;
}
main{
  text-align: center;
}
</style>
