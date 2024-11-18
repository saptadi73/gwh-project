<template>

    <div class="container relative md:mt-24 mt-16">
        <div class="grid grid-cols-1 pb-8 text-center">
            <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Pilihan Lokasi</h3>

            <p class="text-slate-400 max-w-xl mx-auto">Pilihlah hunian dan tempat usaha berdasarkan lokasi pilihan anda!
            </p>
        </div><!--end grid-->

        <div class="grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1 mt-6 gap-6">
            <div v-for="item in datas" :key="item" class="group rounded-md shadow dark:shadow-gray-700">
                <div class="relative overflow-hidden rounded-md shadow dark:shadow-gray-700 mx-2 mt-2">
                    <img :src="item.image" class="scale-125 group-hover:scale-100 duration-500" alt="">
                    <div class="absolute top-0 start-0 p-4">
                        <span v-if="item.discount === '10% Off'"
                            class="bg-red-500 text-white text-[12px] px-2.5 py-1 font-medium rounded-md h-5">{{
                            item.discount }}</span>
                        <span v-if="item.discount === '25% Off'"
                            class="bg-red-500 text-white text-[12px] px-2.5 py-1 font-medium rounded-md h-5">{{
                            item.discount }}</span>
                        <span v-if="item.discount === '20% Off'"
                            class="bg-red-500 text-white text-[12px] px-2.5 py-1 font-medium rounded-md h-5">{{
                            item.discount }}</span>
                    </div>

                    <div class="absolute top-0 end-0 p-4">
                        <a href="javascript:void(0)"
                            class="size-8 inline-flex justify-center items-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-full text-slate-100 dark:text-slate-700 focus:text-red-500 dark:focus:text-red-500 hover:text-red-500 dark:hover:text-red-500"><i
                                class="mdi mdi-heart text-[20px] align-middle"></i></a>
                    </div>
                </div>

                <div class="p-3">
                    <p class="flex items-center text-lg text-slate-400 font-medium mb-2"><i data-feather="map-pin"
                            class="text-red-500 size-4 me-1"></i> {{ item.country }}</p>
                    <router-link to="/tour-detail-one"
                        class="text-base font-medium hover:text-red-500 duration-500 ease-in-out">{{ item.city
                        }}</router-link>

                    <div class="flex items-center mt-2">
                        <p class="text-sm text-slate-500">{{ item.notes }}</p>
                    </div>

                    <div
                        class="mt-3 pt-3 flex justify-between items-center border-t border-slate-100 dark:border-gray-800">
                        

                        <a href="" class="text-slate-400 hover:text-red-500">Jelajahi Informasi Selengkapnya <i
                                class="mdi mdi-arrow-right"></i></a>
                    </div>
                </div>
            </div><!--end content-->
        </div><!--end grid-->
    </div><!--end container-->
</template>

<script>
export default {
    name: 'tourPackage',
    data() {
        return {
            datas: [
                {
                    image: require('../../assets/images/listing/listing_1.jpg'),
                    country: 'Jakarta',
                    city: 'Apatemen, Indekos, Lapak, Kantor, dan Rumah',
                    discount: '10% Off',
                    notes: 'Bagi anda yang mencari tempat tinggal yang nyaman untuk yang bekerja di metropolitan Jakarta kami menyediakan tempat kos yang sangat nyaman. Bagi yang berkeluarga kami sediakan rumah tempat tinggal yang menawan. Kami juga menawarkan beberapa ruko pilihan untuk usaha berlokasi strategis dengan harga terjangkau. Juga tersedia lapak untuk UMKM. Tersedia juga kantor dengan fasilitas lengkap dan mewah.',
                },
                {
                    image: require('../../assets/images/listing/listing_93.jpg'),
                    country: 'Depok',
                    city: 'Indekos, Rumah, Ruko, dan Lapak',
                    discount: '',
                    notes: 'Untuk putra-putri anda yang melanjutkan pendidikan ke UI, kami menyediakan tempat kost yang aman serta nyaman untuk pitra/putri anda. Ada rumah tinggal yang bisa jdi pilihan untuk keluarga, dengan lokasi dan lingkungan hijau di Depok. Atau untuk pilihan usaha sangat cocok menyewa ruko untuk menjangkau kalangan masyarakat kota yang masih terintegrasi dengan Jakarta.',

                },
                {
                    image: require('../../assets/images/listing/listing_92.jpg'),
                    country: 'Bandung',
                    city: 'Indekos, Apartemen, Villa, dan Ruko',
                    discount: '',
                    notes: 'Kota kembang Bandung selalu pilihan nyawan untuk hunian bagi keluarga. Kami sediakan tempat kost bagi putra/putri yang menempuh pendidikan di kota ini. Kami juga menyediakan villa untuk keluarga atau rombongan yang ingin melepas lelah di Bandung. Kamu juga menyediakan pilihan ruko tempat usaha anda yang sangat patut dan layak jadi pilihan.',
                },


            ]
        }
    },
}
</script>

<style lang="scss" scoped></style>