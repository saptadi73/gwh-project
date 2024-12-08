<template>
    <navbar :menuLight="'nav-light'" :navLight=true :searchMenu="'text-white'" />
    <!-- Start Hero -->
    <section
        class="relative table w-full items-center py-36 bg-[url('../../assets/images/bg/bg_5.jpg')] bg-top bg-no-repeat bg-cover">
        <div class="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900"></div>
        <div class="container relative">
            <div class="grid grid-cols-1 pb-8 text-center mt-10">
                <h3 class="text-4xl leading-normal tracking-wider font-semibold text-white">Rumah Jual/Sewa</h3>
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
                    aria-current="page">Rumah Tinggal</li>
            </ul>
        </div>
    </section><!--end section-->
    <!-- End Hero -->

    <section class="relative md:py-24 py-16">
        <div class="container relative">
            <div class="grid lg:grid-cols-2 grid-cols-1 gap-6">
                <div v-for="item in datas" :key="item" class="group rounded-md shadow dark:shadow-gray-700">
                    <div class="md:flex md:items-center">
                        <div
                            class="relative overflow-hidden md:shrink-0 md:rounded-md rounded-t-md shadow dark:shadow-gray-700 md:m-3 mx-3 mt-3">
                            <img :src="item.image"
                                class="h-full w-full object-cover md:w-48 md:h-56 scale-125 group-hover:scale-100 duration-500"
                                alt="">
                            <div class="absolute top-0 start-0 p-4">
                                <span v-if="item.discount === '10% Off'"
                                    class="bg-red-500 text-white text-[12px] px-2.5 py-1 font-medium rounded-md h-5">10%
                                    Off</span>
                                <span v-if="item.discount === '25% Off'"
                                    class="bg-red-500 text-white text-[12px] px-2.5 py-1 font-medium rounded-md h-5">25%
                                    Off</span>
                                <span v-if="item.discount === '20% Off'"
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
                            <p class="flex items-center text-slate-400 font-medium mb-2"><i data-feather="map-pin"
                                    class="text-red-500 size-4 me-1"></i> {{ item.country }}</p>
                            <router-link to="/tour-detail-one"
                                class="text-lg font-medium hover:text-red-500 duration-500 ease-in-out">{{ item.city
                                }}</router-link>

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
                                <h5 class="text-lg font-medium text-red-500">Rental / Beli</h5>

                                <a href="" class="text-slate-400 hover:text-red-500">Selengkapnya<i
                                        class="mdi mdi-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div><!--end content-->
            </div>
            <pagination />
        </div>
    </section>
    <fooTer />
      <switcher :switcherBack=true />
</template>

<script>
import navbar from '@/components/NavbarGwh';
import pagination from '@/components/listing/tour-grid/pagination'
import fooTer from '@/components/FooterGwh';
import switcher from '@/components/switcher.vue'
export default {
    name: 'tourList',
    data() {
        return {
            datas: [
                {
                    image: require('../../../../assets/images/listing/rumah_1.jpg'),
                    country: 'Jakarta',
                    city: 'Puri Kembangan Jakarta',
                    discount: '10% Off',
                },
                {
                    image: require('../../../../assets/images/listing/rumah_2.jpg'),
                    country: 'Jakarta',
                    city: 'Pantai Indah Kapuk',
                    discount: '',

                },
                {
                    image: require('../../../../assets/images/listing/rumah_3.jpg'),
                    country: 'Bekasi',
                    city: 'Grand Wisata',
                    discount: '25% Off',

                },
                {
                    image: require('../../../../assets/images/listing/rumah_4.jpg'),
                    country: 'Jakarta',
                    city: 'Kota Wisata, Cibubur',
                    discount: '',

                },
                {
                    image: require('../../../../assets/images/listing/rumah_5.jpg'),
                    country: 'Bekasi',
                    city: 'Royal Park Residence',
                    discount: '',

                },
                {
                    image: require('../../../../assets/images/listing/rumah_6.jpg'),
                    country: 'Bekasi',
                    city: 'Vida Valley, Mustikajaya',
                    discount: '25% Off',
                },
                {
                    image: require('../../../../assets/images/listing/rumah_7.jpg'),
                    country: 'Bekasi',
                    city: 'Kemang Pratama II',
                    discount: '10% Off',

                },
                {
                    image: require('../../../../assets/images/listing/rumah_8.jpg'),
                    country: 'Bekasi',
                    city: 'Kemang Pratama I',
                    discount: '20% Off',
                },
                {
                    image: require('../../../../assets/images/listing/rumah_9.jpg'),
                    country: 'Jakarta',
                    city: 'Bintaro Sektor 9',
                    discount: '25% Off',
                },
                {
                    image: require('../../../../assets/images/listing/rumah_91.jpg'),
                    country: 'Depok',
                    city: 'Grand Depok City',
                    discount: '',
                },
                {
                    image: require('../../../../assets/images/listing/rumah_92.jpg'),
                    country: 'Depok',
                    city: 'Grand Depok City',
                    discount: '',
                },
                {
                    image: require('../../../../assets/images/listing/listing_9.jpg'),
                    country: 'Jakarta',
                    city: 'Kota Wisata, Cibubur',
                    discount: '',
                },
            ]
        }
    },
    components: {
        navbar,
        pagination,
        fooTer,
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