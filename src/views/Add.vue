<script setup>
    import BottomMenu from '@/components/BottomMenu.vue';
    import GameCard from '@/components/GameCard.vue';
    import { store, addSession } from '@/store/index.js';
    import InputPrice from '@/components/InputPrice.vue';
    import ResultButton from '@/components/ResultButton.vue';
    import { ref } from 'vue'
    import { computed } from 'vue';

    // const win = ref(true)
    let gameId = ref(0)
    let priceError = ref("")
    let start = ref(0)
    let end = ref(0)
    let time = ref(10)


    function checkPrice(price,isStarting) {
        console.log("Salut la team")
        if (price > 9999) {
            console.log("C'est trop grand")
            priceError.value = "Veuillez saisir un montant inférieur à 9 999."
        } else if (price < 0) {
            console.log("C'est inférieur à zéro")
            priceError.value = "Veuillez saisir un montant supérieur à 0."
        } else if (!/^\d+$/.test(price)) {
            console.log("C'est pas un nombre")
            priceError.value = "Veuillez saisir un montant valide."
        } else {
            console.log("C'est tout good")
            priceError.value = ""
            if (isStarting) {
                start.value = price
                console.log("C'est le starting")
            } else {
                console.log("C'est le ending")
                end.value = price
            }
        }

        console.log("Attention ya priceError qui arrive ! ------------------------------")
        console.log(priceError)
    }

</script>

<template>
    <div class="subtitle">
        <h2>Ajouter une session</h2>
    </div>

    <div class="inputs">
        <InputPrice @input="checkPrice($event,true)" inputClass="winning" buttonClass="winner" text="Arrivé avec"/>
        <InputPrice @input="checkPrice($event,false)" inputClass="loosing" buttonClass="looser" text="Reparti avec"/>
    </div>
    <div class="error" v-show="priceError">
        <img src="../assets/icons/caution.png" alt="Attention">
        <p>{{ priceError }}</p>
    </div>

    <div class="subtitle">
        <h2>Jeu</h2>
    </div>

    <div class="slider">
        <GameCard v-for="item in store.value.games" :game="item" :key="item.id" @clicked="gameId = item.id" :gameId="gameId"/>
    </div>

    <div class="subtitle">
        <h2>Temps de la session</h2>
    </div>

    <div class="times">
        <button @click="time = 10">10 min</button>
        <button @click="time = 20">20 min</button>
        <button @click="time = 30">30 min</button>
        <button @click="time = 45">45 min</button>
        <button @click="time = 60">1h</button>
        <button @click="time = 90">1h30</button>
        <button @click="time = 120">2h</button>
    </div>

    {{ gameId }}
    {{ priceError }}
    {{ start }}
    {{ end }}
    {{ time }}

    <button @click="addSession(time,start,end,gameId)">Ajouter la session</button>

    {{ store.value.sessions }}
    <!-- <BottomMenu/> -->
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
        margin-top: 40px;
    }

    .inputs {
        margin-top: 55px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 40px;
    }

    .times {
        display: flex;
        justify-content: left;
        overflow-x: scroll;
        gap: 10px;
    }

    .times button{
        font-size: 16px;
        min-width: 100px;
        padding: 10px 20px;
    }

    .error {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        color: rgb(248, 72, 41);
        font-weight: 400;
        font-size: 14px;
        margin-top: 15px;
    }
    
    .error img {
        height: 20px;
        width: auto;
        transform: rotateZ(180deg);
    }
</style>