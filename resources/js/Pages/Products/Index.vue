<template>
    <Header />
    <List :products="products" />
</template>

<script>
import AppLayout from '@/Layouts/AppLayout.vue';
import List from '@/Pages/Products/List.vue';
import Header from '@/Pages/Products/Header.vue';
export default {
    components: {
        AppLayout,
        List,
        Header,
    },
    data() {
        return {
            products: [
            ],
        };
    },
    methods: {
        getProducts() {
            axios.get('/products/getProducts')
                .then(response => {
                    console.log(response.data);
                    this.products = response.data;
                })
                .catch(error => {
                    console.error('Error fetching products:', error);
                });
        },
    },
    mounted() {
        this.getProducts();
    },
    layout: AppLayout,
}
</script>

<style scoped>
/* Your styles here */
</style>