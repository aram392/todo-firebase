<template>
    <div>
        <div v-bind:key="todo.id" v-for="todo in todos"></div>
    </div>
</template>

<script>
import TodoTask from './TodoTask'
export default {
    name: "List",
    components:{
        TodoTask
    },
    props: ["todos"]
}
</script>

<style>

</style>