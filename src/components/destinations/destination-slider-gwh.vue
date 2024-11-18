<template>
    <!-- Start -->
    <section class="relative  overflow-hidden" id="destinations">
        <div class="container relative">
            <div class="grid grid-cols-1 pb-8 text-center">
                <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Top Destinations
                </h3>

                <p class="text-slate-400 max-w-xl mx-auto">Planning for a trip? We will organize your trip with the best
                    places and within best budget!</p>
            </div><!--end grid-->

            <div v-if="Destinations" class="grid grid-cols-1 relative mt-6">
                <div class="tiny-five-item">
                    <div v-for="item in destinations" :key="item" class="tiny-slide">
                        <div class="group relative overflow-hidden rounded-md shadow dark:shadow-gray-800 m-1">
                            <img :src="item.image"
                                class="w-full h-72 object-cover scale-125 group-hover:scale-100 duration-500" alt="">
                            <div
                                class="absolute inset-0 bg-gradient-to-b to-slate-900 from-transparent opacity-0 group-hover:opacity-100 duration-500">
                            </div>
                            <div class="absolute p-4 bottom-0 start-0">
                                <a href=""
                                    class="text-lg font-medium text-white hover:text-red-500 duration-500 ease-in-out">{{
                item.place }}</a>
                                <p class="text-white/70 group-hover:text-white text-sm duration-500">{{ item.hotel }}
                                </p>
                            </div>
                        </div>
                    </div><!--end content-->
                </div>
            </div><!--end grid-->

            <div v-else class="grid grid-cols-1 relative mt-4">
                <div class="tiny-five-item">
                    <div v-for="item in destinations" :key="item" class="tiny-slide">
                        <div class="group text-center m-2">
                            <div class="relative overflow-hidden rounded-full">
                                <img :src="item.image"
                                    class="w-full md:h-32 h-36 object-cover scale-125 group-hover:scale-100 duration-500 shadow dark:shadow-gray-800"
                                    alt="">
                            </div>

                            <div class="mt-2">
                                <a href="" class="text-lg font-medium hover:text-red-500 duration-500 ease-in-out">{{
                item.place }}</a>
                                <p class="text-slate-400 text-sm duration-500">{{ item.hotel }}</p>
                            </div>
                        </div>
                    </div><!--end slide-->
                </div>
            </div>
        </div><!--end container-->
    </section>
</template>

<script>
import { onMounted, } from 'vue';
import { tns } from 'tiny-slider/src/tiny-slider';
export default {
    props: {
        Destinations: {
            type: Boolean,
            required: true,
        }
    },
    name: 'destiNations',
    data() {

        return {
            destinations: [
                {
                    image: require('../../assets/images/listing/listing_1.jpg'),
                    place: 'Depok, Jakarta',
                    hotel: '123 kamar kost, 1 ruko'
                },
                {
                    image: require('../../assets/images/listing/listing_2.jpg'),
                    place: 'Singapore',
                    hotel: '3 Hotels'
                },
                {
                    image: require('../../assets/images/listing/listing_3.jpg'),
                    place: 'Paris, France',
                    hotel: '3 Hotels'
                },
                {
                    image: require('../../assets/images/listing/listing_4.jpg'),
                    place: 'Goa, India',
                    hotel: '3 Hotels'
                },
                {
                    image: require('../../assets/images/listing/listing_5.jpg'),
                    place: 'Whistler, Canada',
                    hotel: '3 Hotels'
                },
                {
                    image: require('../../assets/images/listing/listing_6.jpg'),
                    place: 'Kuala Lumpur, Malaysia',
                    hotel: '3 Hotels'
                },
                {
                    image: require('../../assets/images/listing/listing_7.jpg'),
                    place: 'Sydney, Australia',
                    hotel: '3 Hotels'
                },
            ]
        }
    },
    setup() {
        onMounted(() => {
            tns({
                container: '.tiny-five-item',
                controls: true,
                mouseDrag: true,
                loop: true,
                rewind: true,
                autoplay: true,
                autoplayButtonOutput: false,
                autoplayTimeout: 3000,
                navPosition: "bottom",
                controlsText: ['<i class="mdi mdi-chevron-left "></i>', '<i class="mdi mdi-chevron-right"></i>'],
                nav: false,
                speed: 400,
                gutter: 0,
                responsive: {
                    1025: {
                        items: 5
                    },

                    992: {
                        items: 4
                    },

                    767: {
                        items: 3
                    },

                    425: {
                        items: 1
                    },
                },
            });
        });
    },
}
</script>

<style lang="scss" scoped></style>