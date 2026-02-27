<script setup>

    const props = defineProps(['name','icon',"id","selectedGameId"])
    defineEmits(['clicked'])

</script>

<template>
    <button class="tag" @click="$emit('clicked')" :class="{selected: selectedGameId = id}">
        <img :src="icon">
        <p>{{ name }}</p>
    </button>
</template>

<style scoped>

    .tag {
        display: flex;
        justify-content: center;
        align-items: center;
        border: solid 1px #CACACA;
        background-color: transparent;
        padding: 5px 20px;
        gap: 10px;
        border-radius: 100px;
    }

    .tag p {
        color: black;
        font-weight: 600;
    }

    .tag img {
        filter: contrast(0%);
        height: 25px;
        width: auto;
    }

    .selected {
        background-color: red;
    }

</style>