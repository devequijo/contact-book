import { createStore } from 'vuex'

export default createStore({
  state: {
    history:[],
    contacts:[
      {fullname:'Bob', email:'burger@king.onion', customFields:[{name:'BigKing', value:'2x7$'}]},
      {fullname:'foo', email:'bar@gnome.kde', customFields:[{name:'Movie', value:'Moscow - cassiopeia'}]},
      {fullname:'bartolo', email:'bartolo777@gmail.com', customFields:[{name:'Olon', value:'Jhonson'}]}
  ],
},
// no direct mutations, 
  mutations: {
    deleteContact(state, index){
      state.contacts.splice(index, 1)
    },
    addContacts(state, contacts){
      state.contacts.push(contacts)
      console.log(contacts)
    },
  },
// somme async stuff to work with the server...
  actions: {
    saveContacts({commit}, contacts){
      commit('addContacts', contacts)    
    },
    deleteContact({commit}, index){
      commit('deleteContact', index)
    }  
  },
  getters:{
    contacts(state) {return state.contacts}
  },
})
