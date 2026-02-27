<script setup>
    import BottomMenu from '@/components/BottomMenu.vue';
    import GameCard from '@/components/GameCard.vue';
    import { store, addSession, deleteSession, saveSession } from '@/store/index.js';
    import InputPrice from '@/components/InputPrice.vue';
    import ResultButton from '@/components/ResultButton.vue';
    import { ref } from 'vue'
    import { computed } from 'vue';
    import { useRoute } from 'vue-router'

    // const win = ref(true)
    let gameId = ref(0)
    let priceError = ref("")
    let start = ref(0)
    let end = ref(0)
    let time = ref(10)


    function checkPrice(price,isStarting) {
        console.log("Salut la team")
        if (price > 99999) {
            priceError.value = "Veuillez saisir un montant inférieur à 9 999."
        } else if (price < 0) {
            priceError.value = "Veuillez saisir un montant supérieur à 0."
        } else if (!/^\d+$/.test(price)) {
            priceError.value = "Veuillez saisir un montant valide."
        } else {
            priceError.value = ""
            if (isStarting) {
                start.value = price
            } else {
                end.value = price
            }
        }

        console.log("Attention ya priceError qui arrive ! ------------------------------")
        console.log(priceError)
    }

    //On récupère l'id
    const route = useRoute()

    const IDEditSession = parseInt(route.params.id)
    console.log("ATTENTION !!", IDEditSession)

    const editSession = store.value.sessions.find(item => item.id === IDEditSession) ?? {}
    const editSessionStart = editSession.start ?? "0,00"
    const editSessionEnd = editSession.end ?? "0,00"
    gameId = ref(editSession.gameId) ?? ref(gameId)
    let editSessionTime = new Date(editSession.timeStamp)
    editSessionTime = editSessionTime.getDate() + "/" + editSessionTime.getMonth() + "/" + editSessionTime.getFullYear() + " à " + editSessionTime.getHours() + ":" + editSessionTime.getMinutes()


</script>

<template>
    <div class="subtitle">
        <h2 v-show="!IDEditSession">Ajouter une session</h2>
        <div v-show="IDEditSession">
            <h2>Modifier la session</h2>
            <p id="date">{{ editSessionTime }}</p>
        </div>
        <button class="iconButton" v-show="IDEditSession" @click="deleteSession(IDEditSession)">
            <img src="../assets/icons/delete.png" alt="Supprimer la session">
        </button>
    </div>

    <div class="inputs">
        <InputPrice @input="checkPrice($event,true)" inputClass="winning" buttonClass="winnerButton" text="Arrivé avec" :value="editSessionStart"/>
        <InputPrice @input="checkPrice($event,false)" inputClass="loosing" buttonClass="looserButton" text="Reparti avec" :value="editSessionEnd"/>
    </div>
    <div class="error" v-show="priceError">
        <img src="../assets/icons/caution.png" alt="Attention">
        <p>{{ priceError }}</p>
    </div>

    <div class="subtitle">
        <h2>Jeu</h2>
    </div>

    <div class="slider">
        <GameCard v-for="item in store.games" :game="item" :key="item.id" @clicked="gameId = item.id" :gameId="gameId"/>
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

    <div class="buttonContainer">
        <button id="add" @click="addSession(time,start,end,gameId)" v-if="!IDEditSession">Ajouter la session</button>
        <button id="add" @click="saveSession(time,start,end,gameId,IDEditSession)" v-if="IDEditSession">Sauvegarder</button>
    </div>

    <!-- <BottomMenu/> -->
</template>

<style scoped>

    #date {
        color: #CACACA;
        font-weight: 300;
        margin-top: 0px;
    }

    .subtitle {
        align-items: flex-start;
    }

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

    .buttonContainer {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    #add {
        cursor: pointer;
        border-radius: 100px;
        width: 90%;
        height: 60px;
        margin-top: 50px;
        margin-bottom: 200px;
        font-weight: 700;
        font-size: 20px;
        color: #fff;
        border: none;
        background-color: rgb(210, 146, 28) !important;
        filter: drop-shadow(0 0 30px rgb(210, 183, 28));
    }
</style>