<template>
    <div class="count-container">
        <span class="todo-count">총 <strong>{{ count }}</strong> 개</span>
        <ul class="filters">
            <li>
                <router-link
                        :class="classes[0]"
                        to="/"
                >전체보기
                </router-link>
            </li>
            <li>
                <router-link
                        :class="classes[1]"
                        to="/active"
                >해야할 일
                </router-link>
            </li>
            <li>
                <router-link
                        :class="classes[2]"
                        to="/completed"
                >완료한 일
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: {
            count: {
                type: Number
            },
            classes: {
                type: Array
            }
        }
    }
</script>