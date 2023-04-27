<template>
  <main class="pt-8 text-center bg-blue-400 min-h-screen text-white flex justify-center items-center">
    <svg width="72" height="32" xmlns="http://www.w3.org/2000/svg"
      style="position: absolute; top: 25%; left: 50%; transform: translate(-50%, -50%); z-index: 1;">
      <g fill="none" fill-rule="evenodd">
        <path
          d="M8.562 1.634 16 9.073l7.438-7.439a3 3 0 0 1 4.243 0l2.685 2.685a3 3 0 0 1 0 4.243L22.927 16l7.439 7.438a3 3 0 0 1 0 4.243l-2.685 2.685a3 3 0 0 1-4.243 0L16 22.927l-7.438 7.439a3 3 0 0 1-4.243 0L1.634 27.68a3 3 0 0 1 0-4.243L9.073 16 1.634 8.562a3 3 0 0 1 0-4.243L4.32 1.634a3 3 0 0 1 4.243 0Z"
          fill="#31C3BD" />
        <path
          d="M56.1 0c8.765 0 15.87 7.106 15.87 15.87 0 8.766-7.105 15.871-15.87 15.871-8.765 0-15.87-7.105-15.87-15.87C40.23 7.106 47.334 0 56.1 0Zm0 9.405a6.466 6.466 0 1 0 0 12.931 6.466 6.466 0 0 0 0-12.931Z"
          fill="#F2B137" fill-rule="nonzero" />
      </g>
    </svg>
    <div class="pick-player">
      <div
        class="bg-blue-300 py-1 px-4 h-[180px] rounded-xl border-none text-lg font-bold cursor-pointer ustify-center items-center shadow-">
        <h2 class="mt-3 text-gray-200 text-sm">PICK PLAYER 1´S MARK</h2>
        <div class="pick-side bg-blue-300 h-[72px] w-[412px] flex items-center mt-5 m-2 justify-center rounded-3xl">
          <div class="flex items-center justify-between bar mx-5">
            <button class="button-a flex mx-9 hover:bg-gray-200" @click="playerChoice='X'">
              <svg class="align-top" width="64" height="64" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z"
                  fill="#DBE8ED" fill-rule="evenodd" />
              </svg>
            </button>
            <button class="button-b mx-12" @click="playerChoice='O'">
              <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z"
                  fill="#DBE8ED" />
              </svg>
            </button>

          </div>
        </div>
        <h3 class="mt-4 text-gray-200 text-xs">REMEMBER: X GOES FIRST</h3>
      </div>
      <br />
      <div class="boton-menu-container">
        <router-link to="/game" :playerChoice="playerChoice" :AIplayer="true"> 
          <button @click="computadora()"
            class="boton w-[400px] bg-yellow-200 px-8 py-4 text-lg text-gray-800 rounded-lg font-bold cursor-pointer m-5 shadow-md hover:bg-gray-200">
            NEW GAME (VS CPU) 
          </button>
        </router-link>
      </div>
      <br />
      <div class="boton-menu-container">
        <router-link to="/game" :playerChoice="playerChoice" :AIplayer="false">
          <button @click="multijugador()"
            class="boton w-[400px] bg-blue-200 px-8 py-4 text-lg text-gray-800 rounded-lg font-bold cursor-pointer m-0 shadow hover:bg-gray-200">
            NEW GAME (VS CPU) 
          </button>
        </router-link>
      </div>
  </div>
</main>
</template>

<script setup>
import { ref } from 'vue';

  const playerChoice=ref('X')
  const AIplayer=ref(false)
//export default {};
</script>