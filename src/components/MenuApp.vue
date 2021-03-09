<template>
  <nav class="menu">
    <router-link class="menu__item" to="/history">История</router-link>
    <router-link class="menu__item" to="/exin">Внести расходы/доходы</router-link>
    <router-link class="menu__item" to="/graph">График</router-link>
  </nav>
</template>

<style lang="scss">
    .menu {
        &__item {
            margin-left: 16px;
            padding-bottom: 8px;
        }
    }
    .active {
        border-bottom: 1px solid black;
    }
</style>