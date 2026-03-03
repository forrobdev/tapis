<script setup>
  import BottomMenu from '@/components/BottomMenu.vue';
  import SessionCard from '@/components/SessionCard.vue';
  import { store } from '@/store';
  import FilterPage from '@/components/FilterPage.vue';
  import { ref } from 'vue';
  import { computed } from 'vue';

  let filterVisible = ref(false)
  let filteredSessions = ref(store.value.sessions)

  const selectedWin = ref(-1)
  const selectedGameId = ref(-1)
  const selectedSort = ref(-1)
  const selectedTypeSort = ref(0)

  //Filtrer la liste des sessions par une victoire ou non
  function filterWin(list) {
    console.log("On passe ensuite au filtre de victoire ou non....")
    if (selectedWin.value === 0) {
      console.log("Ici on trie par victoires, marrant non ?")
      return list.filter(item => item.end - item.start > 0)
    } else if (selectedWin.value === 1) {
      console.log("Ici on trie par défaites, pas très marrant...")
      return list.filter(item => item.end - item.start < 0)
    } else {
      console.log("On ne trie pas ici vive la pollution !")
      return list
    }
  }

  //Filtrer la liste des sessions par le jeu
  function filterGameId(list) {
    console.log("On commencer par trier par jeu...")
    if ( selectedGameId.value != -1 ) {
      console.log("Ici on trie avec le jeu numéro", selectedGameId.value," c'est drolement fun !")
      return list.filter(item => item.gameId === selectedGameId.value)
    } else {
      console.log("On ne trie pas ici vive la pollution !")
      return list
    }
  }

  //Tout filtrer
  const filterAll = computed(() => {
    console.log("On va tout filtrer vous êtes prêts ? C'est parti avec", store.value.sessions," !")
    const a = filterWin(filterGameId(store.value.sessions))
    console.log("Et voilà ! Notre visite guidée s'arrête là, c'était drolement fun pas vrai ? On se voit la prochaine fois que quelqu'un filtre les résultats !")
    console.log("--------------------------------")
    return a
  })

  //Trier les sessions par 0 = Gain, 1 = Durée, 2 = Date
  const sortSessions = computed(() => {
    let sessions = filterWin(filterGameId(store.value.sessions))

    if (selectedSort.value === 0) {
      return [...sessions].sort((a, b) => {
        const gainA = a.end - a.start
        const gainB = b.end - b.start
      
        if (selectedTypeSort.value === 0) {
          return gainB - gainA
        } else {
          return gainA - gainB
        }
        
      })
    } else if (selectedSort.value === 1) {

      return [...sessions].sort((a, b) => {

        if (selectedTypeSort.value === 0) {
          return a.duration - b.duration
        } else {
          return b.duration - a.duration
        }
      })

    } else if (selectedSort.value === 2) {

      return [...sessions].sort((a, b) => {

        const gainA = a.id
        const gainB = b.id
      
        if (selectedTypeSort.value === 0) {
          return gainB - gainA
        } else {
          return gainA - gainB
        }
        
      })
    } 

    return sessions
  })

  //Un s ou pas à résultat
  const createResultsText = computed(() => {
    if (sortSessions.value.length > 1) {
      return sortSessions.value.length + " résulats"
    } else {
      return sortSessions.value.length + " résulat"
    }
  })


</script>

<template>
  <div class="subtitle">
    <div>
      <h2>Toutes les sessions</h2>
      <p id="numberResults">{{ createResultsText }}</p>
    </div>
    <button class="iconButton" @click="filterVisible = !filterVisible">
      <img src="../assets/icons/filter.png" alt="Filtrer les sessions">
    </button>
  </div>

  <div class="sessions">
    <SessionCard v-for="session in sortSessions" :session="session"/>
    <RouterLink class="item" to="/session" v-show="filterAll.length <= 0">
      <div class="addSessionCard">
        <img src="../assets/icons/add.png" alt="Ajouter une session">
        <p>Ajouter une session</p>
      </div>
    </RouterLink>
  </div>

  <FilterPage @clicked="filterVisible = !filterVisible" :is-visible="filterVisible" :selected-game-id="selectedGameId" :selected-win="selectedWin" :selected-sort="selectedSort" :selected-type-sort="selectedTypeSort" @new-selected-type-sort="selectedTypeSort = $event" @new-selected-sort="selectedSort = $event" @new-selected-win="selectedWin = $event" @new-selected-game-id="selectedGameId = $event"/>

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