<template>
  <h2>Форма авторизации</h2>
  <form autocomplete="off" class="registration">
    <label class="registation-data">
      Введите логин
      <input type="text" name="login" class="registation-data__text" required>
      <span class="registation-data__error hide">* заполни поле верно!</span>
    </label>
    <label class="registation-data">
      Введите пароль
      <input type="password" name="password" class="registation-data__text" required>
      <span class="registation-data__error hide">* заполни поле верно!</span>
    </label>
    <button class="registration__btn">Авторизоваться</button>
    <router-link to="/register">Нет аккаунта? Зарегистрируй!</router-link>
  </form>
</template>