<template>
    <navbar :menuLight="'nav-light'" :navLight=true :searchMenu="'text-white'" />
    <!-- Start Hero -->
    <section
        class="relative table w-full items-center py-36 bg-[url('../../assets/images/bg/bg_2.jpg')] bg-top bg-no-repeat bg-cover">
        <div class="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900"></div>
        <div class="container relative">
            <div class="grid grid-cols-1 pb-8 text-center mt-10">
                <h3 class="text-4xl leading-normal tracking-wider font-semibold text-white">Ruang Kantor</h3>
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
                    aria-current="page">Office</li>
            </ul>
        </div>
    </section><!--end section-->
    <!-- End Hero -->

    <section class="relative md:py-24 py-16">
        <div class="container relative">
            <div class="grid md:grid-cols-12 grid-cols-1 gap-6">
                <div class="lg:col-span-4 md:col-span-5 md:order-2 order-1">

                    <!-- price filter -->
                    <pricefilter />
                    <!-- price filter -->
                </div>

                <div class="lg:col-span-8 md:col-span-7 md:order-1 order-2">
                    <div class="grid lg:grid-cols-2 grid-cols-1 gap-6">
                        <div v-for="item in datas" :key="item" class="group rounded-md shadow dark:shadow-gray-700">
                            <div class="relative overflow-hidden rounded-t-md shadow dark:shadow-gray-700 mx-3 mt-3">
                                <img :src="item.image" class="scale-125 group-hover:scale-100 duration-500" alt="">
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

                            <div class="p-4">
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
                                    <h5 class="text-lg font-medium text-red-500">Rental/Miliki</h5>

                                    <a href="" class="text-slate-400 hover:text-red-500">Selengkapnya<i
                                            class="mdi mdi-arrow-right"></i></a>
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
    <fooTer />
    <switcher :switcherBack=true />
</template>

<script>
import navbar from '@/components/NavbarGwh';
import pricefilter from '@/components/listing/tour-grid/price-filter-office';
import pagination from '@/components/listing/tour-grid/pagination.vue';
import fooTer from '@/components/FooterGwh';
import switcher from '@/components/switcher.vue'
export default {
    name: 'gridRight',
    data() {
        return {
            datas: [
                {
                    image: require('../../../../assets/images/listing/office_1.jpg'),
                    country: 'Jakarta',
                    city: 'Dharmawangsa Building',
                    discount: '10% Off',
                },
                {
                    image: require('../../../../assets/images/listing/office_2.jpg'),
                    country: 'Jakarta',
                    city: 'Ratu Prabu',
                    discount: '',

                },
                {
                    image: require('../../../../assets/images/listing/office_3.jpg'),
                    country: 'Bandung',
                    city: 'Parahiyanngan Tower',
                    discount: '',

                },
                {
                    image: require('../../../../assets/images/listing/office_4.jpg'),
                    country: 'Bekasi',
                    city: 'Pakuwon Plaza',
                    discount: '',

                },
                {
                    image: require('../../../../assets/images/listing/office_5.jpg'),
                    country: 'BSD Serpong',
                    city: 'Casablanca Tower',
                    discount: '',

                },
                {
                    image: require('../../../../assets/images/listing/office_6.jpg'),
                    country: 'BSD Serpong',
                    city: 'Cakra Building',
                    discount: '25% Off',
                },
                {
                    image: require('../../../../assets/images/listing/office_7.jpg'),
                    country: 'Depok',
                    city: 'Ramajaya Residence',
                    discount: '',

                },
                {
                    image: require('../../../../assets/images/listing/office_8.jpg'),
                    country: 'Jakarta',
                    city: 'Thamrin City',
                    discount: '20% Off',
                },
                {
                    image: require('../../../../assets/images/listing/office_9.jpg'),
                    country: 'Jakarta',
                    city: 'Jakarta Peninsula',
                    discount: '',
                },
                {
                    image: require('../../../../assets/images/listing/office_91.jpg'),
                    country: 'Jakarta',
                    city: 'BCA Tower',
                    discount: '',
                },
                {
                    image: require('../../../../assets/images/listing/office_92.jpg'),
                    country: 'Bandung',
                    city: 'Paris van Java',
                    discount: '',
                },
                {
                    image: require('../../../../assets/images/listing/office_93.jpg'),
                    country: 'Bekasi',
                    city: 'Galacy Plaza',
                    discount: '',
                },
            ]
        }
    },
    components: {
        navbar,
        pricefilter,
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