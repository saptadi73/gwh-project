<template>
    <NavbarGwh :menuLight="'nav-light'" :navLight=true :searchMenu="'text-white'" />
    <!-- Start Hero -->
    <section
        class="relative table w-full items-center py-36 bg-[url('../../assets/images/bg/bg_kos.jpg')] bg-top bg-no-repeat bg-cover">
        <div class="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900"></div>
        <div class="container relative">
            <div class="grid grid-cols-1 pb-8 text-center mt-10">
                <h3 class="text-4xl leading-normal tracking-wider font-semibold text-white">Kamar Kos yang Available</h3>
            </div><!--end grid-->
        </div><!--end container-->

        <div class="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
            <ul class="tracking-[0.5px] mb-0 inline-block">
                <li
                    class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white">
                    <router-link to="/">Kahuripan</router-link>
                </li>
                <li class="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i
                        class="mdi mdi-chevron-right"></i></li>
                <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white"
                    aria-current="page">Kos</li>
            </ul>
        </div>
    </section><!--end section-->
    <!-- End Hero -->

    <!-- Start -->
    <section class="relative md:py-24 py-16">
        <div class="container relative">
            <div class="grid md:grid-cols-12 grid-cols-1 gap-6">
                <div class="lg:col-span-4 md:col-span-4">

                    <!-- price filter -->
                    <pricefilter />
                    <!-- price filter -->

                </div>

                <div class="lg:col-span-8 md:col-span-8">
                    <div class="grid grid-cols-1 gap-6">
                        <div v-for="item in datas" :key="item" class="group rounded-md shadow dark:shadow-gray-700">
                            <div class="md:flex md:items-center">
                                <div
                                    class="relative overflow-hidden md:shrink-0 md:rounded-md rounded-t-md shadow dark:shadow-gray-700 md:m-3 mx-3 mt-3">
                                    <img :src="item.image"
                                        class="h-full w-full object-cover md:w-48 md:h-56 scale-125 group-hover:scale-100 duration-500"
                                        alt="">
                                    <div class="absolute top-0 start-0 p-4">
                                        <span v-if="item.availibility === 'ready'"
                                            class="bg-green-800 text-white text-[12px] px-2.5 py-1 font-medium rounded-md h-5">10%
                                            Off</span>
                                        <span v-if="item.availibility === 'soon'"
                                            class="bg-blue-500 text-white text-[12px] px-2.5 py-1 font-medium rounded-md h-5">25%
                                            Off</span>
                                        <span v-if="item.availibility === 'waiting'"
                                            class="bg-red-500 text-white text-[12px] px-2.5 py-1 font-medium rounded-md h-5">20%
                                            Off</span>
                                    </div>
                                    <div class="absolute top-0 end-0 p-4">
                                        <a href="javascript:void(0)"
                                            class="size-8 inline-flex justify-center items-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-full text-slate-100 dark:text-slate-700 focus:text-red-500 dark:focus:text-red-500 hover:text-red-500 dark:hover:text-red-500"><i
                                                class="mdi mdi-heart text-[20px] align-middle"></i></a>
                                    </div>
                                </div>

                                <div class="p-4 w-full">
                                    <p class="flex items-center text-slate-400 font-medium mb-2"><i
                                            data-feather="map-pin" class="text-red-500 size-4 me-1"></i>
                                        {{ item.country }}</p>
                                    <router-link to="/tour-detail-one"
                                        class="text-lg font-medium hover:text-red-500 duration-500 ease-in-out">{{
        item.city }}</router-link>

                                    <div class="flex items-center mt-2">
                                        <span class="text-slate-400">Rating:</span>
                                        <ul class="text-lg font-medium text-amber-400 list-none ms-2">
                                            <li class="inline"><i class="mdi mdi-star align-middle"></i></li>
                                            <li class="inline"><i class="mdi mdi-star align-middle"></i></li>
                                            <li class="inline"><i class="mdi mdi-star align-middle"></i></li>
                                            <li class="inline"><i class="mdi mdi-star align-middle"></i></li>
                                            <li class="inline"><i class="mdi mdi-star align-middle"></i></li>
                                            <li class="inline text-black dark:text-white text-sm">5.0({{ item.rating }})</li>
                                        </ul>
                                    </div>

                                    <div
                                        class="mt-4 pt-4 flex justify-between items-center border-t border-slate-100 dark:border-gray-800">
                                        <h5 class="text-lg font-medium text-red-500">{{item.tarif}}</h5>
                                        <h6 class="text-sm font-bold text-red-400">{{item.discount1}}</h6>
                                        <h6 class="text-sm font-bold text-blue-400">{{item.discount2}}</h6>
                                        <h6 class="text-sm font-bold text-green-400">{{item.discount3}}</h6>

                                        <a href="" class="text-slate-400 hover:text-red-500">Selengkapnya<i
                                                class="mdi mdi-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div><!--end content-->
                    </div><!--end grid-->

                    <pagination />

                </div>
            </div>
        </div><!--end container-->
    </section><!--end section-->
    <!-- End -->
    <FooterGwh />
    <switcher :switcherBack=true />
</template>

<script>
import NavbarGwh from '@/components/NavbarGwh.vue';
import pricefilter from '@/components/listing/tour-grid/price-filter.vue';
import pagination from '@/components/listing/tour-grid/pagination.vue';
import switcher from '@/components/switcher.vue'
import FooterGwh from '@/components/FooterGwh.vue';
export default {
    name: 'listRight',
    data() {
        return {
            datas: [
                {
                    image: require('../../../../assets/images/listing/kos_1.jpg'),
                    country: 'Ukuran 3x4m, Spring bed',
                    city: 'Internet, Listrik Bayar Sendiri',
                    discount1: '10% off /3 bulan',
                    discount2: '25% off /6 bulan',
                    discount3: '35% off /12 bulan',
                    tarif: 'Rp 750k /bulan',
                    rating: 35,
                    availibility: 'ready',
                },
                {
                    image: require('../../../../assets/images/listing/kos_2.jpg'),
                    country: 'Ukuran 3x4m, Spring bed',
                    city: 'Internet, Listrik (include)',
                    discount1: '15% off /3 bulan',
                    discount2: '20% off /6 bulan',
                    discount3: '30% off /12 bulan',
                    tarif: 'Rp 850k /bulan',
                    rating: 37,
                    availibility: 'waiting',
                },
                {
                    image: require('../../../../assets/images/listing/kos_3.jpg'),
                    country: 'Ukuran 3x4m, Spring bed',
                    city: 'Internet, Listrik (include)',
                    discount1: '15% off /3 bulan',
                    discount2: '20% off /6 bulan',
                    discount3: '30% off /12 bulan',
                    tarif: 'Rp 850k /bulan',
                    rating: 33,
                    availibility: 'soon',
                },
                {
                    image: require('../../../../assets/images/listing/kos_4.jpg'),
                    country: 'Ukuran 3x3m, Spring bed',
                    city: 'Internet, Listrik Bayar Sendiri',
                    discount1: '5% off /3 bulan',
                    discount2: '10% off /6 bulan',
                    discount3: '30% off /12 bulan',
                    tarif: 'Rp 650k /bulan',
                    rating: 102,
                    availibility: 'soon',
                },
                {
                    image: require('../../../../assets/images/listing/kos_5.jpg'),
                    country: 'Ukuran 4x4m, Spring bed',
                    city: 'Internet, Listrik (include)',
                    discount1: '15% off /3 bulan',
                    discount2: '20% off /6 bulan',
                    discount3: '30% off /12 bulan',
                    tarif: 'Rp 950k /bulan',
                    rating: 37,
                    availibility: 'waiting',
                },
                {
                    image: require('../../../../assets/images/listing/kos_6.jpg'),
                    country: 'Ukuran 3x4m, Kayu',
                    city: 'Internet, Listrik Bayar Sendiri',
                    discount1: '15% off /3 bulan',
                    discount2: '20% off /6 bulan',
                    discount3: '30% off /12 bulan',
                    tarif: 'Rp 750k /bulan',
                    rating: 37,
                    availibility: 'soon',
                },
                {
                    image: require('../../../../assets/images/listing/kos_7.jpg'),
                    country: 'Ukuran 3x4m, Tanpa Tempat Tidur',
                    city: 'Internet, Listrik Bayar Sendiri',
                    discount1: '20% off /3 bulan',
                    discount2: '40% off /6 bulan',
                    discount3: '50% off /12 bulan',
                    tarif: 'Rp 500k /bulan',
                    rating: 36,
                    availibility: 'waiting',
                },
                {
                    image: require('../../../../assets/images/listing/kos_8.jpg'),
                    country: 'Ukuran 3x4m, Tanpa Tempat Tidur',
                    city: 'No Internet, Listrik Bayar Sendiri',
                    discount1: '15% off /3 bulan',
                    discount2: '20% off /6 bulan',
                    discount3: '30% off /12 bulan',
                    tarif: 'Rp 450k /bulan',
                    rating: 37,
                    availibility: 'ready',
                },
                {
                    image: require('../../../../assets/images/listing/kos_9.jpg'),
                    country: 'Ukuran 3x4m, Spring bed',
                    city: 'Internet, Listrik (include)',
                    discount1: '15% off /3 bulan',
                    discount2: '20% off /6 bulan',
                    discount3: '30% off /12 bulan',
                    tarif: 'Rp 850k /bulan',
                    rating: 37,
                    availibility: 'soon',
                },
                {
                    image: require('../../../../assets/images/listing/kos_91.jpg'),
                    country: 'Ukuran 3x4m, Spring bed',
                    city: 'Internet, Listrik (include)',
                    discount1: '25% off /3 bulan',
                    discount2: '30% off /6 bulan',
                    discount3: '35% off /12 bulan',
                    tarif: 'Rp 1150k /bulan',
                    rating: 8,
                    availibility: 'soon',
                },
                {
                    image: require('../../../../assets/images/listing/kos_92.jpg'),
                    country: 'Ukuran 3x4m, Spring bed',
                    city: 'Internet, Listrik (include)',
                    discount1: '25% off /3 bulan',
                    discount2: '30% off /6 bulan',
                    discount3: '35% off /12 bulan',
                    tarif: 'Rp 1150k /bulan',
                    rating: 5,
                    availibility: 'ready',
                },
                {
                    image: require('../../../../assets/images/listing/kos_93.jpg'),
                    country: 'Ukuran 3x4m, Spring bed',
                    city: 'Internet, Listrik (include)',
                    discount1: '25% off /3 bulan',
                    discount2: '30% off /6 bulan',
                    discount3: '35% off /12 bulan',
                    tarif: 'Rp 1150k /bulan',
                    rating: 7,
                    availibility: 'ready',
                },
            ]
        }
    },
    components: {
        NavbarGwh,
        pricefilter,
        pagination,
        FooterGwh,
        switcher
    },
    mounted() {
        this.scrollToTop()
    },
    methods: {
        scrollToTop() {
            window.scrollTo(0, 0);
        }
    },
}
</script>

<style lang="scss" scoped></style>