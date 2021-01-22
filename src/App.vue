<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Amplify from 'aws-amplify'
import awsconfig from './aws-exports'
import { DataStore } from '@aws-amplify/datastore';
import { User } from './models';
import Vue from 'vue'
import App from './App.vue'
Amplify.configure(awsconfig)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

 const models =  DataStore.query(User);
        console.log("models"+models);
        //this.models = models
export default {
  name: 'App',
    data() {
        return {
		models:[]
        }
    },
	mounted(){
            //this.selectGood()
    },
           methods: {
           async insert(){
           await DataStore.save(
            new User({
		"name1": "Lorem ipsum dolor sit amet",
		"age1": 1020
	})
        )
           }

}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
