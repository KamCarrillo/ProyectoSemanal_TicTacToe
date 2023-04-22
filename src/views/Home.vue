<template>
    <main className="pt-8 text-center  bg-blue-400 min-h-screen text-white">
    
    <div class>
        <div>
            <img class="m-8" src="./assets/icons/icon-x.svg">
            <img class="m-8" src="./assets/icons/icon-o.svg">
        </div>
        <div>
            <!--Aqui va el selector de jugador-->
    
        </div>
        <div>
            <Button  class="bg-yellow-400 text-gray-800 py-1 px-4 h-14 rounded-md border-none text-lg font-bold cursor-pointer shadow-md hover:bg-gray-100">NEW GAME (VS CPU)</Button>
            <Button  class="bg-blue-200 text-gray-800 py-1 px-4 h-14 rounded-md border-none text-lg font-bold cursor-pointer shadow-md hover:bg-gray-100">NEW GAME (VS PLAYER)</Button>
        </div>
    </div>
    </main>
</template>

<script>
export default {};
</script>