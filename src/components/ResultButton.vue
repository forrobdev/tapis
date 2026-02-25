<script>
    import { price } from '@/store';

    export default {
        props: ['name','selected',"selectedClass"],
        emits: ['clicked']
    }

</script>

<template>
    <!-- {{ selected }} -->
    <button @click="$emit(`clicked`)" :class="[{ selected: selected }, selectedClass]">{{ name }}</button>
</template>

<style scoped>

    button {
        cursor: pointer;
        background-color: transparent;
        border: solid #CACACA 1px;
        border-radius: 100px;
        color: #cacaca;
        width: 130px;
        height: 40px;
        font-family: "Poppins", sans-serif;
        font-weight: 500;
        font-style: normal;
    }

    .selected {
        border: none;
        color: #fff;
    }

</style>