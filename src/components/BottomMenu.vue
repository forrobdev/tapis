<script>
    export default {
        emits: ['home','add','sessions']
    }
</script>

<template>
    <nav>
        <button @click="$emit('home')">
            <img src="../assets/icons/home.png" alt="Accueil">
            <a>Accueil</a>
        </button>
        <button @click="$emit('add')">
            <img src="../assets/icons/add.png" alt="Ajouter une session">
            <a>Ajouter</a>
        </button>
        <button @click="$emit('sessions')">
            <img src="../assets/icons/sessions.png" alt="Toutes les sessions">
            <a>Sessions</a>
        </button>
    </nav>
</template>

<style scoped>
    @import url(../css/reset.css);

    nav {
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: black;
    }

    button {
        background-color: transparent;
        border: none;
        padding: 0;
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    button img {
        height: 40px;
        width: auto;
    }

</style>