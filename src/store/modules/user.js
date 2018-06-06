import Vue from 'vue'
const user = {
//   namespaced: true,
  state: {
    token: '',
    status: false,
    users: [
      {'id': 1234, 'name': 'John', 'location': 'USA'},
      {'id': 1235, 'name': 'Mark', 'location':'JAPAN'}
    ]
  },
  getters: {
    loading: state => state.loading,
    disable: state => state.disable,
    all_users: state => state.users
  },
  actions: {
    ADD_USER: (state, user) => {
      state.commit('ADD_USER', user)
    },
    DELETE_USER: (state, user) => {
      state.commit('DELETE_USER', user)
    },
    LOADING: (state, flag) => {
      state.commit('LOADING', flag)
    },
    BTN_DISABLE: (state, flag) => {
      state.commit('BTN_DISABLE', flag)
    }
  },
  mutations: {
    ADD_USER: (state, user) => {
      if (state.users.length > 0) {
        user.id = (state.users[state.users.length-1].id) + 1
      } else {
        user.id =  1234
      }

      state.users.push(user)
      Vue.toasted.show('User Added successfully.', {theme: 'bubble', position: 'top-right', duration: 5000})
    },
    DELETE_USER: (state, user) => {
      let id = user.id
      state.users = state.users.filter(function( obj ) {
        console.log(user);
        return obj.id !== id;
      });
      Vue.toasted.show('User Deleted.', {theme: 'bubble', position: 'top-right', duration: 5000})
    }
  }
}
export default user
