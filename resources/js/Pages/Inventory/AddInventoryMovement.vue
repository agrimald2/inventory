// Start of Selection
<template>
    <div class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="modal-add-inventory-movement">
        <div class="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <!-- Close button -->
            <div class="flex justify-end">
                <button @click="closeModal" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="my-modal">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7.707 7.707a1 1 0 011.414-1.414L10 8.586l1.293-1.293a1 1 0 111.414 1.414L11.414 10l1.293 1.293a1 1 0 01-1.414 1.414L10 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L8.586 10 7.293 8.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
            </div>
            <div class="mt-3 text-center">
                <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                    <i class="fas fa-exchange-alt text-green-600"></i>
                </div>
                <h3 class="text-lg leading-6 font-medium text-gray-900">Añadir Movimiento</h3>
                <div class="mt-2 px-7 py-3">
                    <form @submit.prevent="submitForm">
                        <div class="mb-4">
                            <label for="type" class="block text-gray-700 text-sm font-bold mb-2">Tipo de movimiento:</label>
                            <select v-model="form.type" id="type" class="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                                <option value="in">Entrada</option>
                                <option value="out">Salida</option>
                            </select>
                        </div>
                        <div class="mb-4">
                            <label for="product_code" class="block text-gray-700 text-sm font-bold mb-2">Código:</label>
                            <select v-model="form.code" id="code" class="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                                <option v-for="product in products" :value="product.code" :key="product.code">{{ product.code }}</option>
                            </select>
                        </div>
                        <div class="mb-4">
                            <label for="quantity" class="block text-gray-700 text-sm font-bold mb-2">Cantidad:</label>
                            <input v-model.number="form.quantity" type="number" id="quantity" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
                        </div>
                        <div v-if="errorMessage" class="mb-4 text-sm text-red-500">
                            {{ errorMessage }}
                        </div>
                        <div class="items-center px-4 py-3">
                            <button type="submit" class="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300">
                                Añadir
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                type: '',
                code: '',
                quantity: 0
            },
            products: [],
            errorMessage: '',
        };
    },
    methods: {
        submitForm() {
            axios.post('/inventory/store', this.form)   
                .then(response => {
                    console.log(response);
                    this.closeModal();
                })
                .catch(error => {
                    if (error.response && error.response.data && error.response.data.message) {
                        this.errorMessage = error.response.data.message;
                    } else {
                        this.errorMessage = 'Ocurrió un error al intentar añadir el movimiento.';
                    }
                });
        },
        closeModal() {
            this.errorMessage = ''; // Clear any error messages
            const modal = document.getElementById('modal-add-inventory-movement');
            if (modal) {
                modal.style.display = 'none';
            }
        },
        getProducts() {
            axios.get('/products/getProducts')
                .then(response => {
                    this.products = response.data;
                })
                .catch(error => {
                    console.error(error);
                });
        }   
    },
    mounted() {
        this.getProducts();
    }
}
</script>
<style>
    #modal-add-inventory-movement {
        display: none;
    }
</style>