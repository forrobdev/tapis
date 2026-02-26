<script setup>

    import { store } from '@/store/index.js';

    defineProps(['inputClass',"text", 'buttonClass','disabled','price'])
    defineEmits(['input'])

</script>

<template>
    <div class="inputBox" :class="inputClass">
        <button :class="buttonClass">{{ text }}</button>
        <div class="fakeinput">
            <input type="number" placeholder="0,00" @input="$emit('input', $event.target.value)" v-if="!disabled">
            <span>{{ price }}€</span>
        </div>
    </div>
</template>

<style scoped>

    input {
        background-color: #ffffff00;
        border: none;
        color: #fff;
        font-family: "Poppins", sans-serif;
        font-weight: 500;
        font-style: normal;
        outline: none;
        font-size: 50px;
        width: 150px;
        text-align: right;
    }

    .fakeinput {
        display: flex;
        width: fit-content;
        justify-content: center;
        align-items: center;
        font-weight: 500;
        font-size: 50px;
        margin: auto;
        padding-right: 30px;
    }

    .inputBox {
        border: solid 2px;
        border-radius: 18px;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: fit-content;
    }

    .winning {
        border-color: rgb(210, 146, 28);
    }

    .loosing {
        border-color: rgb(248, 72, 41);
    }

    button {
        margin-top: -20px;
        background-color: transparent;
        border: none;
        color: #fff;
        border-radius: 100px;
        padding: 10px 30px;
        font-size: 16px;
        font-family: "Poppins", sans-serif;
        font-weight: 500;
        font-style: normal;
    }

    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    input[type=number] {
        -moz-appearance: textfield;
    }


</style>