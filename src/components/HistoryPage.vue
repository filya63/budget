<template>
  <h2 class="history__title">История расходов</h2>
  <Filters/>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import Filters from '@/components/Filters.vue';

export default defineComponent({
  components: {
    Filters
  },
  setup() {

  }
})
</script>