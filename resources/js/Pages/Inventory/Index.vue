<template>
    <Header />
    <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div class="flex flex-row mb-4 md:mb-0">
            <select v-model="type" @change="getMovements" class="form-select block w-full md:w-48 px-3 py-2 mb-2 md:mb-0 md:mr-2 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Tipo de movimiento">
                <option value="">Tipo de movimiento</option>
                <option value="in">Entrada</option>
                <option value="out">Salida</option>
                <option value="mistake">Errores</option>
            </select>
        </div>
        <div class="flex flex-row">
            <input v-model="startDate" @change="getMovements" type="date" class="form-input block w-full md:w-44 px-3 py-2 mb-2 md:mb-0 md:mr-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Desde">
            <input v-model="endDate" @change="getMovements" type="date" class="form-input block w-full md:w-44 px-3 py-2 mb-2 md:mb-0 md:mr-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Hasta">
        </div>
    </div>
    <List :movements="movements" @markAsMistake="markAsMistake" />
    <AddInventoryMovement />
</template>

<script>
import AppLayout from '@/Layouts/AppLayout.vue';
import List from '@/Pages/Inventory/List.vue';
import Header from '@/Pages/Inventory/Header.vue';
import AddInventoryMovement from '@/Pages/Inventory/AddInventoryMovement.vue';

export default {
    components: {
        AppLayout,
        List,
        Header,
        AddInventoryMovement,
    },
    data() {
        return {
            movements: [],
            startDate: '',
            endDate: '',
            type: '',
        };
    },
    watch: {
        startDate: 'getMovements',
        endDate: 'getMovements',
        type: 'getMovements',
    },
    methods: {
        getMovements() {
            axios.get('/inventory/getMovements', {
                params: {
                    start_date: this.startDate,
                    end_date: this.endDate,
                    type: this.type,
                },
            })
            .then(response => {
                this.movements = response.data;
            });
        },
        markAsMistake(movementId) {
            axios.post('/inventory/markAsMistake', {
                movement_id: movementId,
            })
            .then(response => {
                this.getMovements();
            });
        },
    },
    mounted() {
        this.getMovements();
    },
    layout: AppLayout,
}
</script>

<style scoped>
/* Your styles here */
</style>