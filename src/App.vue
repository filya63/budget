<template>
  <HeaderApp/>
  <main class="content">
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
}
a {
  text-decoration: none;
}
body {
  background: #2c3e50;
  min-height: 100vh;
}
.content {
  color: lightgray;
  min-height: calc(100vh - 50px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  a {
    color: lightgray;
  }
}
</style>
