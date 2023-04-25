<script setup>
import { Ref } from 'vue';
defineProps({
    icon_status: {
        type: Boolean,
        default: null
    },
    showOutline:{
        type: Boolean,
        default: null,
    },
    valor: String
});

</script>

<template>

    <div class="tablero__fila__casilla" :class="{
          'hover:icon_x_outline':valor==='X' && valor===null && icon_status===false,
          'hover:icon_o_outline':valor==='O' && valor===null && icon_status===false,
          'icon_o':valor==='O' && icon_status==true,
          'icon_x':valor==='X' && icon_status==true}">

    </div>

</template>
