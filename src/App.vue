<template>
  <div id="app">
    <div class="container">
    <form class="form-inline" v-on:submit.prevent="addUser" method="post">
    <div class="form-group">
      <label class="control-label col-sm-2" for="name">Name:</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" id="name" placeholder="Enter Name" v-model="form.name" required>
      </div>
    </div>
    <div class="form-group">
      <label class="control-label col-sm-2" for="pwd">Location:</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" id="location" placeholder="Enter Location" name="location" v-model="form.location" required>
      </div>
    </div>
    <div class="form-group">
      <div class="col-sm-offset-2 col-sm-10">
        <button type="submit" class="btn btn-success">Submit</button>
      </div>
    </div>
  </form>
  <br><br><br>
  <h1>List of Users</h1>
  <table class="table-striped">
    <thead>
      <th>ID</th>
      <th>Name</th>
      <th>Location</th>
      <th>Actions</th>
    </thead>
    <tbody>
      <tr v-for="(item, key) in users">
        <td>{{item.id}}</td>
        <td>{{item.name}}</td>
        <td>{{item.location}}</td>
        <td><button type="button" @click="remove(item)" class="btn btn-danger">Delete</button></td>
      </tr>
    </tbody>
  </table>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import './assets/css/bootstrap.css'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      form: { id: '', name: '', location: ''}
    }
  },
  methods: {
    login () {
      console.log(this.form);
    },
    addUser () {
      this.$store.dispatch('ADD_USER', this.form)
      this.form =  { id: '', name: '', location: ''}
    },
    remove (user) {
      console.log(user);
      this.$store.dispatch('DELETE_USER', user)
    }
  },
  created: function () {
  },
  computed: {
    ...mapGetters({users: 'all_users'})
  }
}
</script>

<style>
table {
    width: 50%;
    margin-left: auto;
    margin-right: auto;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
