<template>
  <div class="clearAllContainer">
    <span class="clearAllBtn" @click="button">Button</span>
  </div>
</template>

<script>
export default {
  methods: {
    button () {
      console.log('test')
      // this.$store.commit('clearAll');
      // this.$store.dispatch('clearAll',5000);
    }
  }
}
</script>

<style scoped>
  .clearAllContainer {
    width: 8.5rem;
    height: 50px;
    line-height: 50px;
    background-color: white;
    border-radius: 5px;
    margin: 0 auto;
  }
  .clearAllBtn {
    color: #e20303;
    display: block;
  }
</style>
