<script setup>
  import BottomMenu from '@/components/BottomMenu.vue';
  import InputPrice from '@/components/InputPrice.vue';
  import { store } from '@/store';
  import { computed } from 'vue';
  import Session from '@/components/Session.vue';

  const getAllGains = computed(() => {
    let amount = 0
    store.value.sessions.forEach(element => {
      amount += element.end - element.start
    });
    return forceSign.format(amount)
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

</script>

<template>

  <InputPrice inputClass="winning" buttonClass="winner" text="Gains totaux" disabled="true" :price="getAllGains"/>

  <div class="subtitle">
    <h2>Récentes sessions</h2>
    <RouterLink class="item" to="/sessions">
      <a>Voir tout</a>
    </RouterLink>
  </div>

  <div class="sessions">
    <Session v-for="n in isEnoughBig" :session="store.sessions[n-1]"/>
    <RouterLink class="item" to="/add">
      <div class="addSessionCard">
        <img src="../assets/icons/add.png" alt="Ajouter une session">
        <p>Ajouter une session</p>
      </div>
    </RouterLink>
  </div>

</template>

<style scoped>

  .sessions {
    padding: 0 10px;
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

</style>