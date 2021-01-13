<template>
  <div class="contact">
     <router-link :to="{name: 'viewcontact', params:{'index':index}}"> {{contacto.fullname}} </router-link><button @click="deleteContact(index)" class='delete'>Delete</button>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    name:'contact',
    props: ['contacto', 'index'],
    methods:mapActions(['deleteContact'])
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