<template>

    <section class="product">
        <product-swatches @change="setSelectedColor"></product-swatches>
        <product-image :src="selected.image"></product-image>
    </section>

</template>

<script>
    import './product.scss';
    import baseComponents from '../base-component.js';

    import productSwatches from '../product-swatches/product-swatches.vue';
    import productImage from '../product-image/product-image.vue';

    export default {
        name: 'product',

        extends: baseComponents,

        components: {productImage, productSwatches},

        data: function() {
            return {
                selected: {}
            }
        },

        methods: {
            setSelectedColor: function(data) {
                this.selected = data;
            }
        }
    }
</script>