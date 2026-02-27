<script setup>
import BottomMenu from '@/components/BottomMenu.vue';
import SessionCard from '@/components/SessionCard.vue';
import { store } from '@/store';
import FilterPage from '@/components/FilterPage.vue';
import { ref } from 'vue';

let filterVisible = ref(false)

</script>

<template>

  <div class="subtitle">
    <div>
      <h2>Toutes les sessions</h2>
      <p id="numberResults">3 résulats</p>
    </div>
    <button class="iconButton" @click="filterVisible = !filterVisible">
      <img src="../assets/icons/filter.png" alt="Filtrer les sessions">
    </button>
  </div>

  <div class="sessions">
    <SessionCard v-for="session in store.sessions" :session="session"/>
  </div>

  <FilterPage @clicked="filterVisible = !filterVisible" v-show="filterVisible"/>

  {{ filterVisible }}

</template>

<style scoped>

  .sessions {
    padding: 0 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  #numberResults {
    color: #CACACA;
    font-weight: 300;
    margin-top: 0px;
  }

  .subtitle {
    align-items: flex-start;
  }

</style>