<template>
    <transition name="game-over" mode="out-in">
      <div v-if="isGameOver" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <h2 class="text-4xl font-bold text-red-500 mb-4" v-if="ganador">¡{{ ganador }} ha ganado!</h2>
        <h2 class="text-4xl font-bold text-red-500 mb-4" v-else>¡Empate!</h2>
        <img class="border border-white cursor-pointer hover:bg-yellow-500 border-2
            object-center rounded-xl w-10 h-10 object-scale-down border-dashed bg-cyan-500"
            src="./assets/icons/icon-restart.svg" alt="Reset" @click="reset()">
      </div>
    </transition>
  </template>

<script>
export default{
    props:{
        GameOver: Boolean,
    },
    methods:{
        reset(){
            this.$emit('reset', false)
        }
    }
}
</script>
