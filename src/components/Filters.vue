<template>
    <form class="history-filters">
        <label class="history-filters__item">
        Сортировка по категории расходов:
            <select class="history-filters__item-box">
                <option class="history-filters__item-box-options" v-for="item in categoryExpenses" :key="item.id">{{ item.name }}</option>
            </select>
        </label>
        <label>
        Сортировка по категории доходов:
        <select class="history-filters__item-box">
            <option class="history-filters__item-box-options" v-for="item in categoryIncome" :key="item.id">{{ item.name }}</option>
        </select>
        </label>
    </form>
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