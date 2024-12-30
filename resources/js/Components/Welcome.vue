<script setup>
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
</script>

<template>
    <div class="flex flex-wrap justify-center gap-4">
        <div class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md flex flex-col items-center justify-center">
            <i class="fa fa-boxes fa-3x text-gray-700"></i>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Productos</h5>
            <button @click="goTo('/indexProducts')"class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Ver Productos</button>
        </div>

        <div class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md flex flex-col items-center justify-center">
            <i class="fa fa-exchange-alt fa-3x text-gray-700"></i>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Movimientos</h5>
            <button @click="goTo('/inventory')" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Ver Movimientos</button>
        </div>

        <div class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md flex flex-col items-center justify-center">
            <i class="fa fa-warehouse fa-3x text-gray-700"></i>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Inventario</h5>
            <button @click="goTo('/inventory')" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Ver Inventario</button>
        </div>

        <div class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md flex flex-col items-center justify-center">
            <i class="fa fa-clipboard-list fa-3x text-gray-700"></i>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Solicitudes</h5>
            <button class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Ver Solicitudes</button>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        goTo(route) {
            window.location.href = route;
        }
    }
}
</script>