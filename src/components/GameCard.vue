<script setup>
    import { store } from '@/store/index.js';

    defineProps(['game','selected','gameId'])
    defineEmits(['clicked'])

</script>

<template>
    <div @click="$emit('clicked')" class="glass-card" :class="{selected: gameId === game.id}">
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
        /* filter: drop-shadow(0px 10px 60px rgb(248, 72, 41)); */
    }

    .glass-card {
        /* border: solid 2px white; */
        overflow: hidden;
        border-radius: 28px;
        display: flex;
        flex-direction: column;
        width: 170px;
        min-width: 140px;
        height: 210px;
        align-items: center;
        /* background-color: #0b162a; */
        background: linear-gradient(162deg,rgba(11, 22, 42, 1) 41%, rgba(248, 72, 41, 1) 94%);
    }

    .glass-card p {
        max-width: 90%;
    }

    .selected {
        border: solid #fff 1px;
    }
</style>