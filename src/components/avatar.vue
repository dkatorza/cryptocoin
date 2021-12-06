<template>
  <div>
      <div class="greeting-avatar-container">
        <div class="greeting-avatar">{{avatarToShow}}</div>
      </div>
  </div>
</template>

<script>


export default {
  props:["avatar"],
  computed:{
      avatarToShow(){
          const firstName =  this.avatar.firstName.substring(0,1)
          const lastName = this.avatar.lastName.substring(0,1)
          return firstName + lastName
      }
  }
};
</script>
