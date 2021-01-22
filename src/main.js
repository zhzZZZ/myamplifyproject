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
methods: {
  async createUser() {
        await DataStore.save(
            new User({
		"name1": "Lorem ipsum dolor sit amet",
		"age1": 1020
	})
        );
Copy
  }
}