import Button from '../components/Button.vue'

<script setup>
    import { ref , computed } from 'vue'
    import GameOver from './components/modals/GameOver.vue'

    const jugador= ref("X");

    const tablero = ref([
      ["","",""],
      ["","",""],
      ["","",""]
    ])

    const calculateWinner = (tablero) => {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ]

      for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
        if (tablero[a] && tablero[a] === tablero[b] && tablero[a] === tablero[c]) {
          return tablero[a]
        }
      }
      return null
    }

    const ganador = computed(() => calculateWinner(tablero.value.flat()));
    
    const isGameOver = ref(false)

    const jugada = (x,y) => {
      if (ganador.value) return;
      if (tablero.value[x][y] !== "") return;
      
      tablero.value [x][y] = jugador.value;

      if(calculateWinner(tablero.value.flat())){
        isGameOver.value = true;
      }else if(tablero.value.flat().every((val)=>val!= "")){
        isGameOver.value = true;
      }


      jugador.value = jugador.value === "X" ? "O" : "X";
    }

    const reset = () => {
      tablero.value=[
        ["","",""],
        ["","",""],
        ["","",""]
      ];
      jugador.value="X"
    }

</script>

<template>
  <main className="pt-8 text-center  bg-blue-400 min-h-screen text-white">
    <!--TABLERO-->
    <div class="tablero">
      <!--MENU SUPERIOR-->
      <div class="tablero__fila flex-row">
        <div class="fila__div"> <!--LOGO-->
          <span class="fila__div--logo">
            <svg class="icon_logo"></svg>
          </span>
        </div>
        <div class="fila__div"> <!--TURNO-->
          <span class="fila__div--turno items-center">
            <img class="object-scale-down h-5 h-5 filter grayscale " v-if="jugador === 'X'" src="./assets/icons/icon-x.svg" alt="X">
            <img class="object-scale-down h-5 h-5 filter grayscale" v-if="jugador === 'O'" src="./assets/icons/icon-o.svg" alt="O">
            <p>TURN</p>
          </span>
        </div><!--RESET-->
        <div class="fila__div flex-row-reverse ">
          <span class="fila__div--restart bg-gray-100 hover:bg-gray-200 " @click="reset()">
            <svg class="icon_restart h-10 w-10"></svg>
          </span>          
        </div>
      </div>
      <!--CASILLAS-->
      <div v-for="(fila,x) in tablero" :key="x" className="tablero__fila">
        <div v-for="(col,y) in fila" :key="y" className="tablero__fila__casilla hover:bg-yellow-500" @click="jugada(x,y)">
            <img class="object-scale-down" v-if="col === 'X'" src="./assets/icons/icon-x.svg" alt="X">
            <img class="object-scale-down" v-if="col === 'O'" src="./assets/icons/icon-o.svg" alt="O">
        </div>
      </div>
      <div class="tablero__score">
        <span class=" cuadro--texto bg-blue-200 tablero__score__cuadro"><p>X (YOU)</p><p>0</p></span> <!--TODO hacer dinamico-->
        <span class=" bg-gray-100 tablero__score__cuadro"><p>TIES</p><p>0</p></span>
        <span class=" bg-yellow-200 tablero__score__cuadro"><p>Y (CPU)</p><p>0</p></span>
      </div>
    </div>
    <!--DISPLAY DE GANADOR--> 

    <div v-if="isGameOver" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div class="bg-blue-400 shadow-lg rounded-lg p-6 w-3/4">
        <div>
          <h3 class="text-2x1 font-bold">PLAYER {{ ganador }} WON</h3>
        </div>
        <h2 class="text-4xl font-bold text-bg-blue-400 mb-0 mt-12 flex items-center justify-center" v-if="ganador">
          <img class="m-8" v-if="ganador === 'X'" src="./assets/icons/icon-x.svg">
          <img class="m-8" v-else-if="ganador === 'O'" src="./assets/icons/icon-o.svg">
          <span class="text-center" :style="{ color: ganador === 'X' ? '#65E9E4' : '#F2B137' }">TAKES THE ROUND</span>
        </h2>
       <div>
        <router-link to="/home" class="w-1/2 bg-gray-100 text-gray-800 py-1 px-4 h-12 rounded-md border-none text-lg font-bold cursor-pointer shadow-md hover:bg-yellow-400">QUITAR</router-link>
        <router-view/>
        <Button class="bg-yellow-400 text-gray-800 py-1 px-4 h-14 rounded-md border-none text-lg font-bold cursor-pointer shadow-md hover:bg-gray-100 m-7" v-on:click="reset(); isGameOver=false">
          NEXT ROUND
        </Button>
       </div>
      </div>
    </div>
  </main>
</template>

