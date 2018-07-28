<template lang="pug">
  .container
    h1 Pug
    h2 The Best Templating Engine

    - const fruits = ['apple', 'mango', 'grape']
    select
      each fruit in fruits
        option= fruit

    - const numFriends = 10
    case numFriends
      when 0
        p Pug has no friends
      when 1
        p Pug has a friend
      default
        p Pug has #{numFriends} friends
</template>

<style lang="sass" scoped>
</style>
