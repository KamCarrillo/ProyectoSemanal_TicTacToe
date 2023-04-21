<template>
    <transition name="game-over" mode="out-in">
        <div v-if="isGameOver" class="fixed inset-0 flex items-center justify-center">
            <h2 class="text-4xl font-bold text-red-500 mb-4">¡{{ winner }} ha ganado!</h2>
            <img className="border border-white cursor-pointer hover:bg-yellow-500 border-2
                object-center rounded-xl w-10 h-10 object-scale-down border-dashed bg-cyan-500"
                src="./assets/icons/icon-restart.svg" alt="Reset" @click="reset()">
        </div>
    </transition>
</template>

<script>
export default {
    props: {
        winner: String,
        isGameOver: Boolean,
    },
    methods: {
        reset() {
            this.$emit('reset');
        },
    },
};
</script>

<style>
    .game-over-enter-active,
    .game-over-leave-active {
        transition: all 0.3s ease-out;
    }

    .game-over-enter-from,
    .game-over-leave-to {
        opacity: 0;
    }

    .game-over-enter-to,
    .game-over-leave-from {
        opacity: 1;
    }
</style>