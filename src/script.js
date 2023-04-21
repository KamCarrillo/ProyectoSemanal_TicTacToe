import { ref, computed } from 'vue'

const jugador = ref("X");

const tablero = ref([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
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

const jugada = (x, y) => {
    if (ganador.value) return;


    if (tablero.value[x][y] !== "") return;


    tablero.value[x][y] = jugador.value;

    jugador.value = jugador.value === "X" ? "O" : "X";
}

const reset = () => {
    tablero.value = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];

    jugador.value = "X"
}