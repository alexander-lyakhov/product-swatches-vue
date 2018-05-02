import Vue from 'vue';

import './styles/reset.css';
import './styles/index.css';

import product from './components/product/product.vue'

export default new Vue({
    el: '#app',
    components: {product}
})