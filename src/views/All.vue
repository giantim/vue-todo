<template>
    <div>
        <TodoList
                :todos="todos"
        />
        <TodoCategory
                :count="count"
                :classes="classes"
        />
    </div>
</template>

<script>
    import TodoList from '../components/TodoList.vue';
    import TodoCategory from "../components/TodoCategory";

    export default {
        components: {
            TodoList,
            TodoCategory
        },

        data() {
            return {
                classes: ['all selected', 'active', 'completed']
            }
        },

        computed: {
            todos() {
                return this.$store.state.todos;
            },
            count() {
                return this.$store.getters.allCount;
            }
        }
    }
</script>