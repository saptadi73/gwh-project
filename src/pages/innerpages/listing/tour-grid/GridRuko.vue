<template>
        <div class="container relative">
            <div class="grid grid-cols-1 pb-6 text-center mt-10">
                <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Sewa Ruko Bisa Bikin Bisnis Anda Moncer</h3>

                <p class="text-slate-400 max-w-xl mx-auto">Jika anda ingin secepatnya tajir melintir, segera putuskan ruko kami yang ideal untuk bisnis anda. Lokasi strategis didukung landscape yang ciamik buat menarik pembeli dagangan anda. Ada diskon bagus untuk tahun pertama.</p>
            </div><!--end grid-->
            <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
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
                                <li class="inline text-black dark:text-white text-sm">5.0({{ item.rating }})</li>
                            </ul>
                        </div>

                        <div
                            class="mt-4 pt-4 flex justify-between items-center border-t border-slate-100 dark:border-gray-800">
                            <h5 class="text-lg font-medium text-red-500">{{item.tarif}}</h5>

                            <a href="" class="text-slate-400 hover:text-red-500">Explore Now <i
                                    class="mdi mdi-arrow-right"></i></a>
                        </div>
                    </div>
                </div><!--end content-->
            </div>
            <pagination />
        </div>
</template>

<script>
import pagination from '@/components/listing/tour-grid/pagination'
export default {
    name: 'tourGrid',
    data() {
        return {
            datas: [
                {
                    image: require('../../../../assets/images/listing/ruko_1.jpg'),
                    country: 'Depok, Jawa Barat',
                    city: 'Grand City Depok',
                    tarif: 'Rp 8jt /bulan',
                    rating: 73,
                    discount: '10% Off',
                },
                {
                    image: require('../../../../assets/images/listing/ruko_2.jpg'),
                    country: 'Pamulang, Tangsel',
                    city: 'Villa Pamulang Indah',
                    tarif: 'Rp 2jt /bulan',
                    rating: 12,
                    discount: '',

                },
                {
                    image: require('../../../../assets/images/listing/ruko_3.jpg'),
                    country: 'Alam Sutra, Tangsel',
                    city: 'Alam Sutra',
                    tarif: 'Rp 25jt /bulan',
                    rating: 12,
                    discount: '25% Off',

                },
                {
                    image: require('../../../../assets/images/listing/ruko_4.jpg'),
                    country: 'Kebayoran, Jaksel',
                    city: 'Gandaria City',
                    tarif: 'Rp 45jt /bulan',
                    rating: 11,
                    discount: '20% Off',

                },
                {
                    image: require('../../../../assets/images/listing/ruko_5.jpg'),
                    country: 'Bali',
                    city: 'Denpasar',
                    tarif: 'Rp 67jt /bulan',
                    rating: 75,
                    discount: '25% Off',

                },
                {
                    image: require('../../../../assets/images/listing/ruko_6.jpg'),
                    country: 'Bandung, Jawa Barat',
                    city: 'Citywalk',
                    rating: 102,
                    tarif: 'Rp 25jt /bulan',
                    discount: '25% Off',
                },
                {
                    image: require('../../../../assets/images/listing/ruko_7.jpg'),
                    country: 'Bandung, Jawa Barat',
                    city: 'Geger Kalong',
                    rating: 122,
                    tarif: 'Rp 8jt /bulan',
                    discount: '10% Off',

                },
                {
                    image: require('../../../../assets/images/listing/ruko_8.jpg'),
                    country: 'BSD, Tangsel',
                    city: 'Pasar Modern',
                    tarif: '2jt /bulan',
                    rating: 15,
                    discount: '20% Off',
                },
                {
                    image: require('../../../../assets/images/listing/ruko_9.jpg'),
                    country: 'BSD, Tangsel',
                    city: 'Pasar Modern',
                    discount: '20% Off',
                    tarif: '1,5jt /bulan',
                    rating: 5
                }
            ]
        }
    },
    components: {
        pagination,
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