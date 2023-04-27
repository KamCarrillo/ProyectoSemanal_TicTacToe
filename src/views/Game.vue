<script setup>
    import { ref, computed } from 'vue'
    //import GameOver from './components/modals/GameOver.vue'

    defineProps({
        playerChoice:{
            type:String,
            default: "X",
        },
        AIplayer:{
            type:Boolean,
            default: false,
        },
    })

    const tablero = ref([
        ["", "", ""], //0 1 2
        ["", "", ""], //3 4 5
        ["", "", ""]  //6 7 8
    ])

    const calculateWinner = (tablero) => {
        const lines = [//Condiciones de victoria
        [0, 1, 2], [3, 4, 5], [6, 7, 8],  //Horizontal
        [0, 3, 6], [1, 4, 7], [2, 5, 8],  //Vertical
        [0, 4, 8], [2, 4, 6] //Diagonal
        ]

        for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i]
        if (tablero[a] && tablero[a] === tablero[b] && tablero[a] === tablero[c]) {
            return tablero[a]
        }
        }
        return null
    }


    const jugador = ref("X");

    const contX = ref(0)
    const contO = ref(0)
    const contTie = ref(0)

    const showOutline = ref(false)

    const ganador = computed(() => calculateWinner(tablero.value.flat()));

    const isGameOver = ref(false)

    const jugada = (x, y) => {
        //console.log(this.AIplayer)
        //console.log(this.playerChoice)

        if (ganador.value) return;
        if (tablero.value[x][y] !== "") return;

        tablero.value[x][y] = jugador.value;

        if (calculateWinner(tablero.value.flat())) {
        isGameOver.value = true;
        if (jugador.value === 'X') {
            contX.value++;
        } else if (jugador.value === 'O') {
            contO.value++;
        }
        } else if (tablero.value.flat().every((val) => val != "")) {
        isGameOver.value = true;
        contTie.value++;
        }

        jugador.value = jugador.value === "X" ? "O" : "X";

        if (jugador.value === "O" && !isGameOver.value) {
        let x, y;
        do {
            x = Math.floor(Math.random() * 3);
            y = Math.floor(Math.random() * 3);
        } while (tablero.value[x][y] != "");
        jugada(x, y);
        }
    }

    const reset = () => {
        tablero.value = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
        ];
        jugador.value = "X";
        isGameOver.value = false;
    }
</script>

<template>

<main className="pt-8 text-center bg-blue-400 min-h-screen text-white">
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
            <!--<svg class="h-10 w-10 " url="./assets/icons/icon-o.svg"></svg>-->
            <img class="object-scale-down h-5 filter grayscale " v-if="jugador === 'X'" src="../assets/icons/icon-x.svg"
              alt="X">
            <img class="object-scale-down h-5 filter grayscale" v-if="jugador === 'O'" src="../assets/icons/icon-o.svg"
              alt="O">
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
      <div v-for="(fila, x) in tablero" :key="x" class="tablero__fila">
        <div v-for="(col, y) in fila" :key="y" class="tablero__fila__casilla :" :class="{
            'hover:icon_x_outline': jugador === 'X' && showOutline === true && col === '',
            'hover:icon_o_outline': jugador === 'O' && showOutline === true && col === ''
          }" @click="jugada(x, y)" @mouseenter="showOutline = true" @mouseleave="showOutline = false">
          <img class="object-scale-down" v-if="col === 'X'" src="../assets/icons/icon-x.svg" alt="X">
          <img class="object-scale-down" v-if="col === 'O'" src="../assets/icons/icon-o.svg" alt="O">
          <!--
              <img class="object-scale-down" v-show="showOutline && !ganador" v-if="jugador === 'X' && col===''" src="./assets/icons/icon-x-outline.svg" alt="">
              <img class="object-scale-down" v-show="showOutline && !ganador" v-if="jugador === 'O' && col===''" src="./assets/icons/icon-o-outline.svg" alt="">
              -->
        </div>
      </div>

      <div class="tablero__score">
        <span class=" cuadro--texto bg-blue-200 tablero__score__cuadro">
          <p>X (YOU)</p>
          <p>{{ contX }}</p>
        </span> <!--TODO hacer dinamico-->
        <span class=" bg-gray-100 tablero__score__cuadro">
          <p>TIES</p>
          <p>{{ contTie }}</p>
        </span>
        <span class=" bg-yellow-200 tablero__score__cuadro">
          <p>Y (CPU)</p>
          <p>{{ contO }}</p>
        </span>
      </div>
    </div>
    <!--DISPLAY DE GANADOR-->

    <div v-if="isGameOver" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div class="bg-blue-400 shadow-lg rounded-lg p-6 w-3/4">
        <div>
          <h3 class="text-2x1 font-bold"><span v-if="!ganador" class="text-2x1 font-bold"> NO </span> PLAYER {{ ganador }}
            WON</h3>
        </div>
        <h2 class="text-4xl font-bold text-bg-blue-400 mb-0 mt-12 flex items-center justify-center" v-if="ganador">
          <img class="m-8" v-if="ganador === 'X'" src="../assets/icons/icon-x.svg">
          <img class="m-8" v-else-if="ganador === 'O'" src="../assets/icons/icon-o.svg">
          <span class="text-center" :style="{ color: ganador === 'X' ? '#65E9E4' : '#F2B137' }">TAKES THE ROUND</span>
        </h2>
        <!--<router-link to="/" class="w-1/2 bg-gray-100 text-gray-800 py-1 px-4 h-12 rounded-md border-none text-lg font-bold cursor-pointer shadow-md hover:bg-yellow-400">QUITAR</router-link>
        <router-view/>-->
        <button
          class="bg-yellow-400 text-gray-800 py-1 px-4 h-14 rounded-md border-none text-lg font-bold cursor-pointer shadow-md hover:bg-gray-100"
          v-on:click="reset(); isGameOver = false">
          Siguiente Ronda
        </button>
      </div>
    </div>
  </main>

</template>