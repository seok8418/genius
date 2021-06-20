<template>
  <div>
    <Header></Header>
	<GH_Game></GH_Game>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
import GH_Game from './GH_Game.vue'

export default {  
  components: {
    'Header':Header,
    'Footer': Footer,
	'GH_Game': GH_Game
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
