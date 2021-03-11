<template>
  <router-link :to="url">{{ nameBtn }}</router-link>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { mapGetters } from 'vuex';

export default defineComponent({
  setup() {
    let getAuthStatus = mapGetters('auth', ['getAuthStatus']);
    let url = computed(():string => {
      return getAuthStatus ? '/history' : '/sign-in';
    });
    let nameBtn = computed(():string => {
      return getAuthStatus ? 'Имя профиля' : 'Вход/Регистрация';
    })
    return {
      url,
      nameBtn
    }
  }
})
</script>