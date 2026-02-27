<script setup>
  import BottomMenu from '@/components/BottomMenu.vue';
  import InputPrice from '@/components/InputPrice.vue';
  import { store } from '@/store';
  import { computed } from 'vue';
  import SessionCard from '@/components/SessionCard.vue';
  import Stat from '@/components/Stat.vue';
  import gsap from 'gsap';

  // Icones
  import blackjackIcon from "@/assets/img/bj.png"
  import rouletteIcon from "@/assets/img/roulette.png"
  import machineIcon from "@/assets/img/machine.png"

  const getAllGains = computed(() => {
    let amount = 0
    store.value.sessions.forEach(element => {
      amount += element.end - element.start
    });
    return amount
  })

  //Redonner le signe devant le nombre
  const forceSign = new Intl.NumberFormat('fr-FR', {
    signDisplay: 'exceptZero' // Affiche + ou - sauf pour 0
  });

  //Est-ce que la liste sessions a plus de 3 items ?
  const isEnoughBig = computed(() => {
    if (store.value.sessions.length >= 3) {
      return 3
    } else {
      return store.value.sessions.length
    }
  })

  const reversedSessions = store.value.sessions.reverse()

  //Est-ce qu'on est dans le négatif (dans le rouge)
  const getClassOnAmount = computed(() => {
    if (getAllGains.value >= 0) {
      return ["winner","winnerButton"]
    } else {
      return ["looser","looserButton"]
    }
  })

  //Récupérer le total de toutes les durées
  const getAllDurations = computed(() => {
    let total = 0
    store.value.sessions.forEach(session => {
      total += session.duration
    });

    return total
  })

  //Créer la statistique sur les minutes
  const statMinutes = computed(() => {
    const stat = {
      bigNumber: getAllDurations.value,
      corps: "minutes passées dans un casino, vous auriez pu vous brosser les dents " + getAllDurations.value/2 + " fois.",
      icon: "",
      class: "big"
    }
    return stat
  })

  //Créer la statistique sur le total de sessions
  const statTotalSessions = computed(() => {
    const stat = {
      bigNumber: store.value.sessions.length,
      corps: "sessions effectuées",
      icon: "",
      class: "mini"
    }
    return stat
  })

  //Créer la statistique sur le jeu préféré
  const statFavoriteGame = computed(() => {
    const stat = {
      bigNumber: "",
      corps: "Le blackjack est votre jeu préféré",
      icon: machineIcon,
      class: "mini"
    }
    return stat
  })

  //Créer la statistique sur la moyenne de gain
  const statAverageAmountWin = computed(() => {
    const stat = {
      bigNumber: Math.round(getAllGains.value/store.value.sessions.length) + "€",
      corps: "C'est ce que vous gagnez en moyenne par session de casino",
      icon: "",
      class: "big"
    }
    return stat
  })


  //Générer le tableau des statistiques
  const generateStats = computed(() => {
    let stats = []

    //Stat sur les minutes
    stats.push(statMinutes.value)

    //Stat sur sessions
    stats.push(statTotalSessions.value)

    //Stat sur le jeu pref
    stats.push(statFavoriteGame.value)

    //Stat sur la moyenne de gain
    stats.push(statAverageAmountWin.value)

    return stats
  })

  //Animation apparition
  gsap.to(".sessionCard", {
      opacity: 1,
      scale: 1,
      duration: 0.3,
      ease: "power2.in",
      stagger: 0.1
  })

</script>

<template>
  
  <InputPrice :inputClass=getClassOnAmount[0] :buttonClass=getClassOnAmount[1] text="Gains totaux" disabled="true" :price="forceSign.format(getAllGains)"/>

  <div class="subtitle">
    <h2>Récentes sessions</h2>
    <RouterLink class="item" to="/sessions">
      <a>Voir tout</a>
    </RouterLink>
  </div>

  <div class="sessions">
    <SessionCard v-for="n in isEnoughBig" :session="reversedSessions[n-1]"/>
    <RouterLink class="item" to="/session">
      <div class="addSessionCard">
        <img src="../assets/icons/add.png" alt="Ajouter une session">
        <p>Ajouter une session</p>
      </div>
    </RouterLink>
  </div>

  <div class="subtitle">
    <h2>Statistiques</h2>
  </div>

  <div class="stats">
    <Stat v-for="stat in generateStats" :bigNumber="stat.bigNumber" :corps="stat.corps" :icon="stat.icon" :class="stat.class"/>
  </div>

</template>

<style scoped>

  .sessions {
    padding: 0 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .addSessionCard {
    background-color: #fff;
    border-radius: 20px;
    border: dashed 2px #CACACA;
    height: 80px;
    width: 95%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    font-size: 16px;
    gap: 10px;
    color: #fff;
  }

  .addSessionCard img {
    height: 30px;
    width: auto;
  }

  .inputBox {
    width: 90%;
    height: 120px;
    margin: auto;
    margin-top: 50px;
  }

  .inputBox button {
    margin-top: -10px;
  }

  .stats {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin: auto;
    gap: 20px;
  }

</style>