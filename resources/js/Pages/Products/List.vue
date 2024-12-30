<template>
    <div class="overflow-x-auto">
        <table class="w-full text-sm text-left text-gray-500 ">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                    <th scope="col" class="px-6 py-3">Code</th>
                    <th scope="col" class="px-6 py-3">Description</th>
                    <th scope="col" class="px-6 py-3">Stock</th>
                    <th scope="col" class="px-6 py-3">Image</th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-white border-b" v-for="product in products" :key="product.code">
                    <td class="px-6 py-4">{{ product.code }}</td>
                    <td class="px-6 py-4">{{ product.description }}</td>
                    <td class="px-6 py-4">{{ product.stock }}</td>
                    <td class="px-6 py-4">
                        <div class="flex justify-center">
                            <div class="rounded-lg shadow-lg bg-white max-w-sm">
                                <a href="#!">
                                    <img class="rounded-t-lg" :src="product.image_url" alt="Product Image"/>
                                </a>
                            </div>
                        </div>
                    </td>
                </tr>
                <!-- Repeat for each product -->
            </tbody>
        </table>
    </div>
</template>

<script>

export default {
    props: {
        products: {
            type: Array,
            required: true,
        },
    },
    components: {
        
    },
    mounted() {
    },
}
</script>

<style scoped>
/* Your styles here */
</style>