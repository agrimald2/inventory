<template>
    <div class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="modal-confirm-mistake">
        <div class="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <!-- Close button -->
            <div class="flex justify-end">
                <button @click="closeModal" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7.707 7.707a1 1 0 011.414-1.414L10 8.586l1.293-1.293a1 1 0 111.414 1.414L11.414 10l1.293 1.293a1 1 0 01-1.414 1.414L10 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L8.586 10 7.293 8.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
            </div>
            <div class="mt-3 text-center">
                <h3 class="text-lg leading-6 font-medium text-gray-900">¿Seguro que quieres marcar este movimiento como un error?</h3>
                <div class="mt-4">
                    <button @click="confirmMistake" class="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300 mr-2">
                        Sí
                    </button>
                    <button @click="closeModal" class="px-4 py-2 bg-red-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300">
                        No
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        movement: {
            type: Number,
            required: true
        }
    },
    methods: {
        confirmMistake() {
            axios.post('/inventory/markAsMistake', {
                movement_id: this.movement,
            })
            .then(response => {
                this.$emit('markAsMistake');
                this.closeModal();
            });
        },
        closeModal() {
            const modal = document.getElementById('modal-confirm-mistake');
            if (modal) {
                modal.style.display = 'none';
            }
        }
    }
}
</script>
<style>
    #modal-confirm-mistake {
        display: none;
    }
</style>