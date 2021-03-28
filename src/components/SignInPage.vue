<template lang="pug">
h2 Форма авторизации
form(autocomplete="off").registration
  label.registation-data Введите почту
    input(type="text" name="login" required).registation-data__text
    span(class="registation-data__error hide") * заполни поле верно!
  label.registation-data Введите пароль
    input(type="password" name="password" required).registation-data__text
    span(class="registation-data__error hide") * заполни поле верно!
  button.registration__btn Авторизоваться
  router-link(to="/register") Нет аккаунта? Зарегистрируй!
</template>