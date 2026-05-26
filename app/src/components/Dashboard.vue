<script setup lang="ts">

</script>

<template>
    <div class="w-screen min-h-screen bg-gray-900/90">

        <!-- Gauge -->
        <div class="block w-full min-h-2 mb-16 border-b-2">
            <div class="w-full flex">
                <div class="bg-transparent flex-1 border-black border-2 text-gray-400 font-mono text-md text-center">
                    <p>Suhu</p>
                    <p class="text-sm my-2">°C</p>
                </div>
                <div class="bg-transparent flex-1 border-black border-2 text-gray-400 font-mono text-md text-center">
                    <p>Garam</p>
                    <p class="text-sm my-2">Dummy</p>
                </div>
                <div class="bg-transparent flex-1 border-black border-2 text-gray-400 font-mono text-md text-center">
                    <p>PH</p>
                    <p class="text-sm my-2">22</p>
                </div>
                <div class="bg-transparent flex-1 border-black border-2 text-gray-400 font-mono text-md text-center">
                    <p>Oksigen</p>
                    <p class="text-sm my-2">Dummy</p>
                </div>
            </div>
        </div>

        <!-- Untuk data realtime -->
        <!-- <div class="block w-full min-h-20 bg-green-200 mb-56"> -->
        <div class="block w-full min-h-20 bg-transparent mb-20">
            <div class="block min-h-10 mx-5 rounded-md border-white border-2 bg-black">
                <div class="grid grid-cols-4 p-2 text-white font-mono">

                    <!-- Data 1 -->
                    <p class="text-left text-lg">Suhu</p>
                    <p class="text-left text-lg">:</p>
                    <p></p>
                    <p class="text-center text-lg">30C</p>

                    <!-- Data 2 -->
                    <p class="text-left text-lg">Garam</p>
                    <p class="text-left text-lg">:</p>
                    <p></p>
                    <p class="text-center text-lg">Dummy</p>

                    <!-- Data 3 -->
                    <p class="text-left text-lg">PH</p>
                    <p class="text-left text-lg">:</p>
                    <p></p>
                    <p class="text-center text-lg">19</p>

                    <!-- Data 4 -->
                    <p class="text-left text-lg">Oksigen</p>
                    <p class="text-left text-lg">:</p>
                    <p></p>
                    <p class="text-center text-lg">Dummy</p>

                </div>
            </div>
        </div>

        <!-- Untuk controller -->
        <div class="block w-full min-h-20">

            <!-- Untuk connection -->
            <div class="block w-full min-h-10 mb-18 p-4 bg-transparent">
                <div class="grid grid-cols-3 p-2 gap-y-5">
                    
                    <div class="text-lg text-center text-black bg-gray-200 active:bg-gray-500 active:shadow-sm transition-all duration-75 shadow-md shadow-black rounded-md p-1">Start</div>
                    <div></div>
                    <div class="text-lg text-center text-black bg-gray-200 active:bg-gray-500 active:shadow-sm transition-all duration-75 shadow-md shadow-black rounded-md p-1">Stop</div>


                    <div></div>
                    <div class="text-lg text-center text-black bg-gray-200 active:bg-gray-500 active:shadow-sm transition-all duration-75 shadow-md shadow-black rounded-md p-1">Calculate</div>
                    <div></div>
                </div>
            </div>

            <!-- Untuk movement -->
            <!-- <div class="block w-full min-h-20 bg-red-300"> -->
            <div class="block w-full min-h-20 bg-transparent">
                <div class="grid grid-cols-3 w-fit mx-auto gap-2">
    
                    <div></div>
                    <a class="h-16 w-16 flex items-center justify-center bg-gray-100 active:bg-gray-500 active:shadow-sm transition-all duration-75 rounded-2xl shadow-black shadow-md"><FontAwesomeIcon :icon="['fas', 'angles-up']" size="2xl" /></a>
                    <div></div>
    
                    <a class="h-16 w-16 flex items-center justify-center bg-gray-100 active:bg-gray-500 active:shadow-sm transition-all duration-75 rounded-2xl shadow-black shadow-md"><FontAwesomeIcon :icon="['fas', 'angles-left']" size="2xl" /></a>
                    <div></div>
                    <a class="h-16 w-16 flex items-center justify-center bg-gray-100 active:bg-gray-500 active:shadow-sm transition-all duration-75 rounded-2xl shadow-black shadow-md"><FontAwesomeIcon :icon="['fas', 'angles-right']" size="2xl" /></a>
    
                    <div></div>
                    <a class="h-16 w-16 flex items-center justify-center bg-gray-100 active:bg-gray-500 active:shadow-sm transition-all duration-75 rounded-2xl shadow-black shadow-md"><FontAwesomeIcon :icon="['fas', 'angles-down']" size="2xl" /></a>
                    <div></div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    mounted() {
        
    },
    methods: {
        
    }
}

</script>