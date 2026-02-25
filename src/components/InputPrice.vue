<script setup>
import { computed } from 'vue';
import { store } from '@/store/index.js';
import { price } from '@/store/index.js';

const checkPrice = computed(() => {
  if (price.newPrice > 9999) {
    return "Veuillez saisir un montant inférieur à 9 999."
  } else if (price.newPrice < 0) {
    return "Veuillez saisir un montant supérieur à 0."
  } else if (!/^\d+$/.test(price.newPrice)) {
    return "Veuillez saisir un montant valable."
  } else {
    return ""
  }
})

</script>

<template>
    <div class="fakeinput">
        <input type="number" placeholder="0,00" v-model="price.newPrice">
        <span>€</span>
    </div>
    <div class="error" v-show="checkPrice">
        <img src="../assets/icons/caution.png" alt="Attention">
        <p>{{ checkPrice }}</p>
    </div>
</template>

<style scoped>

    input {
        background-color: transparent;
        border: none;
        color: #fff;
        font-family: "Poppins", sans-serif;
        font-weight: 500;
        font-style: normal;
        outline: none;
        font-size: 70px;
        width: 200px;
        text-align: right;
    }

    .fakeinput {
        display: flex;
        width: fit-content;
        gap: 5px;
        font-weight: 500;
        font-size: 70px;
        margin: auto;
        padding-right: 80px;
    }

    .error {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        color: rgb(248, 72, 41);
        font-weight: 400;
    }
    
    .error img {
        height: 20px;
        width: auto;
    }

</style>