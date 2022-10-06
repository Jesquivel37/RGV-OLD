import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import Stats from '@/store/Stats'
import Letters from '@/store/Letters'

library.add(fas)
const skeleton = document.getElementById('skeleton');
createApp(App).use(router)
.component('font-awesome-icon', FontAwesomeIcon)
.provide('stats', Stats)
.provide('letters', Letters)
.mount('#app')

if(skeleton){
    console.log('hello world')
    skeleton.remove();    
}
