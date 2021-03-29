<template lang="pug">
h2 Регистрация
form(@submit.prevent="send").registration
  label.registation-data Введите почту
    input(type="text" name="email" v-model="email" required).registation-data__text
    span(class="registation-data__error hide") * заполни поле верно!
  label.registation-data Введите пароль
    input(type="password" name="password" v-model="password" required).registation-data__text
    span(class="registation-data__error hide") * заполни поле верно!
  button.registration__btn Зарегистрироваться
  router-link(to="/sign-in") Вернуться к авторизации..
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    const email = ref('');
    const password = ref('');
    const store = useStore(); // Для работы с vuex
    const router = useRouter();

    const send = () => { // Отправляем данные на сервер о регистрации
      store.dispatch('auth/registration', {
        email: email.value,
        password: password.value
      })
      .then(() => {
        email.value = '';
        password.value = '';
        router.push({name: 'Sign-in'})
      })
    };

    return {
      email,
      password,
      send
    }
  }
});
</script>

<style lang="scss">
  .registration {
    width: 50%;
    display: flex;
    flex-direction: column;
    border: 1px solid lightgray;
    padding: 15px 0;
    align-items: center;
    &__btn {
      background: none;
      border: 1px solid lightgray;
      padding: 10px;
      margin: 10px 0;
      cursor: pointer;
      color: lightgray;
      outline: none;
    }
  }
  .registation-data {
      display: flex;
      flex-direction: column;
      margin-top: 10px;
      width: 60%;
      &__error {
        color: red;
      }
      &__text {
        outline: none;
        background: none;
        border: none;
        border-bottom: 1px solid lightgray;
        color: lightgray;
        padding: 8px;
      }
      &:first-child {
        margin-top: 0;
      }
    }
    .hide {
      visibility: hidden;
    }
</style>