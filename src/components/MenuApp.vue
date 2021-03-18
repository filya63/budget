<template lang="pug">
nav.menu
  router-link(to="/history").menu__item История
  router-link(to="/exin").menu__item Внести расходы/доходы
  router-link(to="/graph").menu__item График
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