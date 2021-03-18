<template lang="pug">
router-link(:to="url") {{ nameBtn }}
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore();
    const url = computed(():string => {
      return store.getters['auth/getAuthStatus'] ? '/history' : '/sign-in';
    });
    const nameBtn = computed(():string => {
      return store.getters['auth/getAuthStatus'] ? 'Имя профиля' : 'Вход/Регистрация';
    })
    return {
      url,
      nameBtn
    }
  }
})
</script>