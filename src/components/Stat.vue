<script setup>
    import { computed } from 'vue';

    const props = defineProps(['bigNumber','corps','icon','class','mini'])



</script>

<template>
    <div class="statCard" :class="class">
        <img :src="icon" alt="" v-if="icon">
        <p id="bigNumber" v-if="!icon">{{ bigNumber }}</p>
        <p>{{corps}}</p>
    </div>
</template>

<style scoped>
    .statCard {
        border: solid 2px #CACACA;
        border-radius: 40px;
        height: 220px;
        width: 95%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        box-sizing: border-box;
        padding: 15px 20px;
    }

    .statCard img {
        height: 105px;
        width: auto;
    }

    .mini {
        background: linear-gradient(220deg,rgba(11, 22, 42, 1) 32%, rgba(11, 22, 42, 1) 46%, rgb(210, 146, 28));
        width: 45%;
    }

    .big {
        background: linear-gradient(220deg,rgba(11, 22, 42, 1) 32%, rgba(11, 22, 42, 1) 46%, rgb(248, 72, 41));
    }

    .statCard p {
        margin: 0;
        color: #fff;
    }

    #bigNumber {
        font-size: 70px;
    }

</style>