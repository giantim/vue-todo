<template>
    <div>
        <li
                :class="className"
                @dblclick="toggleEditing"
        >
            <div class="view">
                <input
                        class="toggle"
                        type="checkbox"
                        :checked="todo.checked"
                        @change="toggleCheckbox"
                />
                <label class="label">{{ todo.content }}</label>
                <button
                        class="destroy"
                        @click="deleteTodo"
                ></button>
            </div>
            <input
                    class="edit"
                    :value="todo.content"
                    @keyup.enter="editContent"
                    @keyup.esc="cancelEdit"
            />
        </li>
    </div>
</template>

<script>
    export default {
        props: {
            todo: {
                type: Object
            }
        },

        methods: {
            toggleCheckbox(event) {
                event.preventDefault();
                this.$store.commit('TOGGLE_CHECKBOX', {
                    id: this.todo.id,
                    checked: event.target.checked
                });
            },
            toggleEditing(event) {
                event.preventDefault();
                this.$store.commit('TOGGLE_EDITING', {
                    id: this.todo.id,
                    isEditing: !this.todo.isEditing
                });
            },
            editContent(event) {
                this.$store.commit('EDIT_CONTENT', {
                    id: this.todo.id,
                    content: event.target.value,
                    isEditing: !this.todo.isEditing
                });
            },
            deleteTodo() {
                this.$store.commit('DELETE_TODO', this.todo.id);
            },
            cancelEdit() {
                this.$store.commit('CANCEL_EDIT', {
                    id: this.todo.id,
                    isEditing: !this.todo.isEditing
                });
            }
        },

        computed: {
            className() {
                return this.todo.checked ? 'completed' :
                    this.todo.isEditing ? 'editing' : '';
            }
        }
    }
</script>