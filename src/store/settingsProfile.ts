export default {
    namespaced: true,
    state: {
        categoryExpenses: [ // Категория расходов
            { name: 'Такси', id: 1 },
            { name: 'Питание', id: 2 },
            { name: 'Аптеки', id: 3 }
        ],
        categoryIncome: [ // Категорию доходов
            { name: 'Заработная плата', id: 1 },
            { name: 'Наставничество', id: 2 }
        ]
    },
    mutations: {
    },
    actions: {
    },
    getters: {
        getCategoryExpenses: (state: any) => {
            return state.categoryExpenses;
        },
        getCategoryIncome: (state: any) => {
            return state.categoryIncome;
        }
    }
  }