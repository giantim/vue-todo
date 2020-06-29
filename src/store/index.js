import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        todos: []
    },

    mutations: {
        ADD_TODO(state, content) {
            state.todos.push({
                id: Math.random(),
                content,
                checked: false,
                isEditing: false
            });
        },
        TOGGLE_CHECKBOX(state, todo) {
            state.todos = state.todos.map(t => t.id === todo.id ? {...t, checked: todo.checked} : t);
        },
        TOGGLE_EDITING(state, todo) {
            state.todos = state.todos.map(t => t.id === todo.id ? {...t, isEditing: todo.isEditing} : t);
        },
        EDIT_CONTENT(state, todo) {
            state.todos = state.todos.map(t => t.id === todo.id
                ? {...t, content: todo.content, isEditing: todo.isEditing} : t);
        },
        DELETE_TODO(state, id) {
            state.todos = state.todos.filter(t => t.id !== id);
        },
        CANCEL_EDIT(state, todo) {
            state.todos = state.todos.map(t => t.id === todo.id ? {...t, isEditing: todo.isEditing} : t);
        },
    },

    getters: {
        allCount: state => {
            return state.todos.length;
        },
        activeCount: state => {
            return state.todos.filter(t => !t.checked).length;
        },
        completedCount: state => {
            return state.todos.filter(t => t.checked).length;
        },
        activeTodos: state => {
            return state.todos.filter(t => !t.checked);
        },
        completedTodos: state => {
            return state.todos.filter(t => t.checked);
        }
    }
})
