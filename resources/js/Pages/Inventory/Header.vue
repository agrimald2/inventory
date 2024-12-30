<template>
    <header class="flex flex-row justify-between items-center p-4 bg-white shadow pt-2 px-4">
        <button @click="back" class="text-gray-800 hover:text-gray-600">
            <i class="fa-regular fa-backward-step text-xl"></i>
        </button>
        <h1 class="text-xl font-semibold text-gray-800">Movimientos</h1>
        <button @click="openModal" class="text-gray-800 hover:text-gray-600 rounded-md p-2">
            <i class="fa-solid fa-plus text-xl"></i>
        </button>
    </header>
</template>
<script>
export default {
    methods: {
        openModal() {
            const modal = document.getElementById('modal-add-inventory-movement');
            if (modal) {
                modal.style.display = 'block';
            }
        },
        back() {
            window.history.back();
        }
    }
}
</script>