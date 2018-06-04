require('./module-one.js');
require('./module-two.js');
require('../css/style.css');

import Vue from 'vue';
import Heading from './components/heading.vue';

new Vue({
    el : '#app',
    components : {
        Heading
    }
});