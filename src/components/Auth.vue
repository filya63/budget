<template>
  <router-link to="/history" v-if="isAuth">Твоё имя</router-link>
  <router-link to="/sign-in" v-else>Авторизация/Регистрация</router-link>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';

export default defineComponent({
  setup() {
    const isAuth:any = ref(false);
    // const url = computed(():String => {
    //   return isAuth ? '/history' : '/exin'
    // });
  }
})
</script>