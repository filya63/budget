<template>
  <h2>Регистрация</h2>
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
    <label class="registation-data">
      Повторите пароль
      <input type="password" name="login" class="registation-data__text" required>
      <span class="registation-data__error hide">* заполни поле верно!</span>
    </label>
    <button class="registration__btn">Зарегистрироваться</button>
    <router-link to="/sign-in">Вернуться к авторизации..</router-link>
  </form>
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