<template lang="pug">
  .container
    h1 Pug
    // <h2> The Best Templating Engine </h2>
    h2 The Best Templating Engine

    - const h3Title = 'We Can Use Variables Too!'
    h3= h3Title
    h3 We Can use it directly

    - const fruits = ['apple', 'grape', 'mango', 'pineapple']

    ul
      each fruit in fruits
        li= fruit

    // ul
    //   li Item
    //   li Item
    //   li Item
    // - for (let i = 0; i < 5; i++) {
    //     p= i
    // - }
    // - let i = 0
    // - while (i < 5) {
    //     p= i
    //     - i++;
    // - }

    div(
      class=[
        'card',
        'card--float'
        ]
      id="visting-card"
      style={
        background: 'blue',
        color: 'white',
        border: '5px solid #eee50',
        width: '10rem',
        margin: '0 auto',
        boxShadow: '0 .5rem 2rem #44444440'
      }
      data-json=`
      {
        "name": "Diptajit",
        "job": "Gamer"
      }
      `
    )
      p.card__header Diptajit Basak
      p.card__body.card__body--graphics I am a Gamer
      p(
        class=['card__footer']
      ) Fot
      a(
        href='https://example.com'
        style={
          color: 'white',
          textDecoration: 'none'
        }
      ) My Website

    - const url = 'https://via.placeholder.com/350x150'
    img(
      src=url
    )

    - const numFriends = 10
    case numFriends
      when 0
        p No Friends
      when 1
        p One Friend
      default
        p I have #{numFriends} friends

    - const active = false
    input(
      type='text'
      disabled=active
    )

    - const attributes = {class: 'card', id: 'greeting-card', dataVar: 'Diptajit a gamer'}

    div&attributes(attributes)
      p Hello

</template>

<style lang="sass" scoped>
</style>
