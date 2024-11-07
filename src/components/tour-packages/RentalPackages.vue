<template>
    <!-- Start -->

    <div class="container relative md:mt-24 mt-16">
        <div class="grid grid-cols-1 pb-8 text-center">
            <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Paket Rumah dan Apartemen Sewa Harian</h3>

            <p class="text-slate-400 max-w-xl mx-auto">Nikmati paket sewa apartement/rumah harian dengan harga diskon yang bervariasi</p>
        </div><!--end grid-->

        <div class="grid lg:grid-cols-2 grid-cols-1 mt-6 gap-6">
            <div v-for="item in datas" :key="item" class="group rounded-md shadow dark:shadow-gray-700">
                <div class="md:flex md:items-center">
                    <div
                        class="relative overflow-hidden md:shrink-0 md:rounded-md rounded-t-md shadow dark:shadow-gray-700 md:m-3 mx-3 mt-3">
                        <img :src="item.image"
                            class="h-full w-full object-cover md:w-48 md:h-56 scale-125 group-hover:scale-100 duration-500"
                            alt="">
                            <div class="absolute top-0 start-0 p-4">
                        <span v-if="item.discount === '10% Off > 7 hari'" class="bg-cyan-700 text-white text-[12px] px-2.5 py-1 font-medium rounded-md h-5">{{ item.discount }}</span>
                            <span v-if="item.discount === '25% Off > 7 hari'" class="bg-green-700 text-white text-[12px] px-2.5 py-1 font-medium rounded-md h-5">{{ item.discount }}</span>
                            <span v-if="item.discount === '40% Off > 15 hari'" class="bg-red-500 text-white text-[12px] px-2.5 py-1 font-medium rounded-md h-5">{{ item.discount }}</span>
                    </div>

                        <div class="absolute top-0 end-0 p-4">
                            <a href="javascript:void(0)"
                                class="size-8 inline-flex justify-center items-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-full text-slate-100 dark:text-slate-700 focus:text-red-500 dark:focus:text-red-500 hover:text-red-500 dark:hover:text-red-500"><i
                                    class="mdi mdi-heart text-[20px] align-middle"></i></a>
                        </div>
                    </div>

                    <div class="p-4 w-full">
                        <p class="flex items-center text-slate-400 font-medium mb-2"><i data-feather="map-pin"
                                class="text-red-500 size-4 me-1"></i> {{ item.country }}</p>
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
                                <li class="inline text-black dark:text-white text-sm">5.0({{item.rating}})</li>
                            </ul>
                        </div>

                        <div
                            class="mt-4 pt-4 flex justify-between items-center border-t border-slate-100 dark:border-gray-800">
                            <h5 class="text-lg font-medium text-red-500">{{ item.tarif}}</h5>

                            <a href="" class="text-slate-400 hover:text-red-500">Explore Now <i
                                    class="mdi mdi-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div><!--end content-->
        </div><!--end grid-->
    </div><!--end container-->

</template>

<script>
export default {
    name: 'tourPackages',
    data() {
        return {
            datas: [
                {
                    image: require('../../assets/images/listing/listing_1.jpg'),
                    country: 'Jakarta',
                    city: 'Menteng',
                    rating: 35,
                    tarif: 'Rp 150k/hari',
                    discount: '10% Off > 7 hari',
                },
                {
                    image: require('../../assets/images/listing/listing_2.jpg'),
                    country: 'Jakarta',
                    city: 'Kemang',
                    rating: 102,
                    tarif: 'Rp 225k / hari',
                    discount: '25% Off > 7 hari',

                },
                {
                    image: require('../../assets/images/listing/listing_3.jpg'),
                    country: 'Bandung',
                    city: 'Dago',
                    rating: 12,
                    tarif: 'Rp 350k /hari',
                    discount: '40% Off > 15 hari',

                },
                {
                    image: require('../../assets/images/listing/listing_4.jpg'),
                    country: 'Jakarta',
                    city: 'Senen',
                    rating: 89,
                    tarif: 'Rp 550k /hari',
                    discount: '10% Off > 7 hari',

                },
                {
                    image: require('../../assets/images/listing/listing_5.jpg'),
                    country: 'Jakarta',
                    city: 'Depok UI',
                    rating: 123,
                    tarif: 'Rp 250k /hari',
                    discount: '40% Off > 15 hari',

                },
                {
                    image: require('../../assets/images/listing/listing_6.jpg'),
                    country: 'Jakarta',
                    city: 'Depok UI',
                    tarif: 'Rp 550/hari',
                    discount: '25% Off > 7 hari',
                },
                {
                    image: require('../../assets/images/listing/listing_7.jpg'),
                    country: 'Bandung',
                    rating: 23,
                    tarif: 'Rp 550k /hari',
                    city: 'Setiabudi',
                    discount: '10% off > 7 hari',

                },
                {
                    image: require('../../assets/images/listing/listing_8.jpg'),
                    country: 'Bandung',
                    city: 'Geger Kalong',
                    tarif: 'Rp 750k /hari',
                    rating: 45,
                    discount: '20% Off > 7 hari',
                },
            ]
        }
    },
}
</script>

<style lang="scss" scoped></style>