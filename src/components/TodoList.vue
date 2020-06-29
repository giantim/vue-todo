<template>
    <div class="main">
        <input class="toggle-all" type="checkbox"/>
        <ul id="todo-list" class="todo-list">
            <TodoItem
                    v-for="todo in todos"
                    :key="todo.id"
                    :todo="todo"
            />
        </ul>
    </div>
</template>

<script>
    import TodoItem from "./TodoItem";

    export default {
        components: {
            TodoItem
        },

        props: {
            todos: {
                type: Array,
                required: true
            }
        }
    }
</script>