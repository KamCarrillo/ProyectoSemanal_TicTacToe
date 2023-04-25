import Button from '../components/Button.vue'

<script setup>
    import { ref , computed } from 'vue'

    const jugador= ref("X");

    const showOutline = ref(false)

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

    const jugada = (x,y) => {
      if (ganador.value) return;
      if (tablero.value[x][y] !== "") return;
      
      tablero.value [x][y] = jugador.value;

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
  <main class="pt-8 text-center  bg-blue-400 min-h-screen text-white">
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
      <div v-for="(fila,x) in tablero" :key="x" class="tablero__fila">
        <div v-for="(col,y) in fila" :key="y" class="tablero__fila__casilla :"
        :class="{'hover:icon_x_outline':jugador==='X' && showOutline===true && col==='',
        'hover:icon_o_outline':jugador==='O' && showOutline===true && col===''}"
         @click="jugada(x,y)" @mouseenter="showOutline=true" @mouseleave="showOutline=false">
            <img class="object-scale-down" v-if="col === 'X'" src="./assets/icons/icon-x.svg" alt="X">
            <img class="object-scale-down" v-if="col === 'O'" src="./assets/icons/icon-o.svg" alt="O">
            <!--
            <img class="object-scale-down" v-show="showOutline && !ganador" v-if="jugador === 'X' && col===''" src="./assets/icons/icon-x-outline.svg" alt="">
            <img class="object-scale-down" v-show="showOutline && !ganador" v-if="jugador === 'O' && col===''" src="./assets/icons/icon-o-outline.svg" alt="">
            -->
        </div>
      </div>

      <div class="tablero__score">
        <span class=" cuadro--texto bg-blue-200 tablero__score__cuadro"><p>X (YOU)</p><p>0</p></span> <!--TODO hacer dinamico-->
        <span class=" bg-gray-100 tablero__score__cuadro"><p>TIES</p><p>0</p></span>
        <span class=" bg-yellow-200 tablero__score__cuadro"><p>Y (CPU)</p><p>0</p></span>
      </div>
    </div>

    <!--DISPLAY DE GANADOR--> 
    <div v-show="ganador">
      <h3 class="text-6xl font-bold mb-8"> El ganador es "{{ganador}}" !!</h3>
    </div>


  </main>
 
	
</template>

<style scoped>
</style>


 