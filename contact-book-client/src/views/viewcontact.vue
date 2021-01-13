<template><div>

<div class="card">
  <img src="/assets/placeholder.jpg" alt="John" style="width:10%">
  <h1>{{contact.fullname}}</h1>
  <p class="email">{{contact.email}}</p>
  <p>{{contact.phone}}</p>
  <div v-for="field in contact.customFields" :key="field">
    <div><strong>{{field.name}}:</strong> {{field.value}} </div>
  </div>
  <p><router-link to="/" >Back to the contactlist</router-link></p>
</div>
          </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    data(){return{
        contact:null
    }},
    created(){
        this.contact = this.contacts[this.$route.params.index]
         },
    name:'viewcontact',
    props: ['index'],
    computed:mapGetters(['contacts'])
}
</script>

<style>

</style>