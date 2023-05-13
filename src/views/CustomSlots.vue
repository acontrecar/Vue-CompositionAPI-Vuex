<template lang="">
    <h1>Aprendiendo Slots</h1>
    <button @click="openModal">Abrir modal</button>

    <Modal
    v-if="isOpen"
    title="Hola mundo"
    @on:close="closeModal"
    >
        <!-- <h1>Contenido del modal</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisi fugit </p>
        <button>Salir</button> -->

        <template #header>
            <h1>Contenido del modal</h1>
        </template>

        <template v-slot:body>
            <p>Lorem, ipsum dolor sit amet consectetur adipisi fugit </p>
        </template>

        <template #footer>
            <button @click="closeModal">Salir</button>
        </template>

        <template #exposed="{newTitle}">
            <h2>{{ newTitle }}</h2>
        </template>
    </Modal>
</template>

<script>

import Modal from '@/components/Modal.vue'
import { ref } from 'vue'

export default {
    
    components: {
        Modal
    },

    setup(){

        const isOpen = ref(false)

        return{
            isOpen,

            openModal: () => isOpen.value = true,
            closeModal: () => isOpen.value = false

        }
    }
}
</script>

<style lang="">
    
</style>