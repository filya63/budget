<template lang="pug">
form.history-filters
    div {{ filter }}
    label.history-filters__item Сортировка по категории расходов: 
        select.history-filters__item-box(v-model="expenses")
            option(v-for="item in categoryExpenses" :key="item.id").history-filters__item-box-options {{ item.name }}
    label.history-filters__item Сортировка по категории доходов: 
        select.history-filters__item-box(v-model="income")
            option(v-for="item in categoryIncome" :key="item.id").history-filters__item-box-options {{ item.name }}
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
    props: ['filter'],
    setup(props):object {
        const store = useStore();

        const categoryExpenses:any = computed(():any => store.getters['settingsProfile/getCategoryExpenses']);
        const categoryIncome:any = computed(():any => store.getters['settingsProfile/getCategoryIncome']);

        const expenses = ref('');
        const income = ref('')
        return {
            categoryExpenses,
            categoryIncome,
            expenses,
            income,
        }
    }
})
</script>

<style lang="scss">
    .history-filters {
        margin: 15px 0;
        &__item {
            margin-right: 15px;
            &:last-child {
                margin-right: 0;
            }
            &-box {
            outline: none;
            cursor: pointer;
            background: none;
            padding: 5px;
            color: lightgray;
                &-option {
                    background: none;
                }
            }
        }
    }
</style>