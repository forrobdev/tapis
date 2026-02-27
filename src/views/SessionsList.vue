<script setup>
import BottomMenu from '@/components/BottomMenu.vue';
import SessionCard from '@/components/SessionCard.vue';
import { store } from '@/store';

</script>

<template>

  <div class="subtitle">
    <div>
      <h2>Toutes les sessions</h2>
    </div>
  </div>

  <div class="sessions">
    <SessionCard v-for="session in store.sessions" :session="session"/>
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
</style>