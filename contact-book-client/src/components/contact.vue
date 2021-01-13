<template>



  <div class="contact">
     <router-link to=""> {{contacto.fullname}} </router-link><button class='delete'>Delete</button>
  </div>
</template>

<script>

export default {
    name:'contact',
    props: ['contacto']
}
</script>

<style scoped>

button{
    position:absolute;
    right:10%;

}

.contact{
    cursor:pointer;
    font-size:medium;
    display:flex;
    justify-content:initial;
    width: 80%;
    padding:1rem;
    border: 1px solid #50964e;
    border-radius: 20px;
}.contact:hover{font-size:larger;
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
}

</style>