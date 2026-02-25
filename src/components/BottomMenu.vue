<script>
    export default {
        emits: ['home','add','sessions']
    }
</script>

<template>
    <nav>
        <RouterLink class="item" to="/">
            <img src="../assets/icons/home.png" alt="Accueil">
            <p>Accueil</p>
        </RouterLink>
        <RouterLink class="item" to="/add">
            <img src="../assets/icons/add.png" alt="Ajouter une session">
            <p>Ajouter</p>
        </RouterLink>
        <RouterLink class="item" to="/sessions">
            <img src="../assets/icons/sessions.png" alt="Toutes les sessions">
            <p>Sessions</p>
        </RouterLink>
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

    .item {
        background-color: transparent;
        border: none;
        padding: 0;
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-decoration: none;
    }

    .item img {
        height: 40px;
        width: auto;
    }

</style>