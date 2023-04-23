<script setup>
const className = `w-full min-w-max
                flex justify-center gap-3 items-center
                text-white-default font-bold 
                rounded`;

defineProps({
    onClick: Function,
    icon: {
        type: String,
        default: null
    }
});

</script>

<template>
  <button type="button" v-on:click="onClick" v-bind:class="className">
  </button>
</template>