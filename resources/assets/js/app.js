window._ = require('lodash');

window.Vue = require('vue');

import './app/axios';
import './app/vuex';
import './app/flash';
import './app/vuetify';
import { mainMenuItems } from './app/menus';
import router from './app/router';

const app = new Vue({
    el: '#app',
    router,
    data: {
    	drawer: true,
    	mainMenuItems
    }
});
