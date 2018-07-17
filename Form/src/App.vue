<template>
  <div id="app">
    <Header></Header>
    <Root></Root>
  </div>
</template>

<script>
import Header from './components/Header'
import Root from './components/Form/Root'

export default {
  name: 'app',
  components: {
      Header,
      Root
  }
}
</script>

<style lang="scss">
  @import "assets/styles/application";
</style>
