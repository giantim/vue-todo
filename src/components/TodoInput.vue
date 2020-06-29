<template>
    <div>
        <h1>TODOS</h1>
        <input
                id="new-todo-title"
                class="new-todo"
                placeholder="할일을 추가해주세요"
                autoFocus
                v-model="content"
                @keyup.enter="addTodo"
        />
    </div>
</template>

<script>
    export default {
        data() {
            return {
                content: ''
            }
        },

        methods: {
            addTodo(event) {
                this.$store.commit('ADD_TODO', event.target.value);
                this.content = '';
            }
        }
    }
</script>