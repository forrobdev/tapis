<script setup>
import BottomMenu from '@/components/BottomMenu.vue';
import GameCard from '@/components/GameCard.vue';
import { store } from '@/store/index.js';

</script>

<template>
    <h1>Ajouter une session</h1>
    <input type="number" placeholder="Montant de la session">
    <div class="result">
        <button id="win">Gagné</button>
        <button id="loose">Perdu</button>
    </div>
    <div class="subtitle">
        <h2>Jeu</h2>
    </div>
    <div class="slider">
        <GameCard v-for="item in store.games" :game="item" :key="item.id"/>
        <!-- Component d'un jeu -->
    </div>
    <div class="subtitle">
        <h2>Temps de la session</h2>
    </div>
    <div class="times">
        <button>10 min</button>
        <button>20 min</button>
        <button>30 min</button>
        <button>45 min</button>
        <button>1h</button>
        <button>1h30</button>
        <button>2h</button>
    </div>
    <button>Ajouter la session</button>
    <BottomMenu/>
</template>

<style scoped>
    .slider {
        display: flex;
        overflow-y: scroll;
        gap: 20px;
    }
</style>