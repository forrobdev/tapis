<script>
    import { store } from '@/store/index.js';
    export default {
        props: ['game']
    }
</script>

<template>
    <div class="background">
        <img :src="game.icon" alt="">
        <p>{{ game.name }}</p>
    </div>
</template>

<style scoped>
    img {
        height: 20px;
    }
    .background {
        background-color: #fff;
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        border: solid black 2px;
        width: 120px;
        height: 160px;
        align-items: center;
    }
</style>