<script setup>
    import { computed } from 'vue';

    const props = defineProps(['name','selected',"selectedClass"])
    defineEmits(['clicked'])

    const setClass = computed(() => {
        if (props.selected) {
            return "selected" + " " + props.selectedClass
        } else {
            return ""
        }
    })


</script>

<template>
    <!-- {{ selected }} -->
    <!-- <button @click="$emit(`clicked`)" :class="{ selected: selected, [selectedClass]: selected }">{{ name }}</button> -->
    <button @click="$emit('clicked')" :class="setClass">{{ name }}</button>
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

    .winner {
        background-color: rgb(210, 146, 28) !important;
        filter: drop-shadow(0 0 30px rgb(210, 183, 28));
    }

    .looser {
        background-color: rgb(248, 72, 41) !important;
        filter: drop-shadow(0 0 30px rgb(248, 72, 41));
    }

</style>