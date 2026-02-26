<script setup>
    import { computed } from 'vue';
    import { store } from '@/store';
    import { useTimeAgo } from '@vueuse/core'

    const props = defineProps(['session'])
    defineEmits(['clicked'])

    console.log(props.session.id)

    const getGame = computed(() => {
        const game = store.value.games.find(item => item.id === props.session.gameId)
        return game
    })

    //Redonner le signe devant le nombre
    const forceSign = new Intl.NumberFormat('fr-FR', {
        signDisplay: 'exceptZero'
    });

    const timeAgo = useTimeAgo(new Date(props.session.timeStamp))

</script>

<template>
<!-- {{ store }} -->
<div class="sessionCard">
    <div class="left">
        <img :src="getGame.icon" alt="BackJack">
        <div class="title">
            <p id="game">{{ getGame.name }}</p>
            <p id="time">{{session.duration + " min • " + timeAgo}}</p>
        </div>
    </div>
    <p id="price">{{forceSign.format(session.end - session.start) + "€"}}</p>
</div>

</template>

<style scoped>

    .sessionCard {
        background-color: #fff;
        border-radius: 20px;
        border: solid 2px #CACACA;
        height: 80px;
        width: 95%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        overflow: hidden;
        background: linear-gradient(220deg,rgba(11, 22, 42, 1) 32%, rgba(11, 22, 42, 1) 46%, rgba(248, 72, 41, 1) 95%);
    }

    .left {
        display: flex;
        justify-content: left;
        align-items: center;
    }

    .title {
        margin-left: -30px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    #game {
        margin: 0;
        font-size: 16px;
        color: #fff;
    }

    #time {
        margin: 0;
        font-size: 12px;
        color: #CACACA;
    }

    #price {
        font-size: 20px;
    }

    img {
        position: relative;
        transform: rotateZ(20deg);
        left: -50px;
        bottom: -15px;
        height: 100px;
        width: auto;
        /* filter: drop-shadow(0px 0px 20px rgb(248, 72, 41)); */
    }

</style>