<template>
    <div class="overflow-x-auto">
        <table class="w-full text-sm text-left text-gray-500">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                    <th scope="col" class="px-6 py-3">Código</th>
                    <th scope="col" class="px-6 py-3">Cantidad</th>
                    <th scope="col" class="px-6 py-3">Fecha</th>
                    <th scope="col" class="px-6 py-3">Acción</th>
                </tr>
            </thead>
            <tbody>
                <tr class="border-b" v-for="movement in movements" :key="movement.id" :class="movementClass(movement)">
                    <td class="px-6 py-4">{{ movement.code }}</td>
                    <td class="px-6 py-4">{{ movement.quantity }}</td>
                    <td class="px-6 py-4">{{ formatDate(movement.created_at) }}</td>
                    <td class="px-6 py-4">
                        <button class="bg-blue-500 text-white px-4 py-2 rounded-md"
                            @click="openMistakeModal(movement.id)">
                            <i class="fa-sharp fa-solid fa-code-pull-request"></i>
                        </button>
                    </td>
                </tr>
                <!-- Repeat for each movement -->
            </tbody>
        </table>
    </div>
    <AddMistakeModal :movement="mistakeMovementId" />
</template>

<script>
import AddMistakeModal from '@/Pages/Inventory/AddMistakeModal.vue';
export default {
    props: {
        movements: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            mistakeModal: false,
            mistakeMovementId: null,
        };
    },
    components: {
        AddMistakeModal,
    },
    methods: {
        openMistakeModal(movementId) {
            console.log(movementId);
            const modal = document.getElementById('modal-confirm-mistake');
            if (modal) {
                modal.style.display = 'block';
            }
            this.mistakeMovementId = movementId;
        },
        movementClass(movement) {
            if (movement.type == 'in') {
                return 'bg-green-100';
            } else if (movement.type == 'out') {
                return 'bg-red-100';
            } else if (movement.type == 'mistake') {
                return 'bg-gray-100';
            }
            return '';
        },
        formatDate(dateString) {
            const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };
            return new Date(dateString).toLocaleDateString('es-ES', options).replace(/(\d{2})\/(\d{2})\/(\d{4}), (\d{2}:\d{2})/, '$1/$2/$3 $4');
        }
    },
}
</script>

<style scoped>
/* Your styles here */
</style>