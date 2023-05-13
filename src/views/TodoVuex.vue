<template lang="">
    <h1>Todo Vuex</h1>
    <!-- <h4>Tareas {{ $store.state.todos.filter(t => !t.completed).length }}</h4> -->
    <h4>Pendientes: {{ pending.length }}</h4>

    <hr>
    <button 
    :class="{'active': currenTab === 'all'}"
    @click="currenTab= 'all'"
    >Todos
    </button>

    <button 
    :class="{'active': currenTab === 'pending'}"
    @click="currenTab= 'pending'"
    >Pendientes
    </button>

    <button 
    :class="{'active': currenTab === 'completed'}"
    @click="currenTab= 'completed'"
    >Completados
    </button>

    
    <div>
        <ul>
            <li v-for="todo in getTodosByTab" :key="todo.id"
            :class="{'completed': todo.completed}"
            @dblclick="toggleTodo(todo.id)"
            >
                {{ todo.text }}
            </li>
        </ul>
    </div>

    <button @click="isOpen=true">Crear Todo</button>

    <modal v-if="isOpen"
    @on:close="isOpen=false"
    >

        <template #header>
            <h1>Crear Todo</h1>
        </template>

        <template #body>
            <form @submit.prevent="createTodo(newTodoText);isOpen=false">
                <input type="text" placeholder="Tarea" v-model="newTodoText">
                <button type="submit">Crear</button>
            </form>
        </template>
    </modal>
</template>

<script>

import { ref } from 'vue';
import Modal from '@/components/Modal.vue';
import useTodos from '@/composables/useTodos';


export default {
    
    components: {
        Modal
    },
    setup() {

        const { currenTab,pending,getTodosByTab,toggleTodo, createTodo } = useTodos();

        return {
            currenTab,
            getTodosByTab,
            pending,
            toggleTodo,
            createTodo,

            isOpen : ref(false),
            newTodoText: ref('')
        }
}}
</script>

<style scoped>
div{
    display: flex;
    justify-content: center;
    align-items: center;
}    
ul{
    width: 300px;
    text-align: left;
}
li{
    cursor: pointer;
}

.active{
    background-color: #2c3e50;
    color: white;
}

.completed{
    text-decoration: line-through;
}
</style>