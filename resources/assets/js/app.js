window._ = require('lodash');

window.Vue = require('vue');

import './app/axios';
import './app/vuex';
import './app/flash';
import './app/vuetify';
import { mainMenuItems } from './app/menus';
import router from './app/router';

import store from './store';

Vue.component('notification', require('./components/Notification.vue'));

const app = new Vue({
    el: '#app',
    store,
    router,
    data: {
    	drawer: true,
    	mainMenuItems
    }
});

