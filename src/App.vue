<template lang="pug">

  #app
    router-view

</template>

<script>

export default {
  name: 'App'
}

</script>

<style lang="sass">

=smoothing($property)
  -webkit-font-smoothing: $property
  -moz-osx-font-smoothing: $property

#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  +smoothing(antialiased)
  text-align: center
  color: #2c3e50
  margin-top: 60px

</style>
