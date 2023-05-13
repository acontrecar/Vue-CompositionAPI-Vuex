<template lang="">
    <h2 v-if="isLoading">Espere por favor..</h2>
    <h2 v-else>Usuarios</h2>
    <h5 v-if="errorMesage">{{ errorMesage }}</h5>

    <div v-if="users.length>0">
        <user-list
        :users="users"
        v-slot="{user}"
        >
            <h5>{{ user.first_name }} {{ user.last_name }}</h5>
            <span>{{ user.email }}</span>
        </user-list>
    </div>

    <button @click="prevPage">Atras</button>
    <button @click="nextPage">Siguiente</button>
    <p>Pagina: {{ currentPage }}</p>

</template>
<script>

import useUsers from '@/composables/useUsers'
import UserList from '@/components/UserList.vue'

export default {

    components: {
        UserList
    },
    setup() {
        const { users, errorMesage, isLoading, nextPage, prevPage, currentPage } = useUsers();

        return {
            users,
            errorMesage,
            isLoading,
            nextPage,
            prevPage,
            currentPage
        }
    }
}
</script>

<style scoped>
h2 {
    text-align: center;
    width: 100%;
}

div {
    display: flex;
    text-align: center;
    justify-content: center;
}

ul {
    width: 250px;
}
</style>