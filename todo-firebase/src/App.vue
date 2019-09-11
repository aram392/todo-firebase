<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <List></List>
  </div>
</template>

<script>
import List from './components/List.vue'
import db from './db'

export default {
  name: 'app',
  components: {
    List
  },
  data() {
    return{
      todos: []
    }
  },
  methods:{
    created(){
      db.collection("todo").get()
      .then((snapshot) => {
        console.log("documents");
        snapshot.forEach((doc) => {
          console.log(doc.id, '=>', doc.data());
          [...this.todos,doc];
        });
      })
      .catch((err) => {
        console.log('Error getting documents', err);
      });
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
