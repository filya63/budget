<template>
    <header class="header">
        <h1 class="header__title">Контроль личного бюджета</h1>
        <MenuApp/>
        <span class="header__balance">Остаток по счету: 0</span>
        <Auth/>
    </header>
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
    }
</style>
