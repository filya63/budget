<template lang="pug">
form.history-filters
    label.history-filters__item Сортировка по категории расходов:
        select.history-filters__item-box
            option(v-for="item in categoryExpenses" :key="item.id").history-filters__item-box-options {{ item.name }}
    label.history-filters__item Сортировка по категории доходов:
    select.history-filters__item-box
        option(v-for="item in categoryIncome" :key="item.id").history-filters__item-box-options {{ item.name }}
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
    setup():object {
        const store = useStore();
        const categoryExpenses:any = computed(():any => store.getters['settingsProfile/getCategoryExpenses']);
        const categoryIncome:any = computed(():any => store.getters['settingsProfile/getCategoryIncome']);
        return {
            categoryExpenses,
            categoryIncome
        }
    }
})
</script>

<style lang="scss">
    .history-filters__item-box {
        outline: none;
        cursor: pointer;
        background: none;
        padding: 5px;
        color: lightgray;
        &-option {
            background: none;
        }
    }
</style>