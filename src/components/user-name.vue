<template>
        <span>{{userNameToShow}}</span>
</template>

<script>


export default {
  props:["user"],
  computed:{
      userNameToShow(){
          const firstName =  this.user.firstName
          return firstName 
      }
  }
};
</script>
