<template>
  <main class="pt-8 text-center bg-blue-400 min-h-screen text-white">
      <div class="pick-player">
        <h2>PICK PLAYER 1´S MARK</h2>
        <div class="flex justify-center">
          <div class="pick-side bg-gray-900 h-[100px] w-[380px] flex items-center justify-center rounded-3xl">
            <div class="flex items-center justify-between bar mx-5">
              <button class="button-a flex bg-gray-900 mx-9">
              <svg class = "align-top" width="64" height="64" xmlns="http://www.w3.org/2000/svg"
                ><path
                  d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z"
                  fill="#DBE8ED"
                  fill-rule="evenodd"
              /></svg>
            </button>
            <button class="button-b mx-12">
              <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg"
                ><path
                  d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z"
                  fill="#DBE8ED"
              /></svg>
            </button>
          </div>
        </div>
      </div>
      <br />
      <div class="boton-menu-container">
        <button @click="computadora()" class="boton bg-yellow-400 px-8 py-4 text-lg text-gray-800 rounded-lg font-bold cursor-pointer shadow-md hover:bg-gray-200">
          NEW GAME (VS CPU)
        </button>
      </div>
      <br />
      <div class="boton-menu-container">
        <button @click="multijugador()" class="boton bg-blue-500 px-8 py-4 text-lg text-gray-800 rounded-lg font-bold cursor-pointer shadow-md hover:bg-gray-200">
          NEW GAME (VS PLAYER)
        </button>
      </div>
    </div>
  </main>
</template>
<script>
export default {};
</script>