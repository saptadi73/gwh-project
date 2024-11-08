<template>
    <NavbarGwh />
    <!-- Start Hero -->
    <section class="relative lg:pb-24 pb-16 md:mt-[84px] mt-[70px]">
        <div class="md:container container-fluid relative">
            <div
                class="relative overflow-hidden md:rounded-md shadow dark:shadow-gray-800 h-52 bg-[url('../../assets/images/bg/bg_kos.jpg')] bg-center bg-no-repeat bg-cover">
            </div>
        </div><!--end container-->

        <div class="container relative md:mt-24 mt-16">
            <div class="md:flex">
                <div class="lg:w-1/4 md:w-1/3 md:px-3">
                    <account />
                </div>

                <div class="lg:w-3/4 md:w-2/3 md:px-3 mt-6 md:mt-0">
                    <div>
                        <h5 class="text-lg font-semibold mb-6">Perkenalan Diri</h5>

                        <p class="text-slate-400 mt-4">Saya penghuni kamar 203 senang jika bisa berkenalan dengan anda semua yang sama-sama tinggal di lingkungan Kos Kahuripan, Depok, Jawa Barat</p>
                        <p class="text-slate-400 mt-2">Kebetulan saya menempuh pendidikan di UI Jurusan Biologi sejak tahun 2010. No. HP 0812356928</p>
                    </div>

                    <div class="mt-6">
                        <h5 class="text-lg font-semibold mb-6">Riwayat Hunian</h5>

                        <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
                            <div v-for="item in datas" :key="item" class="group rounded-md shadow dark:shadow-gray-700">
                                <div
                                    class="relative overflow-hidden rounded-t-md shadow dark:shadow-gray-700 mx-3 mt-3">
                                    <img :src="item.image" class="scale-125 group-hover:scale-100 duration-500" alt="">
                                    <div class="absolute top-0 start-0 p-4">
                                        <span v-if="item.discount === 'pindah'"
                                            class="bg-red-500 text-white text-[12px] px-2.5 py-1 font-medium rounded-md h-5">{{
                                item.discount }}</span>
                                        <span v-if="item.discount === 'sekarang'"
                                            class="bg-green-500 text-white text-[12px] px-2.5 py-1 font-medium rounded-md h-5">{{
                                item.discount }}</span>
                                    </div>

                                    <div class="absolute top-0 end-0 p-4">
                                        <a href="javascript:void(0)"
                                            class="size-8 inline-flex justify-center items-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-full text-slate-100 dark:text-slate-700 focus:text-red-500 dark:focus:text-red-500 hover:text-red-500 dark:hover:text-red-500"><i
                                                class="mdi mdi-heart text-[20px] align-middle"></i></a>
                                    </div>
                                </div>

                                <div class="p-4">
                                    <p class="flex items-center text-slate-400 font-medium mb-2"><i
                                            data-feather="map-pin" class="text-red-500 size-4 me-1"></i> {{ item.country
                                        }}</p>
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
                                            <li class="inline text-black dark:text-white text-sm">5.0(30)</li>
                                        </ul>
                                    </div>

                                    <div>
                                    </div>
                                </div>
                            </div><!--end content-->
                        </div><!--end grid-->
                    </div>
                    <div class="mt-6">
                        <h5 class="text-lg font-semibold mb-6">Riwayat Point</h5>

                        <div class="flex text-blue-600">
                            <div class="flex-1 w-15"><div class="flex"><i data-feather="award" class="ml-2"></i>Invoice 45201</div></div>
                            <div class="flex-1 w-2">Reward</div>
                            <div class="flex-1 w-1">400</div>
                            <div class="flex-1 w-3">23 September 2024</div>
                        </div>
                        <div class="flex text-blue-600">
                            <div class="flex-1 w-15"><div class="flex"><i data-feather="award" class="ml-2"></i>Invoice 45202</div></div>
                            <div class="flex-1 w-2">Reward</div>
                            <div class="flex-1 w-1">400</div>
                            <div class="flex-1 w-3">23 Oktober 2024</div>
                        </div>
                        <div class="flex text-red-600">
                            <div class="flex-1 w-15"><div class="flex"><i data-feather="zap" class="ml-2"></i>Invoice 45203</div></div>
                            <div class="flex-1 w-2">Redeem</div>
                            <div class="flex-1 w-1">3000</div>
                            <div class="flex-1 w-3">23 November 2024</div>
                        </div>
                    </div>
                    <div class="mt-6">
                        <h5 class="text-lg font-semibold mb-6">Riwayat Pembayaran</h5>

                        <div class="flex text-slate-500">
                            <div class="flex-1 w-15"><div class="flex">Invoice 45201</div></div>
                            <div class="flex-1 w-2">Bayar Tepat waktu</div>
                            <div class="flex-1 w-1">750.000</div>
                            <div class="flex-1 w-3">23 September 2024</div>
                        </div>
                        <div class="flex text-slate-500">
                            <div class="flex-1 w-15"><div class="flex">Invoice 45202</div></div>
                            <div class="flex-1 w-2">Bayar Tepat Waktu</div>
                            <div class="flex-1 w-1">750.000</div>
                            <div class="flex-1 w-3">23 Oktober 2024</div>
                        </div>
                        <div class="flex text-slate-500">
                            <div class="flex-1 w-15"><div class="flex">Invoice 45203</div></div>
                            <div class="flex-1 w-2">Bayar Tepat Waktu</div>
                            <div class="flex-1 w-1">747.000</div>
                            <div class="flex-1 w-3">23 November 2024</div>
                        </div>
                    </div>
                </div>
            </div><!--end grid-->
        </div><!--end container-->
    </section><!--end section-->
    <!-- End Hero -->
    <FooterGwh />
    <switcher :switcherBack=true />
</template>

<script>
import NavbarGwh from '@/components/NavbarGwh.vue';
import account from '@/components/account-tab.vue'
import FooterGwh from '@/components/FooterGwh.vue';
import switcher from '@/components/switcher.vue'
export default {
    name: 'UserProfileGwh',
    data() {
        return {
            datas: [
                {
                    image: require('../../../assets/images/listing/listing_2.jpg'),
                    country: 'Kamar 405',
                    city: 'Sejak 2021',
                    discount: 'pindah',
                },
                {
                    image: require('../../../assets/images/listing/listing_3.jpg'),
                    country: 'Kamar 203',
                    city: 'Sejak 2021',
                    discount: 'sekarang',
                },
            ]

        }
    },
    components: {
        NavbarGwh,
        account,
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