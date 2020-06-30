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
                if (event.target.value === '') {
                    alert('비어있는 할 일을 입력할 수 없습니다.');
                    return;
                }
                this.$store.commit('ADD_TODO', event.target.value);
                this.content = '';
            }
        }
    }
</script>