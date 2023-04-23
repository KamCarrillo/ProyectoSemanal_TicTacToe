<template>
    <main className="pt-8 text-center  bg-blue-400 min-h-screen text-white">

        <div class="flex flex-col items-center justify-center h-screen">
            <div class="inline-flex justify-center w-6">
                <img class="m-1" src="src\assets\icons\icon-x.svg">
                <img class="m-1" src="src\assets\icons\icon-o.svg">
            </div>
            <div class="flex justify-center">
                <div class="w-96 h-40 rounded-lg bg-blue-300 flex justify-center items-center">
                    <div class="items-center mt-0">
                        <p>PICK PLAYER 1'S MARK</p>
                    </div>
                    <div class="w-40 h-30  rounded-lg bg-white flex justify-center items-center">
                        <Button>
                            <img class="m-2 w-10" src="src\assets\icons\icon-x.svg">
                        </Button>
                        
                    </div>
                    <div class="w-40 h-30  rounded-lg bg-white flex justify-center items-center">
                        <Button>
                            <img class="m-2 w-10" src="src\assets\icons\icon-o.svg">
                        </Button>
                        
                    </div>
                </div>
            </div>
            <div class="flex flex-col items-center mt-8">
                <router-link to="/"
                    class="w-3/4 lg:w-3/4 bg-yellow-400 text-gray-800 py-2 px-4 h-12 rounded-md border-none text-lg font-bold cursor-pointer shadow-md hover:bg-gray-100 mb-4">NEW
                    GAME (VS CPU)</router-link>
                <router-link to="/"
                    class="w-3/4 lg:w-3/4 bg-blue-200 text-gray-800 py-2 px-4 h-12 rounded-md border-none text-lg font-bold cursor-pointer shadow-md hover:bg-gray-100">NEW
                    GAME (VS PLAYER)</router-link>
                <router-view />
            </div>
        </div>
    </main>
</template>

<script>
export default {};
</script>

<style>
.router-link {
    width: 100%;
}
</style>