<template>
  <div class="home">
    <h1>Reactive vs ref</h1>
    <h3>{{ ironMan }}</h3>
    <h3>{{ hulk }}</h3>

    <button @click="changeIronman">Change Ironman </button>
    <button @click="changeHulk">Change Hulk </button>

    <h3>Ironman is alive: {{ ironmanIsAlive }}</h3>
    <h3>Hulk is alive: {{ hulkIsAlive }}</h3>
    <button @click="changeStatus">Change Status</button>
  </div>
</template>

<script>
// @ is an alias to /src
import { ref, reactive } from 'vue'

export default {
  name: 'HomeView',

  setup() {
    const ironMan = ref({ name: 'Tony', age: 45 })
    const hulk = reactive({ name: 'Bruce', age: 50 })

    const ironmanIsAlive = reactive(false)
    const hulkIsAlive = ref(true)

    const changeStatus = () => {
      //ironmanIsAlive.value = !ironmanIsAlive.value
      hulkIsAlive.value = !hulkIsAlive.value
    }

    return {
      ironMan,
      ironmanIsAlive,
      hulkIsAlive,
      hulk,

      changeStatus,
      changeIronman() {
        ironMan.value.name = 'Tony Stark'
        ironMan.value.age = 46
      },

      changeHulk() {
        hulk.name = 'Bruce Banner'
        hulk.age = 51
      }
    }
  }
}
</script>
