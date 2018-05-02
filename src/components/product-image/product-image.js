import baseComponents from '../base-component.js';

export default {
    name: 'product-image',

    extends: baseComponents,

    props: {
        'src': String
    },

    computed: {
        image: function() {
            return this.$props.src;
        }
    }
}