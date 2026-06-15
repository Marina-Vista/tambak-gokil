<template>
    <div class=" w-screen h-screen overflow-hidden bg-gray-950/90">
        
        <!-- Baca kondisi -->
        <div class="w-full px-4 py-2">
            <table class="w-full table-fixed border-collapse bg-blue-500/50 border-3 border-gray-200/90 font-mono overflow-hidden text-white text-sm">
                <thead>
                    <tr>
                        <th colspan="4" class="text-center border-b-[3px] border-gray-200/90 p-[2px]">Hasil Data</th>
                    </tr>
                    <tr>
                        <th class="w-1/4 text-center border-r-[3px] border-gray-200/90 p-[2px]">Suhu</th>
                        <th class="w-1/4 text-center border-r-[3px] border-gray-200/90 p-[2px]">Garam</th>
                        <th class="w-1/4 text-center border-r-[3px] border-gray-200/90 p-[2px]">PH</th>
                        <th class="w-1/4 text-center p-[2px]">Oksigen</th> 
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="w-1/4 text-center border-r-[3px] border-gray-200/90 p-[2px]">28°C</td>
                        <td class="w-1/4 text-center border-r-[3px] border-gray-200/90 p-[2px]">Dummy</td>
                        <td class="w-1/4 text-center border-r-[3px] border-gray-200/90 p-[2px]">22</td>
                        <td class="w-1/4 text-center p-[2px]">Dummy</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- Untuk data realtime -->
        <!-- <div class="block w-full min-h-20 bg-green-200 mb-56"> -->
        <div class="block w-full min-h-20 bg-transparent mb-2 px-4 py-1">
            <div class="block min-h-10 border-gray-200/90 border-3 bg-blue-500/50">
                <div class="grid grid-cols-4 p-2 text-white font-mono">

                    <!-- Data 1 -->
                    <p class="text-left text-md mb-0.5">Suhu</p>
                    <p class="bg-gray-100/90 ml-0.5 mb-0.5"></p>
                    <p class="bg-gray-100/90 pl-0.5 mb-0.5 text-black text-center text-md">30C</p>
                    <p class="bg-gray-100/90 mb-0.5"></p>

                    <!-- Data 2 -->
                    <p class="text-left text-md mb-0.5">Garam</p>
                    <p class="bg-gray-100/90 ml-0.5 mb-0.5"></p>
                    <p class="bg-gray-100/90 pl-0.5 mb-0.5 text-black text-center text-md">Dummy</p>
                    <p class="bg-gray-100/90 mb-0.5"></p>

                    <!-- Data 3 -->
                    <p class="text-left text-md mb-0.5">PH</p>
                    <p class="bg-gray-100/90 ml-0.5 mb-0.5"></p>
                    <p class="bg-gray-100/90 pl-0.5 mb-0.5 text-black text-center text-md">19</p>
                    <p class="bg-gray-100/90 mb-0.5"></p>

                    <!-- Data 4 -->
                    <p class="text-left text-md">Oksigen</p>
                    <p class="bg-gray-100/90 ml-0.5"></p>
                    <p class="bg-gray-100/90 pl-0.5 text-black text-center text-md">Dummy</p>
                    <p class="bg-gray-100/90"></p>

                </div>
            </div>
        </div>

        <!-- Untuk controller -->
        <div class="block w-full min-h-20">

            <div class="w-full px-4">
                <div class="w-full bg-gray-200/90 rounded-md py-0.5 px-2 text-sm text-center font-semibold">
                    <span>{{ deviceStatus }}</span>
                </div>
            </div>

            <!-- Untuk connection -->
            <div class="block w-full min-h-10 mb-4 p-4 bg-transparent">
                <div class="grid grid-cols-3 p-2 gap-y-5 font-semibold">
                    
                    <div class="text-sm text-center text-black bg-gray-200 active:bg-gray-500 active:shadow-sm active:scale-95 transition-all shadow-md shadow-black rounded-md p-0.5">Start</div>
                    <div></div>
                    <div class="text-sm text-center text-black bg-gray-200 active:bg-gray-500 active:shadow-sm active:scale-95 transition-all shadow-md shadow-black rounded-md p-0.5">Stop</div>


                    <div></div>
                    <div class="text-sm text-center text-black bg-gray-200 active:bg-gray-500 active:shadow-sm active:scale-95 transition-all shadow-md shadow-black rounded-md p-0.5">Calculate</div>
                    <div></div>
                </div>
            </div>

            <!-- Untuk movement -->
            <!-- <div class="block w-full min-h-20 bg-red-300"> -->
            <div class="block w-full min-h-20 bg-transparent">
                <div class="grid grid-cols-3 w-fit mx-auto gap-2">
    
                    <div></div>
                    <a class="h-14 w-14 flex items-center justify-center bg-gray-100 active:bg-gray-500 active:shadow-sm transition-all duration-75 rounded-2xl shadow-black shadow-md"><FontAwesomeIcon :icon="['fas', 'angles-up']" size="lg" /></a>
                    <div></div>
    
                    <a class="h-14 w-14 flex items-center justify-center bg-gray-100 active:bg-gray-500 active:shadow-sm transition-all duration-75 rounded-2xl shadow-black shadow-md"><FontAwesomeIcon :icon="['fas', 'angles-left']" size="lg" /></a>
                    <div></div>
                    <a class="h-14 w-14 flex items-center justify-center bg-gray-100 active:bg-gray-500 active:shadow-sm transition-all duration-75 rounded-2xl shadow-black shadow-md"><FontAwesomeIcon :icon="['fas', 'angles-right']" size="lg" /></a>
    
                    <div></div>
                    <a class="h-14 w-14 flex items-center justify-center bg-gray-100 active:bg-gray-500 active:shadow-sm transition-all duration-75 rounded-2xl shadow-black shadow-md"><FontAwesomeIcon :icon="['fas', 'angles-down']" size="lg" /></a>
                    <div></div>
                </div>
            </div>
        </div>

    </div>
</template>

    <script>
    import { BleClient } from '@capacitor-community/bluetooth-le'

    export default {
        data() {
            return {
                deviceStatus: "No Device Connected",
                isConnected: false,
                intervalId: null
            }
        },
        mounted() {

            this.startDetection()
            
        },
        beforeUnmount() {

            clearInterval(this.intervalId)

        },
        methods: {

            startDetection() {
                clearInterval(this.intervalId)

                let delay

                if (this.isConnected) {
                    delay = 30000
                } else {
                    delay = 5000
                }

                this.intervalId = setInterval(() => {
                    this.checkConnection()
                }, delay)

            },
            async checkConnection() {
                this.deviceStatus = "Detecting..."
                
                try {

                    await BleClient.initialize()

                    const devices = await BleClient.getConnectedDevices([])

                    if (devices.length > 0) {
                        this.isConnected = true
                        this.deviceStatus = `${devices[0].name} Connected`
                    } else {
                        this.isConnected = false
                        this.deviceStatus = "No Device Connected"
                    }
                    
                } catch (error) {
                    this.isConnected = false
                    this.deviceStatus = "No Device Connected"
                }

                this.startDetection()
            }
            
        }
    }

    </script>