<template lang="pug">
h2.history__title История расходов/доходов
filters
hr.history__line
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Filters from '@/components/Filters.vue';

export default defineComponent({
  components: {
    Filters
  },
})
</script>

<style lang="scss">
  .history__line {
    width: 50%;
  }
</style>