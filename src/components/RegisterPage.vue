<template lang="pug">
h2 Регистрация
form(autocomplete="off").registration
  label.registation-data Введите логин
    input(type="text" name="login" required).registation-data__text
    span(class="registation-data__error hide") * заполни поле верно!
  label.registation-data Введите пароль
    input(type="password" name="password" required).registation-data__text
    span(class="registation-data__error hide") * заполни поле верно!
  label.registation-data Введите пароль повторно
    input(type="password" name="password" required).registation-data__text
    span(class="registation-data__error hide") * заполни поле верно!
  button.registration__btn Зарегистрироваться
  router-link(to="/sign-in") Вернуться к авторизации..
</template>

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