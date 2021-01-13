<template>
    <div>
                <!-- Hide the entire modal when clicked outside the modal-container-body -->
        <div @click="hideForm()" class="modal-mask">
                <!-- Confirm the field removement -->
          <div @click.stop v-if="confirm" class='confirm'><h2>You are trying to remove 
              <span v-if="contact.customFields[remIndex].name"> the field {{contact.customFields[remIndex].name}},
                  </span><span v-else>a field</span> is that correct?</h2>
              <button style="background-color:red;" @click.prevent='removeField'>YES</button>
              <button style="background-color:green;" @click.prevent='confirm=false'>NO</button>
              </div> 
                <!-- // -->
          <div  class="modal-wrapper">
            <div @click.stop class="modal-container">
              <div  class="modal-header"> <h2>Add contact:</h2></div>

              <div class="modal-body">
                <div>
                    <!-- Recording the form state, on lazy form change -->
                    <form @change="localCommit()">
                        <div class=myInputs>
                            <label>Email:</label><br>
					        <input type="text" v-model="contact.email" class="form-control" >
                        </div>
                        <div class=myInputs>
                            <label>Phone:</label><br>
					        <input type="text" v-model="contact.phone" class="form-control" >
                        </div>
                        <div class=myInputs>
                            <label>FullName:</label><br>
					        <input type="text" v-model="contact.fullname" class="form-control" >
                        </div>
                        <div v-if="contact.customFields.length>0"><h3>Custom Fields</h3></div>
                        <div v-for="(field, index)  in contact.customFields" :key="index" class="customInputs">
                            <input style="width:47%; margin-top:10px;" type="text" v-model='field.name'  placeholder="Name" >
                            <input style="width:47%" type="text" v-model='field.value' placeholder="value" >
                            <!-- For the correct working of the watcher, remIndex must mutate all times,
                             even when the expected value is the same as the current -->
                            <button @click.prevent="mutateIndex(index)">X</button>
                        </div>
                         <div @click='saveContacts(contact)' class="btn btn-save">Save contact</div>
                          <div @click="undo()" class="btn btn-unDo">Undo</div>
                        <div @click="addField" class="btn">Add custom field</div>
                        <div class=customFields>
                                
                        </div>
                    </form>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    data(){
        return{
        contact:{
            email:'',
            phone:'',
            fullname:'',
            customFields:[],
        },
            temp:null,
            confirm:false,
            history:[],
            historyIndex:0,
            remIndex:null,
            mailRegexp:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        }
    },
    created(){
        this.history[this.historyIndex] = Object.assign({}, this.contact)
        this.historyIndex++
    },
    watch:{
        remIndex(){
            this.confirm=true 
        },
 
    },
    computed:{
        
        emailValid(){
            return  this.mailRegexp.test(this.contact.email.toLowerCase().trim())
        },
        fieldCompleted(){
            return (this.contact.phone.length && this.contact.fullname.length &&this.emailValid)
        }
    },

    methods: {
        mutateIndex(index){
            
            this.remIndex = index
        },
        undo(){
             if (this.history.length>1) {
        //Simple undo 
            //     this.contact = Object.assign({}, this.history[this.historyIndex-2] )
                
               
        //Multiple undo ============================================================
               if (this.history.length==this.historyIndex) this.history.pop()

                this.contact = Object.assign({}, {...this.history.pop()} )
                this.historyIndex--
                if (this.historyIndex==1) {                    
                    this.history[this.historyIndex] = Object.assign({}, this.contact)
                    this.historyIndex++
                }
        //-----------------------------------------------------------------------
           
             }   
        },
        ...mapActions(['saveContacts']),
        removeField(){
            this.confirm=false,
            this.contact.customFields.splice(this.remIndex, 1)
        },

        localCommit(){
            this.$store.commit('tempContact', this.contact)
            this.history[this.historyIndex] = Object.assign({}, this.contact)
            this.history[this.historyIndex].customFields = Object.assign({}, this.contact.fustomFields)
            this.historyIndex=this.history.length
        },
        addField(){
            this.localCommit()
            this.contact.customFields.push({})
        },
        hideForm(){            
            this.$emit('hideForm', )
        },
    },
    name:'create',
    props:['showModal']
}
</script>

<style scoped>

.btn{
float:right;
display: flex;
align-items: center;
justify-content: center;
margin:20px;
height:40px;
}

.btn-save{
    background-color: rgba(154, 212, 107, 0.452);
    
}

button{
    height:30px;
    background-color:#fa3062
}

.confirm {
    background-color:#ccc;
    height:100px;
    position: fixed;
    top: 0px;
    width: 100%;
}​

.btn-save:hover{
    background-color:white;
    cursor:pointer;
}


.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;

}



.modal-container {
  display:inline-block;
  width: 70%;
  text-align:left;
  overflow : scroll;
  height:400px;
  margin-top:120px;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}




input {
  width: 100%;
  display:inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  height:30px;
}


</style>

