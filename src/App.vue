<template>
  <VHeader/>  

  <router-view />

  <VFooter/>
</template>

<script setup>
import VHeader from '@/components/header/v-header.vue'
import VFooter from '@/components/v-footer.vue'

</script>
