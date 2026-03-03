<script setup>
    import gsap from 'gsap';
    import Tag from './Tag.vue';
    import { store } from '@/store';
    import { ref, Transition } from 'vue';
    import bjMiniIcon from "@/assets/icons/bj.png"
    import rouletteMiniIcon from "@/assets/icons/roulette.png"
    import machineMiniIcon from "@/assets/icons/machine.png"
    import crossIcon from "@/assets/icons/plus.png"

    const props = defineProps({
                    isVisible: Boolean,
                    selectedGameId: Number,
                    selectedWin: Number,
                    selectedSort: Number,
                    selectedTypeSort: Number
                });
    defineEmits(['clicked','newSelectedGameId','newSelectedWin','newSelectedSort','newSelectedTypeSort'])
    
    import bjIcon from "@/assets/icons/bj.png"
    const gameIcons = [bjMiniIcon,rouletteMiniIcon,machineMiniIcon]

    //Animations lever/descente
    const onEnter = (el, done) => {
        gsap.fromTo(el, 
            { y: "100%" }, 
            { 
                y: "0%", 
                duration: 0.4,
                ease: "power4.out",
                onComplete: done
            }
        );
    };

    const onLeave = (el, done) => {
        gsap.to(el, { 
            y: "100%", 
            duration: 0.3, 
            ease: "power4.out",
            onComplete: done
        });
    };

</script>

<template>
    <Transition @enter="onEnter" @leave="onLeave" :css="false" >
        <div id="card" v-show="isVisible">
            <div class="subtitle">
                <h2>Paramètres</h2>
                <div id="right">
                    <p @click="$emit('newSelectedWin', -1); $emit('newSelectedGameId', -1), $emit('newSelectedSort', -1)">Suprimer tout</p>
                    <button class="iconButton" @click="$emit('clicked')">
                        <img src="../assets/icons/arrow.png" alt="Supprimer la session">
                    </button>
                </div>
            </div>
            <div class="subtitle">
                <h3>Filtrer par jeu</h3>
            </div>
            <div class="tags">
                <Tag v-for="game in store.games" :name="game.name" :icon="gameIcons[store.games.indexOf(game)]" :id="game.id" :selected-tag-id="selectedGameId" @clicked="$emit('newSelectedGameId', game.id)"/>
            </div>
            <div class="subtitle">
                <h3>Filtrer par session</h3>
            </div>
            <div class="tags">
                <Tag name="Gagné" icon="" :id="0" :selected-tag-id="selectedWin" @clicked="$emit('newSelectedWin', 0)"/>
                <Tag name="Perdu" icon="" :id="1" :selected-tag-id="selectedWin" @clicked="$emit('newSelectedWin', 1)"/>
            </div>
            <div class="subtitle">
                <h3>Trier par</h3>
            </div>
            <div class="tags">
                <Tag name="Gain" icon="" :id="0" :selected-tag-id="selectedSort" @clicked="$emit('newSelectedSort', 0)"/>
                <Tag name="Durée" icon="" :id="1" :selected-tag-id="selectedSort" @clicked="$emit('newSelectedSort', 1)"/>
                <Tag name="Date" icon="" :id="2" :selected-tag-id="selectedSort" @clicked="$emit('newSelectedSort', 2)"/>
            </div>
            <div class="subtitle">
                <h3>Type de tri</h3>
            </div>
            <div class="tags">
                <Tag name="Croissant" icon="" :id="0" :selected-tag-id="selectedTypeSort" @clicked="$emit('newSelectedTypeSort', 0)"/>
                <Tag name="Décroissant" icon="" :id="1" :selected-tag-id="selectedTypeSort" @clicked="$emit('newSelectedTypeSort', 1)"/>
            </div>
        </div>
    </Transition>
</template>

<style scoped>

    #right {
        display: flex;
    }

    #right p {
        color: rgb(248, 72, 41) !important;
    }

    #card {
        background-color: #fff;
        width: 100%;
        height: fit-content;
        padding: 25px 30px;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        border-radius: 46px 46px 0px 0px;
        box-sizing: border-box;
    }

    #card p {
        color: black;
    }

    h2, h3 {
        color: black;
    }

    .subtitle {
        margin: 0;
        padding: 0;
    }

    h3 {
        color: #CACACA;
        font-weight: 500;
    }

    .iconButton img {
        transform: rotateZ(90deg);
        height: 40px;
    }

    .slider {
        display: flex;
        overflow-y: scroll;
        gap: 10px;
    }

    .tags {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: left;
        gap: 10px;
    }

</style>