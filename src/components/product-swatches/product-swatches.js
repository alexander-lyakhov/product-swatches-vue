import baseComponents from '../base-component.js';
import data from '../../data/product-data.js';

export default {
    name: 'product-swatches',

    extends: baseComponents,

    mounted: function() {
        this.selectColor(data.colors[0].colorValue);
    },

    methods: {
        selectColor: function(value) {
            this.$emit('change', {
                color: value,
                image: 'https:' + data.images[value][0].imagePath
            });
        }
    },

    computed: {
        colors: function() {
            return data.colors.map(function(item) {
                item.colorMarker = 'https:' + item.color;
                return item;
            });
        }
    }
}