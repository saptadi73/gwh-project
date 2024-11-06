<template>
    <div class="container relative">
        <div class="grid grid-cols-1 pb-8 text-center">
            <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Tours Packages</h3>

            <p class="text-slate-400 max-w-xl mx-auto">Planning for a trip? We will organize your trip with the best
                places and within best budget!</p>
        </div><!--end grid-->

        <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
            <div v-for="item in Packages" :key="item" class="group rounded-md shadow dark:shadow-gray-700">
                <div  class="relative overflow-hidden rounded-t-md shadow dark:shadow-gray-700 mx-3 mt-3">
                    <img :src="item.image" class="scale-125 group-hover:scale-100 duration-500"
                        alt="">
                    <div class="absolute top-0 start-0 p-4">
                        <span v-if="item.discount === '10% Off'" class="bg-red-500 text-white text-[12px] px-2.5 py-1 font-medium rounded-md h-5">{{ item.discount }}</span>
                            <span v-if="item.discount === '25% Off'" class="bg-red-500 text-white text-[12px] px-2.5 py-1 font-medium rounded-md h-5">{{ item.discount }}</span>
                    </div>

                    <div class="absolute top-0 end-0 p-4">
                        <a href="javascript:void(0)"
                            class="size-8 inline-flex justify-center items-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-full text-slate-100 dark:text-slate-700 focus:text-red-500 dark:focus:text-red-500 hover:text-red-500 dark:hover:text-red-500"><i
                                class="mdi mdi-heart text-[20px] align-middle"></i></a>
                    </div>
                </div>

                <div class="p-4">
                    <p class="flex items-center text-slate-400 font-medium mb-2"><i data-feather="map-pin"
                            class="text-red-500 size-4 me-1"></i> {{item.country}}</p>
                    <router-link to="/tour-detail-one"
                        class="text-lg font-medium hover:text-red-500 duration-500 ease-in-out">{{ item.city }}</router-link>

                    <div class="flex items-center mt-2">
                        <span class="text-slate-400">Rating:</span>
                        <ul class="text-lg font-medium text-amber-400 list-none ms-2">
                            <li class="inline"><i class="mdi mdi-star align-middle"></i></li>
                            <li class="inline"><i class="mdi mdi-star align-middle"></i></li>
                            <li class="inline"><i class="mdi mdi-star align-middle"></i></li>
                            <li class="inline"><i class="mdi mdi-star align-middle"></i></li>
                            <li class="inline"><i class="mdi mdi-star align-middle"></i></li>
                            <li class="inline text-black dark:text-white text-sm">5.0(30)</li>
                        </ul>
                    </div>

                    <div
                        class="mt-4 pt-4 flex justify-between items-center border-t border-slate-100 dark:border-gray-800">
                        <h5 class="text-lg font-medium text-red-500">$ 58 / Day</h5>

                        <a href="" class="text-slate-400 hover:text-red-500">Explore Now <i
                                class="mdi mdi-arrow-right"></i></a>
                    </div>
                </div>
            </div><!--end content-->
        </div><!--end grid-->

        <div class="mt-6 text-center">
            <router-link to="/grid-right-sidebar" class="text-slate-400 hover:text-red-500 inline-block">See More Tours <i
                    class="mdi mdi-arrow-right align-middle"></i></router-link>
        </div>
    </div><!--end container-->

</template>

<script>
import feather from 'feather-icons'
export default {
    name: 'toursPackeges',
    data() {
        return {
            Packages: [
                {
                    image: require('../../assets/images/listing/1.jpg'),
                    discount: '10% Off',
                    country: 'Dubai',
                    city: 'Cuba Sailing Adventure',
                    price: '$ 58 / Day'
                },
                {
                    image: require('../../assets/images/listing/2.jpg'),
                    discount: '',
                    country: 'Italy',
                    city: 'Tour in New York',
                    price: '$ 58 / Day'

                },
                {
                    image: require('../../assets/images/listing/3.jpg'),
                    discount: '',
                    country: 'Maldivas',
                    city: 'Discover Greece',
                    price: '$ 58 / Day'

                },
                {
                    image: require('../../assets/images/listing/4.jpg'),
                    discount: '',
                    country: 'USA',
                    city: 'Museum of Modern Art',
                    price: '$ 58 / Day'

                },
                {
                    image: require('../../assets/images/listing/5.jpg'),
                    discount: '',
                    country: 'Bali',
                    city: 'Peek Mountain View',
                    price: '$ 58 / Day'

                },
                {
                    image: require('../../assets/images/listing/6.jpg'),
                    discount: '25% Off',
                    country: 'Bangkok',
                    city: 'Hot Baloon Journey',
                    price: '$ 58 / Day'

                },
            ]

        }
    },
    mounted() {
        feather.replace();
    },
}
</script>

<style lang="scss" scoped></style>