<script setup>
    import gsap from 'gsap';
    import Tag from './Tag.vue';
    import { store } from '@/store';
    import { ref } from 'vue';

    defineEmits(['clicked'])

    const selectedGameId = ref(0)

</script>

<template>
    <div id="card">
        <div class="subtitle">
            <h2>Filtres</h2>
            <button class="iconButton" @click="$emit('clicked')">
                <img src="../assets/icons/arrow.png" alt="Supprimer la session">
            </button>
        </div>
        <div class="subtitle">
            <h3>Jeu</h3>
        </div>
        <div class="tags">
            <Tag v-for="game in store.games" :name="game.name" :icon="game.icon" :id="game.gameId" @clicked="selectedGameId = game.gameId"/>
        </div>
    </div>

    {{ selectedGameId }}
</template>

<style scoped>

    #card {
        background-color: #fff;
        width: 100%;
        height: fit-content;
        padding: 25px 30px;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        border-radius: 46px 46px 0px 0px;
        box-sizing: border-box;
    }

    #card p {
        color: black;
    }

    h2, h3 {
        color: black;
    }

    .subtitle {
        margin: 0;
        padding: 0;
    }

    h3 {
        color: #CACACA;
        font-weight: 500;
    }

    .iconButton img {
        transform: rotateZ(90deg);
        height: 40px;
    }

    .slider {
        display: flex;
        overflow-y: scroll;
        gap: 10px;
    }

    .tags {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: left;
        gap: 10px;
    }

</style>