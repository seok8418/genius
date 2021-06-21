<template>
  <div>
    <Header></Header>
    <GHGame></GHGame>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
import GHGame from './GHGame.vue'

export default {
  components: {
    'Header': Header,
    'Footer': Footer,
    'GHGame': GHGame
  }
}
</script>
<style>
  body {
    text-align: center;
    background-color: #F6F6F8;
  }
  input {
    border-style: groove;
    width: 200px;
  }
  button {
    border-style: groove;
  }
  .shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03)
  }
</style>
