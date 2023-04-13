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
    <h3 className="text-xl mb-3">Turno de "{{ jugador }}"</h3>

    <!--GRID-->
    <div className="flex flex-col items-center mb-8">
      <!--TABLERO-->  
      <div v-for="(fila,x) in tablero" :key="x" className="flex">
        <div v-for="(col,y) in fila" :key="y"
        className="m-1 border border-white w-20 h-20 rounded-xl hover:bg-blue-950
        flex items-center justify-center material-icons-outlined text-4xl cursor-pointer"
        @click="jugada(x,y)">

            {{ col ==="X" ? "close" : col === "O" ? "circle" : "" }}

        </div>
      </div>
    </div>

    <!--DISPLAY DE GANADOR--> 
    <div v-show="ganador">
      <h3 className="text-4xl font-bold mb-8"> El ganador es "{{ganador}}" !!</h3>
    </div>
    <!--BOTON DE REINICIO--> 
    <button type="button" className="border border-white
     w-20 h-10 rounded-xl" @click="reset()">Reset</button>
  </main>
	
</template>

<style scoped>
</style>
