<template>
  <AuthComponent :isAuth="false"/>
  <hr>
  <UserListComponent />
  <hr>
  <MortgageCalculatorComponent />
</template>

<script>
import AuthComponent from './components/AuthComponent.vue';
import MortgageCalculatorComponent from './components/MortgageCalculatorComponent.vue';
import UserListComponent from './components/UserListComponent.vue';

export default {
  components: {
    AuthComponent,
    UserListComponent,
    MortgageCalculatorComponent
}
}
</script>

<style lang="scss">
hr {
  margin-bottom: 100px;
}
</style>
