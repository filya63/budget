import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDhoyyMUnReE0Mej8TeAV7oRUtGaREtyxE",
    authDomain: "budget-7780c.firebaseapp.com",
    projectId: "budget-7780c",
    storageBucket: "budget-7780c.appspot.com",
    messagingSenderId: "419599037126",
    appId: "1:419599037126:web:6a5cdaaf893d3fef4eddc7",
    measurementId: "G-DFEL9CFF19"
};

firebase.initializeApp(firebaseConfig)
createApp(App).use(store).use(router).mount('#app')