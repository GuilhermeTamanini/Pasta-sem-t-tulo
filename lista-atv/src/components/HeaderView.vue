<script setup>
import { RouterLink, } from "vue-router";
</script>

<template>
<header>
    <span><RouterLink to="/">Home</RouterLink></span>
    <span>|</span>
    <span><RouterLink to="/materias">Materias</RouterLink></span>
    <span>|</span>
    <span><RouterLink to="/aulas">Aulas</RouterLink></span>
  </header>
</template>
