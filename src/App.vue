<template>
    <div>
        <section class="todoapp">
            <TodoInput />
            <router-view />
        </section>
    </div>
</template>

<script>
    import TodoInput from './components/TodoInput.vue';

    export default {
        components: {
            TodoInput,
        }
    }
</script>

<style>
    @import './assets/App.css';
</style>
