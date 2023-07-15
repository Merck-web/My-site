<template>
  <Header />
  <slot />
  <Contact />
</template>
<script setup lang="ts">
import Header from "~/components/MainPage/Header.vue";
import Contact from "~/components/MainPage/Contact.vue";
</script>