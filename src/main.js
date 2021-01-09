import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus';
import firebase from 'firebase'
import 'element-plus/lib/theme-chalk/index.css';



const firebaseConfig = {
    apiKey: "AIzaSyBJR1wxERi2J9eD7AdPqkTbyxn7XMZ6e5s",
    authDomain: "mycloud-f2abc.firebaseapp.com",
    projectId: "mycloud-f2abc",
    storageBucket: "mycloud-f2abc.appspot.com",
    messagingSenderId: "730322599720",
    appId: "1:730322599720:web:d1d28cf6c5427c362dda1d"
  };

firebase.initializeApp(firebaseConfig);

let app

firebase.auth().onAuthStateChanged(() => {
    if(!app){
        createApp(App)
        .use(store)
        .use(router)
        .use(ElementPlus)
        .mount('#app')
    }
})

