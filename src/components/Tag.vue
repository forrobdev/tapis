<script setup>

    const props = defineProps({
        name: String,
        icon: String,
        id: Number,
        selectedTagId: Number
    })
    defineEmits(['clicked'])

</script>

<template>
    <button class="tag" @click="$emit('clicked')" :class="{selected: selectedTagId === id}">
        <img :src="icon" v-show="selectedTagId != id && icon">
        <svg  v-show="selectedTagId === id" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="480" height="480" viewBox="0 0 24 24">
            <path d="M12,2C6.477,2,2,6.477,2,12c0,5.523,4.477,10,10,10s10-4.477,10-10C22,6.477,17.523,2,12,2z M10,17.414l-4.707-4.707 l1.414-1.414L10,14.586l7.293-7.293l1.414,1.414L10,17.414z"></path>
        </svg>
        <p>{{ name }}</p>
    </button>
</template>

<style scoped>

    .tag {
        display: flex;
        justify-content: center;
        align-items: center;
        border: solid 1px #CACACA;
        background-color: #fff;
        padding: 5px 20px;
        gap: 10px;
        border-radius: 100px;
    }

    .tag p {
        color: black;
        font-weight: 600;
    }

    .tag img {
        height: 25px;
        width: auto;
    }

    .selected {
        filter: drop-shadow(0px 3px 5px rgba(0, 0, 0, 0.327));
    }

    svg {
        height: 25px;
        width: auto;
    }

</style>