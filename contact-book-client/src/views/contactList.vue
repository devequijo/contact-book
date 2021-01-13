<template>
    <div class="main">
        <div @click="showCreateForm=true" class="btn">Add contact</div>
        <div class="contacts">
         
            <ul v-for="(algo, index) in contacts" :key=algo>      
                <contact :index=index :contacto=algo></contact>
                <create @hideForm="showCreateForm=false" v-show="showCreateForm"/>
                              
            </ul>        
        </div>
    </div>
</template>

<script>

import create from '@/components/create.vue'
import {mapActions,mapGetters} from 'vuex'
import contact from '../components/contact.vue'
export default {
    data(){
        return{
            showCreateForm:false
        }
    },    
    computed:mapGetters(['contacts']),
    components: {contact, create}
}
</script>

<style scoped>
    .main{
        margin-top:30px;
    }
    .btn{
        
        margin-right: 20px!important;
        margin-left:60%;
    }
    ul{
        display:flex;
        justify-content: center;

    }

</style>