<script setup>
    import { ref , computed } from 'vue'

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
  <main className="pt-8 text-center  bg-indigo-950 min-h-screen text-white">
    <!--TITULO-->
    <h1 className="mb-8 text-3xl font-bold uppercase">
		Tic-Tac-Toe
	  </h1>

    <!--JUGADOR-->
    <div className="flex flex-col  justify-center align-middle mb-4">
      <div className="border border-4 h-32 w-80  rounded-xl mx-auto">
        <h3 className="text-2xl mb-2">Turno de:</h3>
        <img className="mx-auto object-scale-down" v-if="jugador === 'X'" src="./assets/icons/icon-x.svg" alt="X">
        <img className="mx-auto object-scale-down" v-if="jugador === 'O'" src="./assets/icons/icon-o.svg" alt="O">
      </div>
    </div>

    <!--GRID-->
    <div className="flex flex-col items-center mb-8">
      <!--TABLERO-->  
      <div v-for="(fila,x) in tablero" :key="x" className="flex">
        <div v-for="(col,y) in fila" :key="y"
        className="m-2 border border-4 border-white w-24 h-24 rounded-xl 
        cursor-pointer hover:bg-blue-950
        flex items-center justify-center "
        @click="jugada(x,y)">
            <img v-if="col === 'X'" src="./assets/icons/icon-x.svg" alt="X">
            <img v-if="col === 'O'" src="./assets/icons/icon-o.svg" alt="O">
        </div>
      </div>
    </div>

    <!--DISPLAY DE GANADOR--> 
    <div v-show="ganador">
      <h3 className="text-6xl font-bold mb-8"> El ganador es "{{ganador}}" !!</h3>
    </div>

    <!--BOTON REINICIO-->
    <div className="flex flex-col items-center">
      <img className="border border-white cursor-pointer hover:bg-yellow-500 border-2
       object-center rounded-xl w-10 h-10 object-scale-down border-dashed bg-cyan-500" 
       src="./assets/icons/icon-restart.svg" alt="Reset" @click="reset()"> 
    </div>

  </main>
	
</template>

<style scoped>
</style>
