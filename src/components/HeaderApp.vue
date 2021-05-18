<template lang="pug">
header.header
    h1.header__title Личная бухгалтерия
    menu-app
    span.header__balance Остаток по счету: 0
    auth
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MenuApp from './MenuApp.vue';
import Auth from './Auth.vue';

export default defineComponent({
  components: {
    MenuApp,
    Auth
    }
});
</script>

<style lang="scss">
    .header {
        height: 50px;
        background: #ffffff;
        display: flex;
        justify-content: space-around;
        align-items: center;
        a {
            color: black;
        }
    }
</style>
