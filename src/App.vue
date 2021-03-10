<template>
  <HeaderApp/>
  <main>
    <router-view></router-view>
  </main>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import HeaderApp from '@/components/HeaderApp.vue';

export default defineComponent({
  components: {
    HeaderApp
    }
});
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  color: black;
}
a {
  text-decoration: none;
}
body {
  background: #2c3e50;
}
</style>
