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
</template>

<script>

import { computed, ref } from 'vue';
import { useStore } from 'vuex';


export default {
    
    setup() {
        const store = useStore();
        
        const currenTab = ref('all')

        // const toggleTodo = (id) => {
        //     store.commit('toggleTodo', id)
        // }

        return {
            currenTab,

            all: computed(() => store.getters['allTodos']),
            completed: computed(() => store.getters['completedTodos']),
            pending: computed(() => store.getters['pendingTodos']),
            
            getTodosByTab: computed(() => store.getters['getTodosByTab'](currenTab.value)),
            
            //Methods
            toggleTodo: (id) => store.commit('toggleTodo', id)
        }
    }
}
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