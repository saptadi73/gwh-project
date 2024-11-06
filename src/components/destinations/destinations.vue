<template>
    <!-- Start -->
            <div class="container relative">
                <div class="grid grid-cols-1 pb-8 text-center">
                    <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Top Destinations</h3>

                    <p class="text-slate-400 max-w-xl mx-auto">Planning for a trip? We will organize your trip with the best places and within best budget!</p>
                </div><!--end grid-->

                <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 relative mt-6 gap-6">
                    <div v-for="item in destinations" :key="item" class="group relative overflow-hidden rounded-md shadow dark:shadow-gray-800">
                        <img :src="item.image" class="scale-125 group-hover:scale-100 duration-500" alt="">
                        <div class="absolute inset-0 bg-gradient-to-b to-slate-900 from-transparent opacity-0 group-hover:opacity-100 duration-500"></div>
                        <div class="absolute p-4 bottom-0 start-0">
                            <a href="" class="text-lg font-medium text-white hover:text-red-500 duration-500 ease-in-out">{{item.place}}</a>
                            <p class="text-white/70 group-hover:text-white text-sm duration-500">{{ item.hotel }}</p>
                        </div>
                    </div><!--end content-->
                </div><!--end grid-->
            </div><!--end container-->
</template>

<script>
    export default {
        name: 'destinationCompo',
        data() {
            return {
                destinations: [
                {
                    image: require('../../assets/images/listing/1.jpg'),
                    place: 'Rome, Italy',
                    hotel: '3 Hotels'
                },
                {
                    image: require('../../assets/images/listing/2.jpg'),
                    place: 'Singapore',
                    hotel: '3 Hotels'
                },
                {
                    image: require('../../assets/images/listing/3.jpg'),
                    place: 'Paris, France',
                    hotel: '3 Hotels'
                },
                {
                    image: require('../../assets/images/listing/4.jpg'),
                    place: 'Goa, India',
                    hotel: '3 Hotels'
                },
                {
                    image: require('../../assets/images/listing/5.jpg'),
                    place: 'Whistler, Canada',
                    hotel: '3 Hotels'
                },
                {
                    image: require('../../assets/images/listing/6.jpg'),
                    place: 'Kuala Lumpur, Malaysia',
                    hotel: '3 Hotels'
                },
                {
                    image: require('../../assets/images/listing/7.jpg'),
                    place: 'Sydney, Australia',
                    hotel: '3 Hotels'
                },
                {
                    image: require('../../assets/images/listing/8.jpg'),
                    place: 'Virginia Beach',
                    hotel: '3 Hotels'
                },
            ]
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>