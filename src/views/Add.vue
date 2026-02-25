<script setup>
import BottomMenu from '@/components/BottomMenu.vue';
import GameCard from '@/components/GameCard.vue';
import { store } from '@/store/index.js';
import InputPrice from '@/components/InputPrice.vue';

</script>

<template>
    <!-- <h1>Ajouter une session</h1> -->
    <!-- <div class="fakeinput">
        <input type="tel" placeholder="0,00€">
        <span>€</span>
    </div> -->
    <InputPrice/>
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

    .result {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }

    .result button {
        background-color: transparent;
        border: solid #CACACA 1px;
        border-radius: 100px;
        color: #cacaca;
        width: 130px;
        height: 40px;
        font-family: "Poppins", sans-serif;
        font-weight: 500;
        font-style: normal;
    }

</style>