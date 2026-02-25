<script>
    import { store } from '@/store/index.js';
    export default {
        props: ['game']
    }
</script>

<template>
    <div class="glass-card">
        <p>{{ game.name }}</p>
        <img :src="game.icon" alt="">
    </div>
</template>

<style scoped>

    p {
        text-align: center;
        margin-top: 30px;
        font-size: 16px;
    }

    img {
        height: 180px;
        position: relative;
        right: -30px;
        bottom: 0px;
        filter: drop-shadow(0px 10px 60px rgb(248, 72, 41));
    }

    .glass-card {
        /* border: solid 2px white; */
        overflow: hidden;
        border-radius: 28px;
        display: flex;
        flex-direction: column;
        width: 170px;
        height: 210px;
        align-items: center;
        background-color: #0b162a;
    }
</style>