<script>
import { store } from '@/store/index.js';
import { price } from '@/store/index.js';

</script>

<template>
    <div class="fakeinput">
        <input type="tel" placeholder="0,00" >
        <span>€</span>
    </div>
</template>

<style scoped>

    input {
        background-color: transparent;
        border: none;
        color: #fff;
        font-family: "Poppins", sans-serif;
        font-weight: 500;
        font-style: normal;
        outline: none;
        font-size: 50px;
        width: 200px;
        text-align: right;
    }

    .fakeinput {
        display: flex;
        width: fit-content;
        gap: 5px;
        font-weight: 500;
        font-size: 50px;
        margin: auto;
    }

</style>