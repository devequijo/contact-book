import { createStore } from 'vuex'

export default createStore({
  state: {
    history:[],
    contacts:[
      {fullname:'alguin', email:'test@test.test'},
      {fullname:'a quien', email:'lol@lol.lol'},
      {fullname:'conozco', email:'nose@quien.es'}
  ],
    controls: {
      showModal:false
    }
  },
  mutations: {
 
    
    tempContact(state, tempContact){
      state.history.push(tempContact)
    },
    addContacts(state, contacts){
      state.contacts.push(contacts)
      console.log(contacts)
    },

  },
  actions: {
    
    saveContacts({commit}, contacts){
      commit('addContacts', contacts)
     
    }
      
  },
  getters:{

    contacts(state) {return state.contacts}
  },
  modules: {
  }
})
