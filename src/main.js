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