import Vue from 'vue'
import weex from 'weex-vue-render'

/*global Vue*/
weex.init(Vue);

const router = require('./router');
const App = require('@/index.vue');

Vue.use(router);
/* eslint-disable no-new */
new Vue(Vue.util.extend({el: '#root', router}, App));

router.push("/");
