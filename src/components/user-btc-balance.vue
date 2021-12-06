<template>
        <span>{{userBtcBalance}}</span>
</template>

<script>


export default {
  computed:{
      userBtcBalance(){
      return  this.$store.getters.loggedInUser.coins
      }
  }
};
</script>
